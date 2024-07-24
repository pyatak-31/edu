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
  {
    id: 'git-2',
    subject: 'GIT',
    title: 'Пройти игру LearnGitBranching',
    description: 'Нужно пройти игру, действия в которой заключаются в использоваии git команд.',
    condition: 'Сообщить о прохождении.',
    links: [
      'https://learngitbranching.js.org/?locale=ru_RU'
    ],
    isDone: false,
    isReady: true,
  },
];
