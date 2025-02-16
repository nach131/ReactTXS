import { createContext, useContext, useReducer, type ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContexValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContexValue | null>(null);

export function useTimersContext() {
  const timerCtx = useContext(TimersContext);
  if (timerCtx === null) {
    throw new Error('TimersContext is null - esto no puede seer');
  }
  return timerCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type StartTimerActions = {
  type: 'STOP_TIMER';
};
type StopTimerActions = {
  type: 'START_TIMER';
};
type AddTimerActions = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimerActions | StopTimerActions | AddTimerActions;

// definir las acciones para cambiar el estado
// o que produzcan el nuevo estado
function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === 'START_TIMER') {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === 'STOP_TIMER') {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContexValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
      // ...
    },
    startTimers() {
      dispatch({ type: 'START_TIMER' });
      // ..
    },
    stopTimer() {
      dispatch({ type: 'STOP_TIMER' });
      // ..
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
