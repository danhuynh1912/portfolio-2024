import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Constants
import { Milestone } from '../../../constants';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  item: Milestone | null;
};

const InformationDialog = (props: Props) => {
  const { open, setOpen, item } = props;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        className='relative z-10'
        // initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-semibold leading-6 text-gray-900 mb-5'
                      >
                        {item?.title}
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm'>
                          <span className='font-semibold'>Start: </span>
                          <span className='text-gray-500'>
                            {item?.monthStart}/{item?.start}
                          </span>
                        </p>
                      </div>
                      <div className='mt-2'>
                        <p className='text-sm'>
                          <span className='font-semibold'>End: </span>
                          <span className='text-gray-500'>
                            {item?.monthEnd}/{item?.end}
                          </span>
                        </p>
                      </div>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>{item?.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  {/* <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                  onClick={() => setOpen(false)}
                >
                  Deactivate
                </button> */}
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    // ref={cancelButtonRef}
                  >
                    OK
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default InformationDialog;
