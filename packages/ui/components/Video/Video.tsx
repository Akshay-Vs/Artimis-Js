// TODO: Add cva variants
import { HTMLProps } from 'react';

type VideoProps = HTMLProps<HTMLVideoElement> & {};

const Video = ({ src }: VideoProps) => {
  return (
    <video
      width="1080"
      height="1080"
      loop
      muted
      autoPlay
      preload="none"
      className={`object-cover object-center bg-gray-200`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export { Video };
