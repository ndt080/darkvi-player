import { useState } from 'react';

import {
  FullscreenControl,
  Loader,
  PlayControl,
  Player,
  Poster,
  Time,
  Timeline,
  VolumeControl,
} from '@/components';
import { DEFAULT_LAYOUT } from '@/utils/mapLayoutToStyle';

const sources = [
  {
    src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
    poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
  },
  {
    src: 'https://media-files.vidstack.io/720p.mp4',
    poster: 'https://media-files.vidstack.io/poster.png',
  },
  {
    src: 'https://video-hosting-bucket-pavel.s3.amazonaws.com/IMG_1302.MP4',
    poster: 'https://www.animefantastica.com/wp-content/uploads/J-kaisen-1536x864.jpeg',
  },
];

const LAYOUT = {
  template: ['. . . . .', 'play volume time timeline fullscreen'],
  columnsSize: 'auto auto auto 1fr auto',
  rowsSize: '1fr auto',
  gap: '10px',
};

const layouts = [LAYOUT, DEFAULT_LAYOUT];

function Preview() {
  const [source, setSource] = useState<Record<string, string>>(sources[0]);
  const [layout, setLayout] = useState<any>(layouts[0]);

  return (
    <>
      <Player src={source.src} layout={layout} muted>
        <Poster src={source.poster} />
        <Timeline />
        <PlayControl />
        <FullscreenControl />
        <VolumeControl />
        <Time />
        <Loader />
      </Player>

      <div style={{ display: 'flex', gap: '16px', margin: '20px 0 0 0' }}>
        <button onClick={() => setLayout(layouts[0])}>Layout 1</button>
        <button onClick={() => setLayout(layouts[1])}>Layout 2</button>
      </div>

      <div style={{ display: 'flex', gap: '16px', margin: '20px 0 0 0' }}>
        <button onClick={() => setSource(sources[0])}>Source 1</button>
        <button onClick={() => setSource(sources[1])}>Source 2</button>
        <button onClick={() => setSource(sources[2])}>Source 3</button>
      </div>
    </>
  );
}

export default Preview;
