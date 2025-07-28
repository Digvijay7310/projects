import React from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

function VideoData() {
  const [viewDescription, setViewDescription] = React.useState();

  const handleDescription = () => {
    setViewDescription(prev => !prev)
  }
  return (
    <div className=" max-w-[900px] p-2">
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className=" text-white text-sm">
          Jungle Sounds & Stunning Rainforest Scenery | Relaxing Nature Video
          with Birds, Waterfalls & Wildlife for Sleep, Study, or Meditation – 4K
          UHD
        </h3>

        {/* Description */}
        <div
        className=" rounded-2xl font-extralight p-2">
          <button
          className="text-white px-2 bg-gray-600 hover:cursor-pointer hover:text-gray-700 duration-200"
          onClick={handleDescription}>
            {viewDescription ? "Hide Descrition" : "Description"}</button>
          {viewDescription && (
            <p className="font-extralight text-sm text-gray-200 p-2 bg-zinc-900">
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
