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
    isDone: true,
    isReady: true,
  },
  {
    id: 'html-2',
    subject: 'HTML',
    title: 'Каркас страницы',
    description: {
      text: 'В пустом html файле написать базовую разметку (html/1). К каждой составляющей своими словами добавить комментарий (важно твое понимание), описывающий данную часть. Нужно добавить:',
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
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: true,
    isReady: true,
  },
  {
    id: 'html-3',
    subject: 'HTML',
    title: 'Семантика HTML',
    description: {
      text: 'В html файле нужно в body использовать секционные теги (html/2). Они должны быть использованы не перечислением, а в тех местах где они должны использоваться. Внутри каждого тега своими словами описать семантический смысл этого тега, указав название тега, перед описанием. Нужно использовать теги:',
      instructions: [
        'header',
        'footer',
        'main',
        'aside',
        'nav',
        'section',
        'article'
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: true,
    isReady: true,
  },
  {
    id: 'html-4',
    subject: 'HTML',
    title: 'Таблицы',
    description: {
      text: 'В html файле нужно в body создать таблицу на произвольную тему (html/3). Должны быть использованы все "табличные теги"',
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: true,
    isReady: true,
  },
  {
    id: 'html-5',
    subject: 'HTML',
    title: 'Формы',
    description: {
      text: 'В html файле нужно в body создать форму для заполнения (html/4). Перед закрытием формы должна быть кнопка "Отправить", при клике на которую должен быть отправлен post запрос по url: "test.com" (используем только html). Внутри формы должны быть использованы все теги (изучены и применены различные атрибуты тегов) применяемые для форм:',
      instructions: [
        'input (все виды type)',
        'select',
        'textarea',
        'label',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'html-6',
    subject: 'HTML',
    title: 'Изображения',
    description: {
      text: 'В html файле нужно в body создать изображение (html/5). В папке images хранить используемые изображения. Нужно изучить и использовать атрибуты:',
      instructions: [
        'src',
        'width',
        'height',
        'alt',
        'srcset (добавить и использовать изображения для разных размеров экрана)'
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: true,
  },
];
