import useAppDispatch from '@/games/2048/hooks/useAppDispatch';
import useAppSelector from '@/games/2048/hooks/useAppSelector';
import { dismissAction, resetAction } from '@/games/2048/store/action';
import { useCallback } from 'react';

const Overlay: React.FC = () => {
  const dispatch = useAppDispatch();
  const boardSize = useAppSelector((state) => state.app.boardSize);
  const reset = useCallback(
    () => dispatch(resetAction(boardSize)),
    [dispatch, boardSize],
  );
  const dismiss = useCallback(() => dispatch(dismissAction()), [dispatch]);

  const defeat = useAppSelector((state) => state.app.defeat);
  const victory = useAppSelector(
    (state) => state.app.victory && !state.app.victoryDismissed,
  );

  if (victory) {
    return (
      <div className='z-50 absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center bg-biloba-flower-950 rounded-md text-white font-lexend bg-opacity-80 text-center align-middle'>
        <h1 className='text-3xl font-bold text-biloba-flower-100'>You win!</h1>
        <div className='flex justify-center gap-2'>
          <button
            onClick={dismiss}
            className='px-3 py-2 mt-3 bg-biloba-flower-600 rounded-md hover:bg-biloba-flower-700 transition duration-200'
          >
            Keep going
          </button>
          <button
            onClick={reset}
            className='px-3 py-2 mt-3 bg-cornflower-600 rounded-md hover:bg-cornflower-700 transition duration-200'
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  if (defeat) {
    return (
      <div className='z-50 absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center bg-biloba-flower-950 text-white font-lexend bg-opacity-70 rounded-md text-center align-middle'>
        <h1 className='text-3xl font-bold text-biloba-flower-100'>
          Game over!
        </h1>
        <div>
          <button
            onClick={reset}
            className='px-3 py-2 mt-3 bg-cornflower-600 rounded-md hover:bg-cornflower-700 transition duration-200'
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Overlay;
