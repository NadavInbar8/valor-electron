import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
