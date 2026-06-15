import type { Project } from "./types";

/**
 * Личные проекты. Чтобы добавить проект — скопируйте объект-шаблон
 * и заполните поля. Порядок элементов = порядок на сайте.
 *
 * {
 *   title: 'Название',
 *   description: 'Краткое описание',
 *   contribution: 'Личный проект: ...',
 *   year: '2025',
 *   screenshots: ['/projects/my-project.png'], // опционально, файлы из public/projects/
 *   url: 'https://...',                         // опционально
 *   github: 'https://...',                      // опционально
 *   stack: ['React', 'TypeScript'],
 * }
 */
export const projects: Project[] = [
  {
    title: "Платформа для обучения программированию",
    description:
      "Онлайн-редактор кода в браузере вместо установки ПО и сбора заданий по почте и в мессенджерах. 40 студентов, 2 группы, 3 000+ решений за семестр, сбор и проверка в ~3 раза быстрее, −8 ч/нед. на рутину у преподавателя.",
    contribution:
      "Собрал под свои занятия программирования: архитектура, frontend, backend, деплой.",
    year: "2025",
    screenshots: [
      "/projects/codecolab/overview-1.jpg",
      "/projects/codecolab/overview-2.jpg",
      "/projects/codecolab/interface-1.jpg",
    ],
    url: "https://codecolab.ru",
    stack: ["React", "Elysia.js", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Телеграм mini-app для клуба настольных игр и спортивной мафии",
    description:
      "Платформа для игрового клуба: запись через сайт и Telegram, напоминания и списки участников вместо чатов и таблиц. 84 участника в базе, 40+ игр без отмен, ~120 сессий в месяц, время на организацию −83%.",
    contribution:
      "По заказу руководителя клуба: архитектура, frontend, backend, интеграция с Telegram.",
    year: "2025",
    screenshots: [
      "/projects/aid-club/overview-1.jpg",
      "/projects/aid-club/overview-2.jpg",
    ],
    url: "https://aid-club.ru",
    stack: ["React", "Elysia.js", "Prisma ORM", "PostgreSQL"],
  },
];
