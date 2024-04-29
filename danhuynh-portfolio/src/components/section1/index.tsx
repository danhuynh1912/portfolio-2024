import { useEffect } from 'react';
import { animate } from 'motion';

// Images
import Avatar from '../../assets/images/avatar.jpg';

// Videos
import Video1 from '../../assets/videos/video1.mp4';
import Video2 from '../../assets/videos/video2.mp4';
import Video3 from '../../assets/videos/video3.mp4';

const Section1 = () => {
  useEffect(() => {
    animate('.opacity-delay-1', { opacity: 1 }, { duration: 1 });
    animate(
      '.opacity-delay-2',
      { opacity: 1, transform: 'translateY(0)' },
      { delay: 0.7 },
    );
    animate(
      '.opacity-delay-3',
      { opacity: 1, transform: 'translateY(0)' },
      { delay: 0.9 },
    );
  }, []);

  return (
    <div className='h-screen flex overflow-hidden'>
      <div className='absolute w-full h-full bg-slate-950/[.6] flex justify-center pb-[2rem] px-5'>
        <div className='text-white absolute opacity-[0.6] text-sm top-4 left-4'>
          Code by Danh Huynh
        </div>

        <div className='opacity-delay-1 opacity-0 px-[1rem] py-[1rem] sm:py text-white sm:flex gap-5 items-center max-w-[50rem] h-fit sm:h-[12rem] md:h-[8rem] backdrop-blur-md rounded-lg mt-auto shadow-2xl border border-gray-500 bg-[#8e9eb15e]'>
          <div className='opacity-delay-2 translate-y-[1rem] opacity-0 min-w-[6rem] w-full sm:w-[6rem] h-[6rem] rounded-full overflow-hidden mb-2 sm:mb-0'>
            <img
              className='w-[6rem] h-full object-cover mx-auto sm:mx-0 rounded-full'
              src={Avatar}
              alt='avatar'
            />
          </div>
          <div className='opacity-delay-3 translate-y-[1rem] opacity-0'>
            <div className='text-xl font-semibold'>
              Hi! My name is Danh Huynh, I'm a{' '}
              <span className='rounded-sm p-1 text-[#70cdff]'>
                Web developer
              </span>
              .
            </div>
            <div className='opacity-[0.7]'>
              I started with Frontend development, with more than 3 years of
              experience with it, I proficiently using ReactJS, NextJS and React
              Native frameworks, In addition, I also have backend skills with
              Django, SQL,... and basic knowledge of using Google Cloud.
            </div>
          </div>
        </div>
      </div>
      <div className='h-full flex-1 hidden sm:block'>
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          className='h-full w-full object-cover'
        >
          <source src={Video2} type='video/mp4' />
        </video>
      </div>
      <div className='h-full flex-1'>
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          className='h-full w-full object-cover'
        >
          <source src={Video1} type='video/mp4' />
        </video>
      </div>
      <div className='h-full flex-1 hidden sm:block'>
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          className='h-full w-full object-cover'
        >
          <source src={Video3} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Section1;
