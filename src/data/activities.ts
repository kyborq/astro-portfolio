import type { Activity } from "./types";

/**
 * Активность вне проектов: митапы, сообщества, выступления.
 * Порядок элементов = порядок на сайте.
 *
 * {
 *   title: 'Название',
 *   role: 'Роль',                              // опционально
 *   description: 'Описание',
 *   year: '2025',
 *   cover: '/activities/my-cover.png',         // опционально, stub или png из public/activities/
 *   url: 'https://youtube.com/watch?v=...',    // опционально; для YouTube превью подтянется само
 *   urlLabel: 'YouTube',                       // опционально
 * }
 */
export const activities: Activity[] = [
  {
    title: "Coffee&Code",
    role: "Локальный организатор",
    description:
      "Глобальное IT-сообщество неформальных встреч. В Йошкар-Оле собираю разработчиков и других специалистов из индустрии: общаемся, делимся опытом, знакомимся без формального формата.",
    year: "2026",
    cover: "/activities/coffee-and-code.jpg",
  },
  {
    title: "Frontend-митап",
    description:
      "Участие во встрече фронтенд-сообщества: обсуждение продуктовой аналитики — какие метрики собирать, как встроить аналитику в продукт и на что смотреть при разработке интерфейсов.",
    year: "2025",
    url: "https://youtu.be/vTaExw1Jo5w",
  },
];
