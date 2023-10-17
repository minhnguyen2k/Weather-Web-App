import './style.scss';

interface Props {
  title: string;
  children: React.ReactNode;
}
const DailyWeatherDetailCard = ({ title, children }: Props) => {
  console.log(title);

  return (
    <div className="daily-card">
      <p>{title}</p>
      {children}
    </div>
  );
};

export default DailyWeatherDetailCard;
