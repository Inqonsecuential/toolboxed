import { type CSSProperties, useMemo } from 'react';
import clsx from 'clsx';

import {
  type Animation,
  type AnimationMerge,
  type AnimationMove,
  type AnimationNew,
  AnimationType,
} from '@/games/2048/types/Animations';
import { Direction } from '@/games/2048/types/Direction';

export interface TileProps {
  value: number;
  animations?: Animation[];
}

function tileTranslate(axis: 'X' | 'Y', value: number) {
  return `translate${axis}(calc(${value} * (1rem + 100%))`;
}

function findAnimation<T extends Animation>(
  animations: Animation[] | undefined,
  type: AnimationType,
): T {
  return animations?.find((animation) => animation.type === type) as T;
}

const Tile: React.FC<TileProps> = ({ value, animations }) => {
  const moveAnimation = useMemo(
    () => findAnimation<AnimationMove>(animations, AnimationType.MOVE),
    [animations],
  );
  const newAnimation = useMemo(
    () => findAnimation<AnimationNew>(animations, AnimationType.NEW),
    [animations],
  );
  const mergeAnimation = useMemo(
    () => findAnimation<AnimationMerge>(animations, AnimationType.MERGE),
    [animations],
  );

  const style = useMemo(() => {
    if (!moveAnimation) {
      return {};
    }

    const value: CSSProperties = {
      transition: '150ms ease-in-out all',
    };

    switch (moveAnimation.direction) {
      case Direction.UP:
        value.transform = tileTranslate('Y', -1 * moveAnimation.value);
        break;
      case Direction.DOWN:
        value.transform = tileTranslate('Y', moveAnimation.value);
        break;
      case Direction.LEFT:
        value.transform = tileTranslate('X', -1 * moveAnimation.value);
        break;
      case Direction.RIGHT:
        value.transform = tileTranslate('X', moveAnimation.value);
        break;
    }

    return value;
  }, [moveAnimation]);

  function tileColor(value: number): string {
    switch (value) {
      case 2:
        return 'bg-[#FFC3A0] text-black';
      case 4:
        return 'bg-[#FF677D] text-black';
      case 8:
        return 'bg-[#D4A5A5] text-black';
      case 16:
        return 'bg-[#392F5A] text-white';
      case 32:
        return 'bg-[#31A2AC] text-black';
      case 64:
        return 'bg-[#61C0BF] text-black';
      case 128:
        return 'bg-[#6B4226] text-white';
      case 256:
        return 'bg-[#D9BF77] text-black';
      case 512:
        return 'bg-[#ACD8AA] text-black';
      case 1024:
        return 'bg-[#2783e6] text-black';
      case 2048:
        return 'bg-[#2af57e] text-black';
      case 8096:
        return 'bg-[#C92C2C] text-white';
      case 16192:
        return 'bg-[#E56B2B] text-white';
      case 32384:
        return 'bg-[#FFAC30] text-black';
      case 64768:
        return 'bg-[#BFD641] text-black';
      case 129536:
        return 'bg-[#42B883] text-black';
      default:
        return 'bg-[#fbf6fd] text-black';
    }
  }

  return (
    <div className='leading-0 relative rounded-md  bg-biloba-flower-400 pb-[100%] text-lg'>
      {value !== 0 && (
        <div
          className={clsx(
            'leading-0 z-9 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-md bg-[#3c3a32] text-xl font-lexend font-bold',
            tileColor(value),
            {
              new: !!newAnimation,
              merge: !!mergeAnimation,
            },
          )}
          style={style}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default Tile;
