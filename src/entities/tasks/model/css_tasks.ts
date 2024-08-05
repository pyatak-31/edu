import type { Task } from "../types";

export const CSS_TASK_LIST: Array<Task> = [
  {
    id: 'css-1',
    subject: 'CSS',
    title: 'Тренажеры HTML Academy',
    description: {
      text: 'Пройти тренажеры HTML Academy по CSS',
    },
    condition: 'Сообщить о прохождении.',
    links: [
      'https://htmlacademy.ru/courses/basic-html-css'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'css-2',
    subject: 'CSS',
    title: 'Расположение стилей, селекторы, каскадность',
    description: {
      text: 'В задаче нужно опробовать написание стилей разными способами, через различные селекторы (css/1)',
      instructions: [
        'Стилизуем на свое усмотрение, но стили каждой секции не должны совпадать',
        'Первая секция берет стили из подлючения файла css',
        'Стили для второй секции пишем инлайново',
        'Стили для третьей секции располагаем в head файла html',
        'Стили в первой секции должны использовать разные селекторы (класс, id, тег, data-атрибута)',
        'Разобраться в специфичности стилизации различными селекторами и способами',
        'Описать свои наблюдения в первом пустом параграфе 1 секции',
        'Разобраться что такое каскадность',
        'Привести пример каскадности и описать во втором пустом параграфе 1 секции'
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
  {
    id: 'css-3',
    subject: 'CSS',
    title: 'Псевдоселекторы',
    description: {
      text: 'В задаче нужно опробовать стилизацию через псевдоклассы в представленных элементах (css/2). Если есть необходимость, то добавить элементов',
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
  {
    id: 'css-4',
    subject: 'CSS',
    title: 'Display',
    description: {
      text: 'В задаче нужно разобраться в блочной модели (css/3)',
      instructions: [
        'Привести примеры блочных, инлайновых (строчных) и блочно-строчных блоков',
        'Описать текстом разницу в поведении таких блоков'
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
  {
    id: 'css-5',
    subject: 'CSS',
    title: 'Позиционирование',
    description: {
      text: 'В задаче нужно разобраться в свойстве position (css/4). Написать примеры (чем больше, тем лучше) добавив описательные коментарии',
      instructions: [
        'значения: static, relative, absolute, fixed, sticky',
        'так же использовать свойства: top, right, bottom, left, z-index',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
  {
    id: 'css-6',
    subject: 'CSS',
    title: 'Шрифты',
    description: {
      text: 'В задаче нужно разобраться в подключении и применении шрфитов (css/5)',
      instructions: [
        'подключить шрифт Roboto через google-fonts в head html проекта (только Regular 400 начертание), использовать его для обычного текста',
        'подключить локально Montserrat-Bold, использовать его для заголовков',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
  {
    id: 'css-7',
    subject: 'CSS',
    title: 'Flexbox',
    description: {
      text: 'В задаче нужно изучить работу Flexbox (css/6). В html ничего не добавляем, все манипуляции осуществялем только flex свойствами',
      instructions: [
        'TODO',
        '',
      ],
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: false,
  },
];
