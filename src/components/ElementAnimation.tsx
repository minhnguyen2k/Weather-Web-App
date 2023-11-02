import '../styles/index.scss';

interface Props {
  targetOne: React.ReactNode;
  targetTwo: React.ReactNode;
  isTargetOneOverlapped: boolean;
  isTargetTwoOverlapped: boolean;
}

const ElementAnimation = ({
  targetOne,
  targetTwo,
  isTargetOneOverlapped,
  isTargetTwoOverlapped,
}: Props) => {
  return (
    <div className="animation-container">
      <div className={isTargetOneOverlapped ? 'animation-common' : ''}>
        {targetOne}
      </div>
      <div className={isTargetTwoOverlapped ? 'animation-common' : ''}>
        {targetTwo}
      </div>
    </div>
  );
};

export default ElementAnimation;
