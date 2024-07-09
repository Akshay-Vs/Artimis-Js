// TODO: Add cva variants
import { HTMLProps, forwardRef } from 'react';

type VideoProps = HTMLProps<HTMLVideoElement>;

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src }: VideoProps, ref) => {
    return (
      <video
        width="1080"
        height="1080"
        ref={ref}
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
  }
);

export default Video;

export { Video };
export type { VideoProps };
