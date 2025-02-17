import { useState, useRef, useEffect } from 'react'; // Añadido useEffect
import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000); // Corregido el nombre de la variable

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 50, 0)); // Añadida prevención para valores negativos
    }, 50);

    interval.current = timer;

    return () => clearInterval(timer); // Limpieza del intervalo
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p> {/* Añadido valor formateado */}
    </Container>
  );
}
