import { Fragment, useState } from 'react';
import { animate } from 'motion';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronDoubleLeftIcon, Bars3Icon } from '@heroicons/react/24/outline';

// Constants
import { headerTabs } from '../constants';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggle = () => {
    setOpen(!open);
  };

  const handleNavigate = (path: string) => {
    setOpen(false);
    animate('.navigate', { width: '100vw' }, { duration: 0.7 });
    setTimeout(() => {
      navigate(path);
    }, 700);
  };

  return (
    <div className=''>
      <div className='z-20 flex items-center justify-between w-full text-white absolute text-sm top-0 p-4'>
        <div className='opacity-[0.6]'>Code by Danh Huynh</div>
        <div
          role='button'
          onClick={toggle}
          className='text-white w-[2rem] opacity-[0.6] block sm:hidden'
        >
          <Bars3Icon className='w-full' />
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog className='relative z-10' onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-500'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-500'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10'>
                  <Transition.Child
                    as={Fragment}
                    enter='transform transition ease-in-out duration-500 sm:duration-700'
                    enterFrom='translate-x-[-100%]'
                    enterTo='translate-x-0'
                    leave='transform transition ease-in-out duration-500 sm:duration-700'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-[-100%]'
                  >
                    <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                      <Transition.Child
                        as={Fragment}
                        enter='ease-in-out duration-500'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in-out duration-500'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4'></div>
                      </Transition.Child>
                      <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                        <div className='px-4 sm:px-6'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                            Menu
                          </Dialog.Title>
                        </div>
                        <div className='relative mt-6 flex-1 px-4 sm:px-6 h-full flex flex-col justify-between'>
                          <div>
                            {headerTabs.map((item) => {
                              const { name, path } = item;
                              const active = pathname === path;
                              const opacityClassName = `opacity-[${
                                active ? '1' : '0.6'
                              }]`;
                              return (
                                <div
                                  role='button'
                                  className={`${opacityClassName} hover:opacity-[1] mb-2`}
                                  onClick={() => handleNavigate(path)}
                                >
                                  {name}
                                </div>
                              );
                            })}
                          </div>
                          <div
                            className='rounded-md p-2 border w-fit ml-auto'
                            role='button'
                            onClick={toggle}
                          >
                            <ChevronDoubleLeftIcon width={22} />
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className='hidden sm:flex items-center gap-11'>
          {headerTabs.map((item) => {
            const { name, path } = item;
            const active = pathname === path;
            const opacityClassName = `opacity-[${active ? '1' : '0.6'}]`;
            return (
              <div
                role='button'
                className={`${opacityClassName} hover:opacity-[1]`}
                onClick={() => handleNavigate(path)}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
