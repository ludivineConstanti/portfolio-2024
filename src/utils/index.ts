export const returnProjectOrArticleYear = (
  year: Date | string,
  shouldReturnPresent = false,
) => {
  const thisYear = new Date(Date.now()).getFullYear();
  const originalYear = new Date(year).getFullYear();
  // If dateEnd is undefined, it means that the project is ongoing
  // But if it is left to undefined, Sanity uses 1970 as a backup
  // So we need to check if the year is before or after 2000 (since no valid dateEnd will be before 2000)
  if (originalYear > 2000) {
    return originalYear;
  } else {
    return shouldReturnPresent ? "Present" : thisYear;
  }
};

export const sortAlphabetically = <T extends { text: string }[]>(
  data: T,
): T => {
  return data.sort((a, b) => (a.text > b.text ? 1 : -1));
};
