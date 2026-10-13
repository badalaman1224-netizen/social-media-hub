export const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    username: "aarav",
    photo: "https://i.pravatar.cc/300?img=12",
    followers: 12400,
    following: 340,
    bio: "Creating moments ✨ | Photography 📸",
    online: true,
    posts: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
  },
  {
    id: 2,
    name: "Ananya Singh",
    username: "ananya",
    photo: "https://i.pravatar.cc/300?img=47",
    followers: 18900,
    following: 520,
    bio: "Travel • Fashion • Lifestyle 🌸",
    online: true,
    posts: [
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    ],
  },
  {
    id: 3,
    name: "Rohan Verma",
    username: "rohan",
    photo: "https://i.pravatar.cc/300?img=33",
    followers: 8200,
    following: 280,
    bio: "Developer 💻 | Music 🎵 | Coffee ☕",
    online: false,
    posts: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    ],
  },
  {
    id: 4,
    name: "Priya Mehta",
    username: "priya",
    photo: "https://i.pravatar.cc/300?img=44",
    followers: 22100,
    following: 430,
    bio: "Dream big 🌷 | Smile more 😊",
    online: true,
    posts: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
  },
];

export const myProfile = {
  id: 0,
  name: "Badal Sharma",
  username: "badal",
  photo: "https://i.pravatar.cc/500?img=11",
  followers: 1250,
  following: 380,
  bio: "Welcome to my profile 🚀 | Building something awesome!",
  posts: [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  ],
};

export const feedPosts = [
  {
    id: 1,
    user: users[0],
    text: "Beautiful day to explore something new! 🌄✨",
    image: users[0].posts[0],
    likes: 248,
    comments: 31,
  },
  {
    id: 2,
    user: users[1],
    text: "New memories, new places, new adventures ❤️",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    likes: 412,
    comments: 48,
  },
];