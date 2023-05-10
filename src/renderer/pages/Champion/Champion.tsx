import { useParams } from 'react-router-dom';

const Champion = () => {
  const { championName } = useParams();
  return (
    <div>
      <h1>{championName}!</h1>
    </div>
  );
};
export default Champion;
