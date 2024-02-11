export const returnProjectOrArticleYear = (
  year?: Date | string,
  shouldReturnPresent = false,
) => {
  const thisYear = new Date(Date.now()).getFullYear();
  const originalYear = year ? new Date(year).getFullYear() : undefined;
  // If dateEnd is undefined, it means that the project is ongoing
  // But if it is left to undefined, Sanity uses 1970 as a backup
  // So we need to check if the year is before or after 2000 (since no valid dateEnd will be before 2000)
  if (originalYear !== undefined && originalYear > 2000) {
    return originalYear;
  } else {
    return shouldReturnPresent ? "Present" : thisYear;
  }
};

export const returnDiffInYearsAndMonths = (date1: Date, date2: Date) => {
  let years = date2.getFullYear() - date1.getFullYear();
  let months = date2.getMonth() - date1.getMonth();
  let days = date2.getDate() - date1.getDate();

  if (days < 0) {
    months--;
    days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
  }
  if (months < 0 || (months === 0 && date2.getDate() < date1.getDate())) {
    years--;
    months += 12;
  }

  if (days > 0) months++;

  const textYears = years > 0 ? `${years} ` : "";
  let textMonths = "";
  if (months >= 3) textMonths = "¼ ";
  if (months >= 6) textMonths = "½ ";
  if (months >= 9) textMonths = "¾ ";

  return years >= 1
    ? `${textYears}${textMonths}year${years > 1 ? "s" : ""}`
    : `${months} month${months > 1 ? "s" : ""}`;
};

export const sortAlphabetically = <T extends { text: string }[]>(
  data: T,
): T => {
  return data.sort((a, b) => (a.text > b.text ? 1 : -1));
};
