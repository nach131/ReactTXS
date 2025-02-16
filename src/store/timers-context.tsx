import { createContext, useContext, useReducer, type ReactNode } from 'react';

type Timer = {
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

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  useReducer(reducer, initialState);

  const ctx: TimersContexValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      // ...
    },
    startTimers() {
      // ..
    },
    stopTimer() {
      // ..
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
