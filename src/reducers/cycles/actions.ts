import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPTED_CYCLE = 'INTERRUPTED_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}
interface newCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface markCurrentCycleFinishedProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface interruptedCycleActionProps {
  type: ActionTypes.INTERRUPTED_CYCLE
}

export type ActionsProp =
  | newCycleActionProps
  | markCurrentCycleFinishedProps
  | interruptedCycleActionProps

export function addNewCycleAction(newCycle: Cycle): newCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction(): markCurrentCycleFinishedProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptedCycleAction(): interruptedCycleActionProps {
  return {
    type: ActionTypes.INTERRUPTED_CYCLE,
  }
}
