import useAppDispatch from '@/games/2048/hooks/useAppDispatch';
import useAppSelector from '@/games/2048/hooks/useAppSelector';
import { resetAction } from '@/games/2048/store/action';
import { useCallback } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const Control = () => {
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.app.boardSize);
  const reset = useCallback(
    () => dispatch(resetAction(size)),
    [dispatch, size],
  );
  return (
    <div className='my-2 flex w-full justify-between gap-5'>
      <div className='flex flex-col gap-2 text-biloba-flower-700 font-lexend'>
        <p className='text-center font-bold'>Board size</p>
        <div className='flex w-full flex-row justify-between gap-2'>
          <button
            onClick={() => dispatch(resetAction(size - 1))}
            disabled={size === 4}
          >
            <AiOutlineMinusCircle className='text-2xl' />
          </button>
          <div>{size}</div>
          <button
            onClick={() => (size < 6 ? dispatch(resetAction(size + 1)) : null)}
          >
            <AiOutlinePlusCircle className='text-2xl' />
          </button>
        </div>
      </div>
      <div className='flex'>
        <button
          onClick={() => dispatch(reset())}
          className='font-lexend text-white px-3 py-2 rounded-md font-bold bg-biloba-flower-500 hover:bg-biloba-flower-700 transition duration-200'
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default Control;
