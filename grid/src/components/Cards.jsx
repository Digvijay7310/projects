import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  let boxes = Array(12).fill(null);

  return (
    <div className="bg-amber-300 p-10">
      {/* {boxes.map((_, id) => (
            <div key={id}
             className='bg-amber-100 p-2 m-3 rounded-2xl transition-opacity'
             data-aos='zoom-in'>
                <p className="bg-gradient-to-bl from-fuchsia-400 to-orange-600 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis accusantium nobis dicta. Omnis in cupiditate aspernatur accusantium iusto, sequi a corrupti maiores quia magni nam rerum nostrum possimus voluptatibus.
                </p>
                <p className="bg-gray-200">
                    Esse autem, quam quasi assumenda facilis dolores mollitia tenetur non at sapiente voluptates iure voluptatem sint, sit accusamus molestias magnam a maiores! Asperiores facere delectus dicta ex qui quis deleniti!
                </p>
            </div>
        ))} */}

      {boxes.map((_, id) => (
        <div
          key={id}
          className="p-4 bg-sky-300 text-white m-4 hover:shadow-sm hover:shadow-emerald-600 hover:translate-x-1 hover:rounded-lg duration-200"
        >
          Hello How are you.
          <p className="mt-1.5 p-2 bg-gradient-to-b from-sky-600 to-purple-600 animation-bounce">
            This is the new div.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105">
  Hover Me
</button>


        </div>
      ))}
    </div>
  );
}

export default Cards;
