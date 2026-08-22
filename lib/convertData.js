export const replaceMongoIdInArray = (array) => {
  if (!Array.isArray(array)) return [];

  return array.map((item) => {
    if (!item) return item;
    const id = item._id ? item._id.toString() : (item.id ? item.id.toString() : "");
    const { _id, ...rest } = item;
    return {
      ...rest,
      id,
    };
  });
};

export const replaceMongoIdInObject = (obj) => {
  if (!obj || typeof obj !== "object") return null;

  const id = obj._id ? obj._id.toString() : (obj.id ? obj.id.toString() : "");
  const { _id, ...updatedObj } = obj;
  return {
    ...updatedObj,
    id,
  };
};

export const getSlug = (title) => {
  if (!title) return null;

  const slug = title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

  return slug;
};