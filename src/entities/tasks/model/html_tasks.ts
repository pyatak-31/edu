import type { Task } from "../types";

export const HTML_TASK_LIST: Array<Task> = [
  {
    id: 'html-1',
    subject: 'HTML',
    title: 'Тренажеры HTML Academy',
    description: {
      text: 'Пройти тренажеры HTML Academy по HTML (CSSом позднее займемся)',
    },
    condition: 'Сообщить о прохождении.',
    links: [
      'https://htmlacademy.ru/courses/basic-html-css'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'html-2',
    subject: 'HTML',
    title: 'Каркас страницы',
    description: {
      text: 'В пустом html файле (html/1) написать базовую разметку. К каждой составляющей своими словами добавить комментарий (важно твое понимание), описывающий данную часть. Нужно добавить:',
      instructions: [
        'doctype',
        'html',
        'head',
        'body',
        'задать кодировку UTF-8',
        'задать заголовок страницы',
        'добавить описание страницы',
        'добавить ключевые слова для поиска (frontend, html)',
        'подключить css файл (отсутствующий)',
        'исследовать способы подключения скриптов на страницу',
        'подключить js файл (отсутствующий) всеми доступными способами',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github у себя в форке репозитория',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
];
