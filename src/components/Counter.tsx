import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  changePerTime: number;
  time: number;
  style?: React.CSSProperties;
}

const Counter = ({ value, changePerTime, time, style }: Props) => {
  const [result, setResult] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setResult(prevState => {
        if (result < value) {
          return prevState + changePerTime;
        }
        return value;
      });
    }, time / (value / changePerTime));

    return () => clearInterval(intervalRef.current!);
  }, [changePerTime, result, time, value]);

  return (
    <p style={style || { fontSize: '50px' }}>
      {result === Math.round(result) ? result : result.toFixed(2)}
    </p>
  );
};

export default Counter;
