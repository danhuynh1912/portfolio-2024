// Images
import Avatar from '../../assets/images/avatar.jpg';

// Videos
import Video1 from '../../assets/videos/video1.mp4';
import Video2 from '../../assets/videos/video2.mp4';
import Video3 from '../../assets/videos/video3.mp4';

const Section1 = () => {
  return (
    <div className='h-screen flex'>
      <div className='absolute w-full h-full bg-slate-950/[.6] flex justify-center pb-[2rem] px-5'>
        <div className='text-white absolute opacity-[0.6] text-sm top-4 left-4'>
          Code by Danh Huynh
        </div>
        <div className='px-[1rem] py-[1rem] sm:py text-white sm:flex gap-5 items-center w-[50rem] sm:h-[12rem] md:h-[8rem] backdrop-blur-md rounded-lg mt-auto shadow-2xl border border-gray-500 bg-[#8e9eb15e]'>
          <div className='min-w-[6rem] w-[6rem] h-[6rem] rounded-full overflow-hidden'>
            <img
              className='w-full h-full object-cover'
              src={Avatar}
              alt='avatar'
            />
          </div>
          <div>
            <div className='text-xl font-semibold'>
              Hi! My name is Danh Huynh, I'm a{' '}
              <span className='rounded-sm p-1 bg-[#2f80ac]'>Web developer</span>
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
