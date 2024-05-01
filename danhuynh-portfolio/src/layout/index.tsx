import { animate } from 'motion';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    animate('.navigate', { width: '100vw' }, { duration: 0.7 });
    setTimeout(() => {
      navigate('/skills');
    }, 700);
  };

  return (
    <div className=''>
      <div className='z-20 flex items-center justify-between w-full text-white absolute text-sm top-0 p-4'>
        <div className='opacity-[0.6]'>Code by Danh Huynh</div>
        <div className='hidden sm:flex items-center gap-11'>
          <div
            role='button'
            className='opacity-[0.6] hover:opacity-[1]'
            onClick={handleNavigate}
          >
            Skills
          </div>
          <div role='button' className='opacity-[0.6] hover:opacity-[1]'>
            Experience
          </div>
          <div role='button' className='opacity-[0.6] hover:opacity-[1]'>
            Education
          </div>
          <div role='button' className='opacity-[0.6] hover:opacity-[1]'>
            Contact
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
