import { SkillBadgeData, VisibleSkillBadgeData } from "@/models";

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

  
  let textMonths = "";
  if (months >= 3) textMonths = "¼ ";
  if (months >= 6) textMonths = "½ ";
  if (months >= 9) textMonths = "¾ ";
  if (months = 11) {
    textMonths = "";
    years++;
    }

    const textYears = years > 0 ? `${years} ` : "";

  return years >= 1
    ? `${textYears}${textMonths}year${years > 1 ? "s" : ""}`
    : `${months} month${months > 1 ? "s" : ""}`;
};

export const sortAlphabetically = <T extends { text: string }[]>(
  data: T,
): T => {
  return data.sort((a, b) => (a.text > b.text ? 1 : -1));
};

export const sortByDateEnd = <T extends { dateEnd: Date }[]>(data: T): T => {
  return data.sort((a, b) => {
    if (a.dateEnd === undefined && b.dateEnd !== undefined) {
      return -1;
    } else if (a.dateEnd !== undefined && b.dateEnd === undefined) {
      return 1;
    }
    return 0;
  });
};

export const returnDataBasedOnFilterState = <
  T extends { skillBadges: { _id: string }[] }[],
>(
  data: T,
  selectedSkillsFilter: { value: string }[],
): T => {
  const selectedSkillsFilterIds = selectedSkillsFilter.map((e) => e.value);
  const newData = data.filter((item) => {
    return item.skillBadges.some((skillBadge) => {
      return selectedSkillsFilterIds.includes(skillBadge._id);
    });
  }) as T;
  return newData;
};

export const returnSkillsForFilter = ({
  data,
  projects,
  articles,
  showEmoji,
}: {
  data: { _id: string; text: string; emoji: string }[];
  projects: { skillBadges: { _id: string }[] }[];
  articles: { skillBadges: { _id: string }[] }[];
  showEmoji?: boolean;
}) => {
  return data
    .filter((skill) => {
      const projectsHaveSkill = projects.some((project) => {
        return project.skillBadges.some((projectSkill) => {
          return projectSkill._id === skill._id;
        });
      });
      const articlesHaveSkill = articles.some((article) => {
        return article.skillBadges.some((articleSkill) => {
          return articleSkill._id === skill._id;
        });
      });
      return projectsHaveSkill || articlesHaveSkill;
    })
    .map((skill) => ({
      value: skill._id,
      label: showEmoji ? `${skill.emoji} ${skill.text}` : skill.text,
    }));
};

export const returnVisibleSkillBadges = (
  skillBadges: SkillBadgeData[],
  maxNumber?: number,
) => {
  const max = maxNumber || 12;

  const sortedSkillBadges = skillBadges.sort((a, b) => {
    // Check if both properties are null or undefined for both objects
    const aBothUndefined =
      (a.highlighted === null || a.highlighted === undefined) &&
      (a.techStack === null || a.techStack === undefined);
    const bBothUndefined =
      (b.highlighted === null || b.highlighted === undefined) &&
      (b.techStack === null || b.techStack === undefined);

    if (aBothUndefined && !bBothUndefined) return 1;
    if (!aBothUndefined && bBothUndefined) return -1;

    // higlighted skills (prio 2)
    if (
      (a.highlighted === null || a.highlighted === undefined) &&
      b.highlighted
    )
      return -1;
    if (
      a.highlighted &&
      (b.highlighted === null || b.highlighted === undefined)
    )
      return 1;
    // Tech stack (prio 1)
    if ((a.techStack === null || a.techStack === undefined) && b.techStack)
      return -1;
    if (a.techStack && (b.techStack === null || b.techStack === undefined))
      return 1;

    return 0;
  });

  const visibleSkillBadges: VisibleSkillBadgeData[] = [];

  sortedSkillBadges.forEach((skillBadge, skillBadgeIndex) => {
    visibleSkillBadges.push(
      skillBadgeIndex < max ? skillBadge : { _id: skillBadge._id },
    );
  });

  return visibleSkillBadges.sort((a, b) => {
    if (a.text && b.text) {
      return a.text.localeCompare(b.text);
    }
    return 0;
  });
};
