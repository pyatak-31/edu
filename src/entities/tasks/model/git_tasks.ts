import type { Task } from "../types";

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
    isDone: true,
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
    isDone: true,
    isReady: true,
  },
  {
    id: 'git-4',
    subject: 'GIT',
    title: 'Непредсказуемый заказчик',
    description: {
      text: 'Наш заказчик в течение некоторого времени просит сделать нас следующие шаги:',
      instructions: [
        'вновь перейти к задаче git/1',
        'создать новую ветку(1)',
        'после, немного подумав, заказчик просит из этой новой ветки(1) создать еще одну(2)',
        'в ветке 2 "Block one" заменить на "Block один" и закоммитить это решение',
        'затем нам нужно вернуться в ветку 1 и заменить текст "Block 1" на "Block one" и закоммитить это решение',
        'выполнить слияние с веткой 2',
        'возникнет конфликт, разрешением которого станет выбор изменений из ветки 2 и коммит решенного конфликта',
        'посмотрев на все это, заказчик понимает, что ничего ему не нравится и просит нас, используя перемещение по коммитам, вернуться к изначальной версии файла с порядком блоков 1, 2, 3'
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github у себя в форке репозитория',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: true,
    isReady: true,
  },
];
