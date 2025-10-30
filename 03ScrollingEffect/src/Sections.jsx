import React from 'react'

function Sections() {
  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center bg-gray-100 relative p-4 md:p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold absolute top-4 left-4 md:top-6 md:left-6">
          Home Section
        </h1>
        <p className="text-sm md:text-base text-gray-900 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis laboriosam dolore fuga ducimus eum id excepturi laudantium suscipit dignissimos...
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-gray-200 relative p-4 md:p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold absolute top-4 left-4 md:top-6 md:left-6">
          About Section
        </h1>
        <p className="text-sm md:text-base text-gray-900 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis laboriosam dolore fuga ducimus eum id excepturi laudantium suscipit dignissimos...
        </p>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="h-screen flex flex-col items-center justify-center bg-gray-300 relative p-4 md:p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold absolute top-4 left-4 md:top-6 md:left-6">
          Gallery Section
        </h1>
        <p className="text-sm md:text-base text-gray-900 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis laboriosam dolore fuga ducimus eum id excepturi laudantium suscipit dignissimos...
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center bg-gray-400 relative p-4 md:p-8"
      >
        <h1 className="text-3xl md:text-5xl font-bold absolute top-4 left-4 md:top-6 md:left-6">
          Contact Section
        </h1>
        <p className="text-sm md:text-base text-gray-900 max-w-4xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis laboriosam dolore fuga ducimus eum id excepturi laudantium suscipit dignissimos...
        </p>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="min-h-screen flex flex-col items-center justify-start bg-gray-400 p-6 md:p-12"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Meet Our Team Members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl">
          {/* Team Member Card */}
          {[
            { name: "John Doe", role: "Web Developer", img: "https://images.pexels.com/photos/818261/pexels-photo-818261.jpeg" },
            { name: "Jane Smith", role: "UI/UX Designer", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
            { name: "Mark Johnson", role: "Project Manager", img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
            { name: "Lisa Brown", role: "Frontend Developer", img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 md:h-56 object-cover rounded-md mb-4"
              />
              <p className="text-lg md:text-xl font-semibold">{member.name}</p>
              <i className="text-gray-500 text-sm md:text-base">{member.role}</i>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Sections
