import { Player } from '@lottiefiles/react-lottie-player';
import '../styles/index.scss';

const Loading = () => {
  return (
    <div className="loading">
      <Player
        src="/lottie/loading.json"
        autoplay
        loop
        renderer="svg"
        background="transparent"
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default Loading;
