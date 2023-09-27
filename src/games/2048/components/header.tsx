import Control from '@/games/2048/components/control';
import useAppSelector from '@/games/2048/hooks/useAppSelector';

const Header = () => {
  const score = useAppSelector((state) => state.app.score);
  const best = useAppSelector((state) => state.app.best);

  return (
    <>
      <div className='flex justify-between align-middle'>
        <h1 className='text-5xl font-bold text-biloba-flower-600 font-lexend'>
          2048
        </h1>
        <div className='flex gap-6 font-lexend'>
          <div className='rounded-md bg-biloba-flower-500 px-3 py-2 w-24 text-white text-center font-bold'>
            <div className='font-bold uppercase'>Score</div>
            <div>{score}</div>
          </div>
          <div className='rounded-md bg-biloba-flower-500 px-3 py-2 w-24 text-white text-center font-bold'>
            <div className='font-bold uppercase'>Best</div>
            <div>{best}</div>
          </div>
        </div>
      </div>

      <Control />
    </>
  );
};

export default Header;
