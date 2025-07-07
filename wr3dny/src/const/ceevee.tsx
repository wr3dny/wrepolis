export interface WorkItem {
  id: number;
  company: string;
  position: string;
  from: string;
  to: string;
  description: string;
}

export const cvText = () => {
  const name = "Paweł Pawtel";
  const aboutMe =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, quo accusamus. Magni inventore iusto provident debitis tempora, repudiandae modi laboriosam quam ex soluta quos natus, quidem enim vel id maiores aspernatur aperiam aliquid! Ullam omnis molestiae hic non ipsum accusantium?";

  const contact = {
    tel: 7777,
    mail: "gg@gg",
  };

  const skills = {
    soft: {},
    hard: {},
  };

  const workPlaceData = [
    {
      id: 1,
      company: "Antra",
      position: "asystent",
      from: "1-09-2009",
      to: "1-07-2013",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 2,
      company: "Antra",
      position: "proje",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 3,
      company: "Silky Coders",
      position: "stażysta",
      from: "19-006-2023",
      to: "31-12-2023",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 4,
      company: "Silky Coders",
      position: "Junior Frontend Developer",
      from: "2-01-2024",
      to: "30-09-2025",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
  ];

  const education = [
    {
      id: 1,
      company: "Antra",
      position: "asystent",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 2,
      company: "Antra",
      position: "proje",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
  ];

  const courses = [
    {
      id: 1,
      company: "Code:Me",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 2,
      company: "Code:Me",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 3,
      company: "Code:Me",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
    {
      id: 4,
      company: "Code:Me",
      from: "1-09-2009",
      to: "1-09-2009",
      description: "Asystent projektanta konstrukcjis. Praca pod nadzorem",
    },
  ];

  const sortedWorkPlaces = [...workPlaceData].sort((a, b) => b.id - a.id);
  const sortedEducation = [...education].sort((a, b) => b.id - a.id);
  const sortedCourses = [...courses].sort((a, b) => b.id - a.id);

  return {
    name,
    aboutMe,
    skills,
    contact,
    sortedWorkPlaces,
    sortedEducation,
    sortedCourses,
  };
};
