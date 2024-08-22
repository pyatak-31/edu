import type { Task } from "../types";

export const JAVASCRIPT_TASK_LIST: Array<Task> = [
  {
    id: 'javascript-1',
    subject: 'JavaScript',
    title: 'LearnJS',
    description: {
      text: 'Изучаем портал LearnJS (js/learnJS). Когда в теме появляются практические задачи делаем следующее:',
      instructions: [
        'создаем новую ветку для всей темы (например variables)',
        'создаем каталог для заданий темы (например variables)',
        'для каждого задания создаем html страницу, именуя по порядковому номеру задачи (1.html, 2.html, ...)',
        'на странице задачи создаем заголовок и описание задачи',
        'выполняем задачу',
        'в каталоге learnJS в index.html создаем ссылки на выполненные задачи',
        'нужно так же создать удобный интерфейс для навигации и отображения всех страниц (в отдельной ветке ui)',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://learn.javascript.ru/',
      'https://github.com/pyatak-31/tasks',
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'javascript-2',
    subject: 'JavaScript',
    title: 'CodeBasics',
    description: {
      text: 'Пройти задачи',
    },
    condition: 'Сообщить о прохождении',
    links: [
      'https://code-basics.com/ru/languages/javascript',
    ],
    isDone: false,
    isReady: true,
  },
];
