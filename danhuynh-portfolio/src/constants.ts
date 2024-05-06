export type Milestone = {
  title: string;
  content: string;
  start: string;
  monthStart: number;
  end: string;
  monthEnd: number;
  height: string;
};

export const headerTabs = [
  { name: 'Skills', path: '/skills' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
];

export const timeline = [
  { year: '2018' },
  { year: '2019' },
  { year: '2020' },
  { year: '2021' },
  { year: '2022' },
  { year: '2023' },
  { year: '2024' },
  { year: '2025' },
];

export const events: Milestone[] = [
  {
    title: 'Hanoi University of Industry',
    content:
      "I complete university studies and earn Bachelor's degree in Information Technology",
    start: '2018',
    monthStart: 8,
    end: '2022',
    monthEnd: 11,
    height: '6rem',
  },
  {
    title: 'VNRobot',
    content:
      'I started my first internship at VNRobot company - a startup technology company. Here I was exposed to, learned and worked with technologies such as: Python, Django, HTML, CSS, Javascript, Git,...',
    start: '2020',
    monthStart: 3,
    end: '2020',
    monthEnd: 11,
    height: '10rem',
  },
  {
    title: 'Bkav',
    content:
      'After quitting my job at VNRobot, I applied to work for BKAV - one of the leading technology companies in Vietnam. This is where I learned and experienced the most, and is also where I first worked with React. Here I developed web and mobile apps using ReactJS, React Native, SCSS, Ant Design, Redux, Saga,... In addition, I also took on the role of guiding and supporting the training of interns.',
    start: '2021',
    monthStart: 1,
    end: '2023',
    monthEnd: 2,
    height: '14rem',
  },
  {
    title: 'Ninefive Digital Design',
    content:
      'By 2023, when I felt like I was letting the grass grow under my feet, I decided to quit my job and try to experience remote working. I applied to Ninefive Digital Design, a technology company based in Korea. Here I learned skills and experience from Korean colleagues and seniors. Technologies I use: ReactJS, NextJS, Javascript, ES6, SCSS/SASS,...',
    start: '2023',
    monthStart: 4,
    end: '2023',
    monthEnd: 11,
    height: '18rem',
  },
  {
    title: 'FPT Software',
    content:
      'FPT Software is the company I am currently working for. With the youthful, dynamic environment and the talent of my colleagues here, I have worked and learned a lot. Here, I am confident I can use frontend skills very effectively, problem solving skills are also enhanced,...',
    start: '2023',
    monthStart: 12,
    end: '2024',
    monthEnd: 5,
    height: '22rem',
  },
];
