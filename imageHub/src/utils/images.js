const images = [
  {
    id: 1,
    category: "Nature",
    title: "Save trees",
    url: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
    description: "A beautiful view of lush green trees reminding us to protect nature."
  },
  {
    id: 2,
    category: "Nature",
    title: "Fly with balloon in sky",
    url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
    description: "A colorful hot air balloon soaring high in the clear blue sky."
  },
  {
    id: 3,
    category: "Nature",
    title: "Brown hummingbird selective focus photo",
    url: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
    description: "A close-up shot of a brown hummingbird perched delicately on a branch."
  },
  {
    id: 4, 
    category: "Animals",
    title: "A tiger sits silently in forest",
    url: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg",
    description: "A majestic tiger quietly resting among the dense forest greenery."
  },
  {
    id: 5,
    category: "Animals",
    title: "A parrot on branch of a tree",
    url: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg",
    description: "A vibrant parrot perched on a tree branch, displaying its colorful feathers."
  },
  {
    id: 6,
    category: "Education",
    title: "Without Teacher education is nothing",
    url: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    description: "Students attentively listening to their teacher, highlighting the importance of education."
  },
  {
    id: 7,
    category: "Technology",
    title: "Laptop coding session",
    url: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    description: "A programmer typing on a laptop in a modern workspace."
  },
  {
    id: 8,
    category: "Travel",
    title: "Mountain adventure",
    url: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
    description: "Hikers enjoying a breathtaking view of the mountains."
  },
  {
    id: 9,
    category: "Food",
    title: "Delicious sushi plate",
    url: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    description: "Fresh sushi arranged beautifully on a wooden platter."
  },
  {
    id: 10,
    category: "Sports",
    title: "Football stadium night",
    url: "https://images.pexels.com/photos/46798/pexels-photo-46798.jpeg",
    description: "A packed football stadium lit up for a thrilling night match."
  },
  {
    id: 11,
    category: "Nature",
    title: "Sunset by the lake",
    url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    description: "Golden sunset reflecting over a serene lake."
  },
  {
    id: 12,
    category: "Animals",
    title: "Cute baby elephant",
    url: "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg",
    description: "A playful baby elephant in the wild."
  },
  {
    id: 13,
    category: "Education",
    title: "Student reading a book",
    url: "https://images.pexels.com/photos/159711/pexels-photo-159711.jpeg",
    description: "A focused student immersed in reading a textbook."
  },
  {
    id: 14,
    category: "Technology",
    title: "Robotics lab",
    url: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    description: "A modern robotics lab with engineers working on machines."
  },
  {
    id: 15,
    category: "Travel",
    title: "Beach paradise",
    url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    description: "White sandy beach with turquoise water and clear skies."
  },
  {
    id: 16,
    category: "Food",
    title: "Cupcake desserts",
    url: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
    description: "Colorful cupcakes arranged for a festive treat."
  },
  {
    id: 17,
    category: "Sports",
    title: "Basketball dunk",
    url: "https://images.pexels.com/photos/1102859/pexels-photo-1102859.jpeg",
    description: "A player performing a slam dunk during a competitive game."
  },
  {
    id: 18,
    category: "Nature",
    title: "Foggy forest path",
    url: "https://images.pexels.com/photos/4827/nature-forest-fog-fall.jpg",
    description: "A mysterious forest path enveloped in morning fog."
  },
  {
    id: 19,
    category: "Animals",
    title: "Playful kittens",
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    description: "Two kittens playing together on a sunny day."
  },
  {
    id: 20,
    category: "Education",
    title: "Graduation ceremony",
    url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    description: "Students celebrating their graduation in caps and gowns."
  },
  {
    id: 21,
    category: "Technology",
    title: "Smartphone photography",
    url: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg",
    description: "A person capturing a photo with a modern smartphone."
  },
  {
    id: 22,
    category: "Travel",
    title: "City skyline at night",
    url: "https://images.pexels.com/photos/358485/pexels-photo-358485.jpeg",
    description: "Skyscrapers lit up beautifully against the night sky."
  },
  {
    id: 23,
    category: "Food",
    title: "Fresh salad bowl",
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A healthy salad with fresh vegetables and herbs."
  },
  {
    id: 24,
    category: "Sports",
    title: "Marathon runners",
    url: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg",
    description: "Runners competing in a city marathon on a bright day."
  },
  {
    id: 25,
    category: "Nature",
    title: "Waterfall in forest",
    url: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg",
    description: "A serene waterfall surrounded by dense green forest."
  },
  {
    id: 26,
    category: "Animals",
    title: "Wild fox in snow",
    url: "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg",
    description: "A wild fox exploring the snowy landscape during winter."
  }
];

export default images;
