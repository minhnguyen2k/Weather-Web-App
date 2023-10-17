import { FC, useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  changePerTime: number;
  time: number;
}

const Counter: FC<Props> = ({ value, changePerTime, time }: Props) => {
  const [result, setResult] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setResult(prevState => {
        if (result < value - changePerTime) {
          return prevState + changePerTime;
        }
        return prevState;
      });
    }, time / (value / changePerTime));

    return () => clearInterval(intervalRef.current!);
  }, [changePerTime, result, time, value]);

  return <h1>{result === Math.round(result) ? result : result.toFixed(2)}</h1>;
};

export default Counter;
