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
    isDone: true,
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
    isDone: true,
    isReady: true,
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
    isDone: true,
    isReady: true,
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
    isDone: true,
    isReady: true,
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
    isDone: true,
    isReady: true,
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
    isDone: true,
    isReady: true,
  },
  {
    id: 'css-7',
    subject: 'CSS',
    title: 'Flexbox',
    description: {
      text: 'В задаче нужно изучить работу Flexbox (css/6)',
      instructions: [
        'В html ничего не добавляем',
        'Все манипуляции осуществялем только flex свойствами в css файле',
        'Результат должен быть как на result.png (не точь в точь по размерам)'
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
    id: 'css-8',
    subject: 'CSS',
    title: 'Игра Flexbox Froggy',
    description: {
      text: 'Пройти игру Flexbox Froggy',
    },
    condition: 'Сообщить о прохождении.',
    links: [
      'https://flexboxfroggy.com/#ru'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'css-9',
    subject: 'CSS',
    title: 'Grid Layout',
    description: {
      text: 'В задаче нужно изучить работу Grid Layout (css/7)',
      instructions: [
        'В html ничего не добавляем',
        'Все манипуляции осуществялем только grid свойствами в css файле',
        'Результат должен быть как на result.png (не точь в точь по размерам)',
        'Блоки section должны быть расставлены с использованием grid-template-areas',
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
    id: 'css-10',
    subject: 'CSS',
    title: 'Игра Grid Garden',
    description: {
      text: 'Пройти игру Grid Garden',
    },
    condition: 'Сообщить о прохождении.',
    links: [
      'https://cssgridgarden.com/#ru'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'css-11',
    subject: 'CSS',
    title: 'БЭМ',
    description: {
      text: 'В задаче нужно изучить методологию БЭМ (css/8). Написать не большую страницу на произвольную тему и стилизовать ее используя методологию БЭМ',
    },
    condition: 'Запушить изменения и создать Pull Request в Github',
    links: [
      'https://github.com/pyatak-31/tasks'
    ],
    isDone: false,
    isReady: true,
  },
  {
    id: 'css-12',
    subject: 'CSS',
    title: 'Верстка по видео',
    description: {
      text: 'Верстаем синхронно, вдумчиво по видео. Можно и по другим. Чем больше и разнообразнее, тем лучше',
    },
    condition: 'Сообщить о завершении',
    links: [
      'https://www.youtube.com/watch?v=f-irDQwt1l4&list=PLM6XATa8CAG4AW_GePgN71pRz3QwD0GLJ',
      'https://www.youtube.com/watch?v=0UUK4VDblXM&list=PLM6XATa8CAG4AW_GePgN71pRz3QwD0GLJ&index=2',
      'https://www.youtube.com/watch?v=sohdv21BVNI&list=PLM6XATa8CAG45G8-Qg79-9RDKvTuq_oUV',
    ],
    isDone: false,
    isReady: true,
  },
];
