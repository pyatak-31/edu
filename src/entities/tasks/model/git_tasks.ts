import type { Task } from "@/shared/types";

export const GIT_TASK_LIST: Array<Task> = [
  {
    id: 'git-1',
    subject: 'GIT',
    title: 'Пройти интерактив GitHowTo',
    description: {
      text: 'Нужно пройти обучающий интерактивный тур на сайте.',
    },
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
    description: {
      text: 'Нужно пройти игру, действия в которой заключаются в использоваии git команд.',
    },
    condition: 'Сообщить о прохождении.',
    links: [
      'https://learngitbranching.js.org/?locale=ru_RU'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'git-3',
    subject: 'GIT',
    title: 'Взаимодействие с GitHub',
    description: {
      text: 'Посредством git команд выполнить:',
      instructions: [
        'по ссылке из задачи сделать fork репозитория',
        'склонировать по HTTPS из своего репозитория форк',
        'задание находится в директории git/1',
        'изменения необходимо сделать в отдельной ветке с названием "git-1-reverse-blocks"',
        'в файле задачи произвести перестановку div блоков так, что бы порядок стал 3, 2, 1',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github у себя в форке репозитория',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: true,
  },
];
