import PersonalDetails from "../component/personal-details";
import ContactInfo from "../component/contact-info";
import ChangePassword from "../component/change-password";
import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import { redirect } from "next/navigation";

async function Profile() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  return (
    <div className="space-y-8">
      {/* 1. Personal Profile Details Card */}
      <PersonalDetails userInfo={loggedInUser} />

      {/* 2. Contact Info & Security Credentials (2-Column Grid) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100/90 dark:border-slate-800 transition-colors">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ChangePassword email={loggedInUser?.email} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
