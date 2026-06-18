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
    stack: [
      "React",
      "Elysia.js",
      "Telegram Bot API",
      "Prisma ORM",
      "PostgreSQL",
    ],
  },
  {
    title: "Куда в городе",
    description:
      "Как Авито, но для событий: афиша с фильтрами по городу, дате и категории, каталог площадок, сообщества и «ищу компанию» для концертов, митапов, настолок и прогулок. Один сервис вместо разрозненных чатов — найти куда пойти и с кем.",
    contribution:
      "Pet-project: продуктовая концепция и архитектура (события, места, люди), frontend и backend на Next.js, авторизация, профиль и выбор города.",
    year: "2026",
    stack: ["Next.js", "React", "Drizzle ORM", "PostgreSQL"],
     screenshots: [
      "/projects/kudavgorode/overview-1.jpg",
      "/projects/kudavgorode/overview-2.jpg",
    ],
    url: "https://kudavgorode.ru",
  },
  {
    title: "КандиПоиск",
    description:
      "Платформа для поиска кандидатов по открытому резюме. Собирает сырой поток профилей из Telegram, форм и резюме, парсит их в структуру и даёт поиск по естественному запросу и фильтрам",
    contribution:
      "Pet‑project: идея продукта, архитектура, веб‑приложение на SvelteKit, worker для фоновой обработки, схема БД и работа с PostgreSQL через Prisma",
    year: "2026",
    screenshots: ["/projects/kandipoisk/overview-1.jpg"],
    url: "https://kandipoisk.ru",
    stack: [
      "SvelteKit",
      "Telegram API",
      "Telegram Bot API",
      "PostgreSQL",
      "Prisma",
    ],
  },
];
