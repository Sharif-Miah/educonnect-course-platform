import { Enrollment } from "@/model/enrollment-model";
import { Course } from "@/model/course-model";
import { replaceMongoIdInArray } from "@/lib/convertData";
import { dbConnect } from "@/service/mongo";


export async function getEnrollmentsForCourse(courseId) {
    await dbConnect();
    const enrollments = await Enrollment.find({ course: courseId }).lean();
    return replaceMongoIdInArray(enrollments);
}

export async function getEnrollmentsForUser(userId) {
    try {
        await dbConnect();
        const enrollments = await Enrollment.find({ student: userId })
        .populate({
            path: "course",
            model: Course,
        }).lean();
        return replaceMongoIdInArray(enrollments);
    } catch (err) {
        throw new Error(err);
    }
}

export async function hasEnrollmentForCourse(courseId, studentId) {
    if (!courseId || !studentId) return false;
    try {
      await dbConnect();
      const enrollment = await Enrollment.findOne({
        course: courseId,
        student: studentId,
      })
        .populate({
          path: "course",
          model: Course,
        })
        .lean();

      if (!enrollment) return false;

      return true;
    } catch (error) {
      console.error("Error in hasEnrollmentForCourse:", error.message);
      return false;
    }
  }

export async function enrollForCourse(courseId, userId, paymentMethod) {
    const newEnrollment = {
        course: courseId,
        student: userId,
        method: paymentMethod,
        enrollment_date: Date.now(),
        status: "not-started"
    }

    try{
        await dbConnect();
        const response = await Enrollment.create(newEnrollment);
        return response;
    } catch(error) {
       throw new Error(error);
    }
}
