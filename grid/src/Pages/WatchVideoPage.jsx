import React from 'react';
import { Helmet } from 'react-helmet';

import VideoPlayer from '../components/VideoComponents/VideoPlayer';
import VideoData from '../components/VideoComponents/VideoData';
import Comments from '../components/VideoComponents/Comments';
import SuggestionVideo from '../components/VideoComponents/SuggestionVideo';
import VideoDetails from '../components/VideoComponents/VideoDetails';

function WatchVideoPage() {
  return (
    <>
      <Helmet>
        <title>Watch Video - Nameloopy</title>
        <meta name="description" content="Watch amazing videos with stunning rainforest scenery and relaxing nature sounds. Brought to you by Nameloopy." />
        <meta name="keywords" content="nature video, rainforest, relaxing video, meditation, Nameloopy" />
        <meta name="author" content="Nameloopy" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Watch Video - Nameloopy" />
        <meta property="og:description" content="Relax with stunning jungle sounds and beautiful rainforest scenery." />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="URL_TO_THUMBNAIL_IMAGE" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Watch Video - Nameloopy" />
        <meta name="twitter:description" content="Relax with stunning jungle sounds and beautiful rainforest scenery." />
        <meta name="twitter:image" content="URL_TO_THUMBNAIL_IMAGE" />
      </Helmet>

      <div className="bg-black">
        <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">
          <div>
            <VideoPlayer />
            <VideoDetails/>
            <VideoData />

            <Comments />
          </div>
          <div>
            <SuggestionVideo />
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchVideoPage;
