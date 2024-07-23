import type { Task } from "@/shared/types";

export const GIT_TASK_LIST: Array<Task> = [
  {
    id: 'git-1',
    subject: 'GIT',
    title: 'Пройти интерактив GitHowTo',
    description: 'Нужно пройти обучающий интерактивный тур на сайте.',
    condition: 'Сообщить о прохождении.',
    links: [
      'https://githowto.com/ru'
    ],
    isDone: false,
    isReady: true,
  },
];
