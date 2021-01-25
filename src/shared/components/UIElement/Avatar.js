import './Avatar.css';

const Avatar = ({className, image, alt, width, style}) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
      />
    </div>
  );
};

export default Avatar;
