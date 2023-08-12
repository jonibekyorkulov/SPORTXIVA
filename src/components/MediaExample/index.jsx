// MediaExample

import { MediaOutlet, MediaPlayer } from '@vidstack/react';
import 'vidstack/styles/defaults.css';

export default function MediaExample({mediaUrl}) {
  if(mediaUrl == 1) return (
    <MediaPlayer
      src={require('../../media/document_5366152270134128241.mp4')}
      poster={require('../../media/poster4.jpg')}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
  if(mediaUrl == 2) return (
    <MediaPlayer
      src={require('../../media/document_5366152270134128228.mp4')}
      poster={require('../../media/post_bg2.png')}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
  if(mediaUrl == 3) return (
    <MediaPlayer
      src={require('../../media/1111.mp4')}
      poster={require('../../media/video_post_img.jpg')}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
  if(mediaUrl == 4) return (
    <MediaPlayer
      src={require('../../media/document_5366152270134128252.mp4')}
      poster={require('../../media/poster3.jpeg')}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
  if(mediaUrl == 5) return (
    <MediaPlayer
      src={require('../../media/document_5366152270134128254.mp4')}
      poster={require('../../media/poster2.jpeg')}
      controls
    >
      <MediaOutlet />
    </MediaPlayer>
  );
  return <></>
}

// 