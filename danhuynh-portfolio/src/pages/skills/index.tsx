import { useEffect } from 'react';
import { animate } from 'motion';

// Images
import SkillsBackground from '../../assets/images/cyan-background.webp';
import Avatar from '../../assets/images/avatar.jpg';
import React from '../../assets/images/react.jpeg';
import NextJS from '../../assets/images/nextjs.webp';
import Vite from '../../assets/images/vite.png';
import Tailwind from '../../assets/images/tailwind.png';
import Typescript from '../../assets/images/typescript.png';
import ES6 from '../../assets/images/es6.webp';
import Redux from '../../assets/images/redux.jpeg';
import Django from '../../assets/images/django.png';
import SQL from '../../assets/images/sql.png';
import Python from '../../assets/images/python.png';
import GIT from '../../assets/images/git.jpeg';
import Jira from '../../assets/images/jira.png';

const frontendSkills = [
  { id: 0, name: 'ReactJS', logo: React },
  { id: 1, name: 'NextJS', logo: NextJS },
  { id: 2, name: 'Redux + Redux Toolkit', logo: Redux },
  { id: 3, name: 'Vite', logo: Vite },
  { id: 4, name: 'React Native', logo: React },
  { id: 5, name: 'Tailwind CSS', logo: Tailwind },
  { id: 6, name: 'Typescript', logo: Typescript },
  { id: 7, name: 'ES6', logo: ES6 },
];

const backendSkills = [
  { id: 0, name: 'Python', logo: Python },
  { id: 1, name: 'Django', logo: Django },
  { id: 2, name: 'SQL', logo: SQL },
  { id: 3, name: 'Git, github, gitlab, bitbucket', logo: GIT },
  { id: 4, name: 'Jira', logo: Jira },
];

const SkillsPage = () => {
  useEffect(() => {
    animate('.navigate-end', { width: 0 }, { duration: 0.7 });
    // animate('.skills-page', { opacity: 1 }, { duration: 0.5, delay: 1 });
    animate(
      '.skills-avatar',
      { transform: 'translateX(0) rotate(0deg)' },
      { duration: 1.2, delay: 0.3 },
    );
    animate('.skills', { height: '30rem' }, { duration: 0.6, delay: 1 });
    animate(
      '.skills',
      { width: '36rem', padding: '16px' },
      { duration: 1, delay: 1.6 },
    );
    animate('.skills-content', { opacity: 1 }, { duration: 1.2, delay: 2.6 });
  }, []);

  return (
    <>
      <div className='navigate ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-30 absolute right-0 bg-white h-screen w-0'></div>

      <div className='navigate-end ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-30 absolute left-0 bg-white h-screen w-screen'></div>
      <div className='skills-page h-screen w-screen bg-black overflow-hidden'>
        {/* <div className='absolute rounded-full w-[20rem] h-[20rem] bg-cyan-700' />
      <div className='absolute bottom-0 right-0 rounded-full w-[20rem] h-[20rem] bg-cyan-700' /> */}
        <img
          src={SkillsBackground}
          alt='cyan-background'
          className='w-full h-full scale-[2.5] origin-left'
        />
        <div className='z-[1] absolute top-0 backdrop-blur-lg w-full h-full flex gap-5 justify-center items-center text-white bg-[#28211278]'>
          <div className='skills p-0 w-0 h-0 border border-gray-500 rounded-md bg-[#ffffff1c]'>
            <div className='skills-content opacity-0'>Frontend (Main)</div>
            <div className='skills-content opacity-0 grid grid-cols-2 gap-4 mt-3'>
              {frontendSkills.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center gap-3 border border-gray-500 rounded-md p-3 shadow-lg'
                >
                  <img
                    src={item.logo}
                    alt='skill'
                    className='min-w-[4rem] min-h-[4rem] w-[4rem] h-[4rem] rounded-full object-cover'
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src={Avatar}
            alt='avatar'
            className='skills-avatar translate-y-[36rem] rotate-180 ease-[cubic-bezier(0.22, 1, 0.36, 1)] w-[10rem] h-[10rem] rounded-full shadow-2xl border-white border-4'
          />
          <div className='skills p-0 w-0 h-0 border border-gray-500 rounded-md bg-[#ffffff1c]'>
            <div className='skills-content opacity-0'>Backend and others</div>
            <div className='skills-content opacity-0 grid grid-cols-2 gap-4 mt-3'>
              {backendSkills.map((item) => (
                <div
                  key={item.id}
                  className='flex items-center gap-3 border border-gray-500 rounded-md p-3 shadow-lg'
                >
                  <img
                    src={item.logo}
                    alt='skill'
                    className='w-[4rem] h-[4rem] rounded-full object-cover'
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
