export const sortAlphabetically = <T extends { text: string }[]>(
  data: T,
): T => {
  return data.sort((a, b) => (a.text > b.text ? 1 : -1));
};
