import { useState, useEffect } from 'react'; // Añadido useEffect
import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000); // Corregido el nombre de la variable

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => Math.max(prevTime - 50, 0)); // Añadida prevención para valores negativos
    }, 50);

    return () => clearInterval(interval); // Limpieza del intervalo
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
