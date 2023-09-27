import { type Direction } from '@/games/2048/types/Direction';
import { ActionType } from '@/games/2048/types/ActionType';
import { type ActionModel } from '@/games/2048/types/Models';

function resetAction(size: number): ActionModel {
  return {
    type: ActionType.RESET,
    value: size,
  };
}

function undoAction(): ActionModel {
  return {
    type: ActionType.UNDO,
  };
}

function moveAction(direction: Direction): ActionModel {
  return {
    type: ActionType.MOVE,
    value: direction,
  };
}

function dismissAction(): ActionModel {
  return {
    type: ActionType.DISMISS,
  };
}

export { resetAction, undoAction, moveAction, dismissAction };
