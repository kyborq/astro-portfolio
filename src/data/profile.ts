import type { Profile } from "./types";

export const profile: Profile = {
  name: "Константин Подыганов",
  title: "Frontend-инженер · React & TypeScript",
  tagline:
    "Делаю сложные B2B-интерфейсы быстрыми, стабильными и удобными в поддержке",
  location: "Москва · удалённо",
  bio: "4+ года в enterprise и B2B. Часто единственный frontend на проекте с тысячами пользователей: выстраиваю архитектуру с нуля, принимаю технические решения, убираю узкие места до того, как они становятся проблемой для бизнеса.",
  lookingFor: {
    label: "Ищу",
    items: [
      "Удалённая работа · компании из РФ",
      "Full-time или contract",
      "Frontend: React, TypeScript, B2B/enterprise",
    ],
  },
  contacts: [
    { label: "Telegram", value: "@kyborq", href: "https://t.me/kyborq" },
    {
      label: "Email",
      value: "k.podyganov@mail.ru",
      href: "mailto:k.podyganov@mail.ru",
    },
    { label: "GitHub", value: "kyborq", href: "https://github.com/kyborq" },
    {
      label: "LinkedIn",
      value: "konstantin-podyganov",
      href: "https://www.linkedin.com/in/konstantin-podyganov/",
    },
    { label: "Setka", value: "set.ki", href: "https://set.ki/account/h3PzzTW" },
  ],
  primaryContactHref: "https://t.me/kyborq",
  cv: { label: "Скачать резюме", href: "/podyganov-konstantin-frontend.pdf" },
};
