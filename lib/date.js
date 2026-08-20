export const formatMyDate = (date) => {
  if (!date) return "N/A";

  try {
    const d = date instanceof Date ? date : new Date(date);
    if (isNaN(d.getTime())) {
      return "N/A";
    }
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(d);
  } catch (error) {
    return "N/A";
  }
};

export const formatDuration = (duration) => {
  if (!duration || isNaN(duration)) return null;

  var hour = Math.floor(duration / 3600);
  var min = Math.floor((duration % 3600) / 60);
  var sec = Math.floor((duration % 3600) % 60);

  return `${hour}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
};