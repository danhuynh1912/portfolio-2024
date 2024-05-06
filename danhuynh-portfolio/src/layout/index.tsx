import { animate } from 'motion';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// Constants
import { headerTabs } from '../constants';

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleNavigate = (path: string) => {
    animate('.navigate', { width: '100vw' }, { duration: 0.7 });
    setTimeout(() => {
      navigate(path);
    }, 700);
  };

  return (
    <div className=''>
      <div className='z-20 flex items-center justify-between w-full text-white absolute text-sm top-0 p-4'>
        <div className='opacity-[0.6]'>Code by Danh Huynh</div>
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
