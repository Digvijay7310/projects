import React from "react";
import { FaEye } from "react-icons/fa";
import { LuEarOff, LuEye, LuEyeClosed } from "react-icons/lu";

function VideoData() {
  const [viewDescription, setViewDescription] = React.useState();

  const handleDescription = () => {
    setViewDescription(prev => !prev)
  }
  return (
    <div className="mt-2 max-w-[900px] p-2">
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="font-semibold text-amber-800 text-md">
          Jungle Sounds & Stunning Rainforest Scenery | Relaxing Nature Video
          with Birds, Waterfalls & Wildlife for Sleep, Study, or Meditation – 4K
          UHD
        </h3>

        {/* Description */}
        <div className="text-sm text-red-900 font-extralight p-2">
          <button onClick={handleDescription}>{viewDescription ? <LuEye /> : <LuEyeClosed />}</button>
          {viewDescription && (
            <p className="font-extralight text-sm text-red-900">
              Explore the Untamed Beauty of the Jungle: Exotic Wildlife, Lush
              Green Rainforest, Hidden Waterfalls, Chirping Birds, Roaring
              Animals, Dense Canopy, Serene River Streams, Wild Adventure,
              Nature Sounds, Tropical Paradise, Majestic Trees, Mysterious
              Trails, Morning Mist, Sunset Glow, Peaceful Ambience, Pristine
              Wilderness, Vibrant Flora and Fauna, Earth’s Natural Wonder,
              Jungle Safari Journey, Deep Into the Heart of Nature’s Green
              Kingdom, Full HD Relaxing Background Video with Soothing Sounds
              and Stunning Scenery for Meditation, Study, Sleep, or Pure
              Immersive Escape into Nature’s Wild Realm
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoData;
