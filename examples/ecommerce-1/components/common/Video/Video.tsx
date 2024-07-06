type TVideoProps = {
  src: string;
  className: string;
};

const Video = ({ src, className }: TVideoProps) => {
  return (
    <video
      width="1080"
      height="1080"
      loop
      muted
      autoPlay
      preload="none"
      className={`object-cover object-center bg-gray-200 ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
