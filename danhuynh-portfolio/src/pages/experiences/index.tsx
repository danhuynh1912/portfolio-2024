import { useEffect, useState } from 'react';
import { animate } from 'motion';

// Components
import InformationDialog from '../../components/experiences/information-dialog';

// Images
import SkillsBackground from '../../assets/images/cyan-background.webp';
import FPT from '../../assets/images/fpt-background.png';

// Constants
import { Milestone, events, timeline } from '../../constants';

const SkillsPage = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Milestone | null>(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (selected: Milestone) => {
    handleToggle();
    setSelected(selected);
  };

  //   const cancelButtonRef = useRef(null);
  useEffect(() => {
    animate('.navigate-end', { width: 0 }, { duration: 0.7 });
    // animate('.skills-page', { opacity: 1 }, { duration: 0.5, delay: 1 });
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
        <img
          src={FPT}
          alt='fpt-background'
          className='absolute hidden lg:block pointer-events-none z-[2] top-[-10rem] lg:top-[-14rem] xl:top-[-20rem] 2xl:top-[-26rem] opacity-[0.3] left-0 object-cover w-screen 2xl:scale-[1.3] origin-left'
        />
        <div className='z-[1] absolute top-0 backdrop-blur-lg w-full h-full hidden lg:flex gap-5 justify-center items-end text-white bg-[#28211278]'>
          <div className='flex mb-[6rem]'>
            {timeline.map((item, index) => {
              const startEvents = events.filter(
                (_item) => _item.start === item.year,
              );
              const endEvents = events.filter(
                (_item) => _item.end === item.year,
              );
              return (
                <div
                  className={`relative border-l-yellow-200 border-l-[1px] h-[2rem] ${
                    timeline.length - 1 === index ? 'w-0' : 'w-48'
                  }`}
                >
                  <span className='text-xl absolute left-[-1.3rem] bottom-[-3rem]'>
                    {item.year}
                  </span>
                  {startEvents.map((_item, _index) => {
                    const { start, end, monthStart, monthEnd, height } = _item;
                    const eventWidth = `${
                      (Number(end) - Number(start)) * 12 +
                      (monthEnd - monthStart)
                    }rem`;
                    return (
                      <div
                        style={{
                          width: `${monthStart}rem`,
                          height: height,
                          zIndex: timeline.length * 2 - index - _index,
                        }}
                        className={`absolute left-0 bottom-0 border-r-[#fff] border-r-[1px]`}
                      >
                        <div
                          role='button'
                          onClick={() => handleSelect(_item)}
                          style={{ width: `calc(${eventWidth} + 1px)` }}
                          className={`text-nowrap text-ellipsis overflow-hidden hover:bg-[#767f87] bg-[#585d62] border border-[#fff] translate-x-full translate-y-[-1rem] float-right p-3 rounded-t-lg`}
                        >
                          {_item.title}
                        </div>
                      </div>
                    );
                  })}
                  {endEvents.map((_item, _index) => {
                    const { monthEnd, height } = _item;
                    return (
                      <div
                        style={{
                          width: `${monthEnd}rem`,
                          height: height,
                        }}
                        className={`absolute left-0 bottom-0 border-r-[#fff] border-r-[1px]`}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <InformationDialog open={open} setOpen={setOpen} item={selected} />
    </>
  );
};

export default SkillsPage;
