import { useState } from "react";
import "./App.css";

const users = [
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
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
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
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
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
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
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
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    ],
  },
];

const myProfile = {
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

const feedPosts = [
  {
    id: 1,
    user: users[0],
    text: "Beautiful day to explore something new! 🌄✨",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likes: 248,
    comments: 31,
  },
  {
    id: 2,
    user: users[1],
    text: "New memories, new places, new adventures ❤️",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    likes: 412,
    comments: 48,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedUser, setSelectedUser] = useState(null);
  const [following, setFollowing] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const [search, setSearch] = useState("");

  const [messageUser, setMessageUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [messageText, setMessageText] = useState("");

  const [newPostText, setNewPostText] = useState("");
  const [myPosts, setMyPosts] = useState(myProfile.posts);

  /* <==HELPBOX STATE==> */

  const [helpMessage, setHelpMessage] = useState("");

  const [helpChat, setHelpChat] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! 👋 I'm SocialHub Assistant. Choose a problem below or type your question.",
    },
  ]);

  /* <==HELPBOX PROBLEM DATABASE==> */

  const helpProblems = [
    {
      id: "login",
      icon: "🔐",
      title: "Login problem",
      keywords: [
        "login",
        "log in",
        "signin",
        "sign in",
        "password",
        "account",
        "cant login",
        "cannot login",
        "unable login",
        "loggin",
        "loign",
      ],
      answer:
        "🔐 Login Solution\n\nCheck your username and password and make sure there are no extra spaces. If you forgot your password, use the password recovery option.",
    },

    {
      id: "message",
      icon: "💬",
      title: "Messages not working",
      keywords: [
        "message",
        "messages",
        "msg",
        "msgs",
        "mesage",
        "mesages",
        "mesg",
        "chat",
        "chats",
        "text",
        "dm",
        "send message",
        "cant message",
        "cannot message",
        "messaging",
      ],
      answer:
        "💬 Message Solution\n\nOpen Messages or Explore → select the person → type your message → press Send.\n\nIf it doesn't work, refresh the page and try again.",
    },

    {
      id: "profile",
      icon: "👤",
      title: "Profile problem",
      keywords: [
        "profile",
        "profle",
        "profil",
        "proflie",
        "profiel",
        "bio",
        "picture",
        "photo",
        "pic",
        "avatar",
        "profile pic",
        "profile photo",
        "change profile",
      ],
      answer:
        "👤 Profile Solution\n\nClick your profile picture in the top-right corner to open your profile.\n\nFrom there you can view your profile and use the available profile options.",
    },

    {
      id: "post",
      icon: "📝",
      title: "Can't create a post",
      keywords: [
        "post",
        "posts",
        "pst",
        "publish",
        "upload",
        "create",
        "create post",
        "cant post",
        "cannot post",
        "posting",
      ],
      answer:
        "📝 Post Solution\n\nGo to Home → Create a Post → write your content → press Publish Post.\n\nMake sure the post isn't empty.",
    },

    {
      id: "follow",
      icon: "👥",
      title: "Follow problem",
      keywords: [
        "follow",
        "fllow",
        "follower",
        "followers",
        "following",
        "unfollow",
        "friend",
        "follow button",
      ],
      answer:
        "👥 Follow Solution\n\nOpen the person's profile and press Follow.\n\nIf you are already following them, the button will show Following.",
    },

    {
      id: "search",
      icon: "🔎",
      title: "Search problem",
      keywords: [
        "search",
        "serach",
        "seach",
        "searh",
        "find",
        "finding",
        "searching",
        "people",
        "users",
        "username",
      ],
      answer:
        "🔎 Search Solution\n\nUse the search box in the navigation bar and type the person's name or username.\n\nTry their exact username if you can't find them.",
    },

    {
      id: "theme",
      icon: "🌙",
      title: "Dark / Light mode",
      keywords: [
        "dark",
        "light",
        "theme",
        "mode",
        "night",
        "day mode",
      ],
      answer:
        "🌙 Theme Solution\n\nUse the 🌙/☀️ button in the navigation bar to switch between Light Mode and Dark Mode.",
    },

    {
      id: "notification",
      icon: "🔔",
      title: "Notification problem",
      keywords: [
        "notification",
        "notifications",
        "notif",
        "notificaton",
        "notifiction",
        "bell",
        "alert",
        "alerts",
      ],
      answer:
        "🔔 Notification Solution\n\nClick the notification bell in the navigation bar.\n\nIf notifications aren't updating, refresh the page and try again.",
    },

    {
      id: "profile-photo",
      icon: "📸",
      title: "Profile photo problem",
      keywords: [
        "profile image",
        "profile picture",
        "profile photo",
        "profile pic",
        "change photo",
        "change picture",
        "change pic",
      ],
      answer:
        "📸 Profile Photo Solution\n\nYour profile picture is shown in the top-right profile button.\n\nOpen your profile to view your current profile information.",
    },
  ];

  /* <==HELPBOX TEXT NORMALIZER==> */

  const normalizeHelpText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  /* <==LEVENSHTEIN DISTANCE==> */
  /* Helps understand small typing mistakes */


  const levenshteinDistance = (a, b) => {
    const matrix = Array.from(
      { length: b.length + 1 },
      () => Array(a.length + 1).fill(0)
    );

    for (let i = 0; i <= b.length; i++) {
      matrix[i][0] = i;
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] =
            Math.min(
              matrix[i - 1][j - 1],
              matrix[i][j - 1],
              matrix[i - 1][j]
            ) + 1;
        }
      }
    }

    return matrix[b.length][a.length];
  };

  /* <==SIMILAR WORD CHECK==> */

  const wordsAreSimilar = (word1, word2) => {
    if (word1 === word2) return true;

    if (word1.length < 3 || word2.length < 3) {
      return false;
    }

    const distance = levenshteinDistance(word1, word2);

    const maxLength = Math.max(word1.length, word2.length);

    if (maxLength <= 4) {
      return distance <= 1;
    }

    if (maxLength <= 7) {
      return distance <= 2;
    }

    return distance <= 3;
  };

  /* <==HELP MATCHING==> */

  const calculateHelpMatch = (text, keywords) => {
    const words = text.split(" ");

    let score = 0;

    keywords.forEach((keyword) => {
      const cleanKeyword = normalizeHelpText(keyword);

      if (!cleanKeyword) return;

      /* <==Exact phrase==> */
      if (text.includes(cleanKeyword)) {
        score += 10;
        return;
      }

      /* <==Individual words==> */
      const keywordWords = cleanKeyword.split(" ");

      keywordWords.forEach((keywordWord) => {
        words.forEach((word) => {
          if (wordsAreSimilar(word, keywordWord)) {
            score += 3;
          }
        });
      });
    });

    return score;
  };

  /* <==GET HELP RESPONSE==> */

  const getHelpResponse = (message) => {
    const text = normalizeHelpText(message);

    if (!text) {
      return "🤖 Please type your problem or select a problem from the list.";
    }

    /* Greetings */

    if (
      text === "hi" ||
      text === "hii" ||
      text === "hello" ||
      text === "hey" ||
      text.includes("hello there")
    ) {
      return "👋 Hi! I'm SocialHub Assistant.\n\nTell me what's wrong or choose a problem from the Quick Problems list.";
    }

    /* Thanks */

    if (
      text.includes("thank") ||
      text.includes("thanks") ||
      text.includes("thx")
    ) {
      return "😊 You're welcome! I'm always here to help.\n\nIf you have another problem, choose one from Quick Problems.";
    }

    /* Find best problem */

    let bestProblem = null;
    let highestScore = 0;

    helpProblems.forEach((problem) => {
      const score = calculateHelpMatch(text, problem.keywords);

      if (score > highestScore) {
        highestScore = score;
        bestProblem = problem;
      }
    });

    /* Strong match */

    if (bestProblem && highestScore >= 3) {
      return bestProblem.answer;
    }

    /* General problem */

    if (
      text.includes("not working") ||
      text.includes("doesnt work") ||
      text.includes("does not work") ||
      text.includes("not opening") ||
      text.includes("broken") ||
      text.includes("not responding")
    ) {
      return (
        "🛠️ I can help!\n\n" +
        "Which feature isn't working?\n\n" +
        "💬 Messages\n" +
        "👤 Profile\n" +
        "📝 Posts\n" +
        "👥 Follow\n" +
        "🔎 Search\n" +
        "🔔 Notifications"
      );
    }

    /* Can't / cannot */

    if (
      text.includes("cant") ||
      text.includes("cannot") ||
      text.includes("unable") ||
      text.includes("wont")
    ) {
      return (
        "🤔 I understand that something isn't working.\n\n" +
        "Try describing the feature, for example:\n\n" +
        "• I can't send messages\n" +
        "• My profile isn't opening\n" +
        "• I can't create a post\n" +
        "• Search isn't working"
      );
    }

    /* Unknown */

    return (
      "🤖 I couldn't identify the exact problem yet.\n\n" +
      "Try describing it like:\n" +
      "• Login is not working\n" +
      "• I can't send messages\n" +
      "• My profile has a problem\n" +
      "• I can't create a post\n\n" +
      "Or choose a Quick Problem above."
    );
  };

  /* <==SEND HELP MESSAGE==> */

  const sendHelpMessage = (messageOverride = null) => {
    const text =
      messageOverride !== null
        ? messageOverride.trim()
        : helpMessage.trim();

    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getHelpResponse(text),
    };

    setHelpChat((oldChat) => [
      ...oldChat,
      userMessage,
      botMessage,
    ]);

    setHelpMessage("");
  };

  /* <==NORMAL APP FUNCTIONS==> */

  const allUsers = [myProfile, ...users];

  const openProfile = (user) => {
    setSelectedUser(user);
    setPage("profile");
    setShowNotifications(false);
  };

  const goHome = () => {
    setPage("home");
    setSelectedUser(null);
  };

  const toggleFollow = (id) => {
    setFollowing((prev) =>
      prev.includes(id)
        ? prev.filter((userId) => userId !== id)
        : [...prev, id]
    );
  };

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id)
        ? prev.filter((postId) => postId !== id)
        : [...prev, id]
    );
  };

  const openMessages = (user = null) => {
    setMessageUser(user);
    setPage("messages");
  };

  const sendMessage = () => {
    if (!messageText.trim() || !messageUser) return;

    setMessages((prev) => ({
      ...prev,
      [messageUser.id]: [
        ...(prev[messageUser.id] || []),
        {
          mine: true,
          text: messageText,
        },
      ],
    }));

    setMessageText("");
  };

  const createPost = () => {
    if (!newPostText.trim()) return;

    setMyPosts((prev) => [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      ...prev,
    ]);

    setNewPostText("");
    setShowCreate(false);
  };

  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo" onClick={goHome}>
          <div className="logo-icon">✦</div>

          <span>
            Social<span>Hub</span>
          </span>
        </div>

        <div className="search-container">
          🔍

          <input
            type="text"
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="nav-actions">

          <button
            className={page === "home" ? "nav-active" : ""}
            onClick={goHome}
          >
            🏠 <span>Home</span>
          </button>

          <button
            className={page === "explore" ? "nav-active" : ""}
            onClick={() => setPage("explore")}
          >
            🔎 <span>Explore</span>
          </button>

          <button
            className={page === "messages" ? "nav-active" : ""}
            onClick={() => openMessages()}
          >
            💬 <span>Messages</span>
          </button>

          <button
            className="notification-button"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
          >
            🔔
            <span className="notification-dot">3</span>
          </button>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* MY PROFILE */}
          <button
            className="my-profile-button"
            onClick={() => openProfile(myProfile)}
            title="My Profile"
          >
            <img
              src={myProfile.photo}
              alt="My profile"
            />
          </button>

        </div>
      </header>

      {/* SEARCH RESULTS */}
      {search && (
        <div className="search-results">
          <div className="search-results-inner">

            <h3>People</h3>

            <div className="search-user-list">

              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <button
                    className="search-user"
                    key={user.id}
                    onClick={() => {
                      openProfile(user);
                      setSearch("");
                    }}
                  >
                    <img
                      src={user.photo}
                      alt={user.name}
                    />

                    <div>
                      <strong>{user.name}</strong>
                      <small>@{user.username}</small>
                    </div>
                  </button>
                ))
              ) : (
                <p>No users found.</p>
              )}

            </div>
          </div>
        </div>
      )}

      {/* NOTIFICATIONS */}
      {showNotifications && (
        <div className="notification-panel">

          <div className="notification-header">
            <strong>Notifications</strong>
            <span>Mark all read</span>
          </div>

          <div className="notification-item">
            ❤️ Ananya liked your post.
          </div>

          <div className="notification-item">
            👤 Rohan started following you.
          </div>

          <div className="notification-item">
            💬 You have a new message.
          </div>

        </div>
      )}

      <main className="main-container">

        {/* HOME */}
        {page === "home" && (
          <div className="home-layout">

            <section className="feed">

              <div className="welcome-card">

                <div className="welcome-small">
                  WELCOME BACK
                </div>

                <h1>
                  Share.
                  <br />
                  Connect.
                  <br />
                  <span>Explore.</span>
                </h1>

                <p>
                  Discover people, share moments and stay connected with your
                  community.
                </p>

                <div className="welcome-shapes">
                  <div>📸</div>
                  <div>❤️</div>
                  <div>✨</div>
                </div>

              </div>

              <div className="quick-actions">

                <button
                  onClick={() => setShowCreate(true)}
                >
                  <span>➕</span>

                  <div>
                    <strong>Create Post</strong>
                    <small>Share something</small>
                  </div>
                </button>

                <button
                  onClick={() => setPage("explore")}
                >
                  <span>🔎</span>

                  <div>
                    <strong>Find People</strong>
                    <small>Discover users</small>
                  </div>
                </button>

                <button
                  onClick={() => openMessages()}
                >
                  <span>💬</span>

                  <div>
                    <strong>Messages</strong>
                    <small>Chat with friends</small>
                  </div>
                </button>

              </div>

              <div className="section-heading">
                <div>
                  <h2>Latest Posts</h2>
                  <p>See what's happening</p>
                </div>
              </div>

              {feedPosts.map((post) => (
                <article
                  className="post-card"
                  key={post.id}
                >

                  <div className="post-header">

                    <button
                      className="post-user"
                      onClick={() => openProfile(post.user)}
                    >

                      <div className="avatar-wrapper">

                        <img
                          className="avatar"
                          src={post.user.photo}
                          alt={post.user.name}
                        />

                        {post.user.online && (
                          <span className="online-dot"></span>
                        )}

                      </div>

                      <div>
                        <strong>{post.user.name}</strong>
                        <small>
                          @{post.user.username} · 2h
                        </small>
                      </div>

                    </button>

                    <button className="more-button">
                      •••
                    </button>

                  </div>

                  <p className="post-text">
                    {post.text}
                  </p>

                  <img
                    className="post-image"
                    src={post.image}
                    alt="Post"
                  />

                  <div className="post-stats">

                    <span>
                      ❤️{" "}
                      {post.likes +
                        (likedPosts.includes(post.id)
                          ? 1
                          : 0)}
                    </span>

                    <span>
                      {post.comments} comments
                    </span>

                  </div>

                  <div className="post-actions">

                    <button
                      className={
                        likedPosts.includes(post.id)
                          ? "liked"
                          : ""
                      }
                      onClick={() => toggleLike(post.id)}
                    >
                      ❤️ Like
                    </button>

                    <button>
                      💬 Comment
                    </button>

                    <button>
                      ↗ Share
                    </button>

                  </div>

                </article>
              ))}

            </section>

            {/* SIDEBAR */}
            <aside className="sidebar">

              <div className="sidebar-card">

                <div className="sidebar-title">

                  <h3>Suggested For You</h3>

                  <button
                    onClick={() => setPage("explore")}
                  >
                    See all
                  </button>

                </div>

                {users.slice(0, 3).map((user) => (
                  <div
                    className="suggestion"
                    key={user.id}
                  >

                    <button
                      className="suggestion-user"
                      onClick={() => openProfile(user)}
                    >

                      <img
                        src={user.photo}
                        alt={user.name}
                      />

                      <div>
                        <strong>{user.name}</strong>
                        <small>@{user.username}</small>
                      </div>

                    </button>

                    <button
                      className={
                        following.includes(user.id)
                          ? "following-small"
                          : "follow-small"
                      }
                      onClick={() => toggleFollow(user.id)}
                    >
                      {following.includes(user.id)
                        ? "Following"
                        : "Follow"}
                    </button>

                  </div>
                ))}

              </div>

              <div className="color-card">

                <span>✨</span>

                <h3>
                  Make new connections
                </h3>

                <p>
                  Find interesting people and build your own community.
                </p>

                <button
                  onClick={() => setPage("explore")}
                >
                  Explore People
                </button>

              </div>

            </aside>

          </div>
        )}

        {/* EXPLORE */}
        {page === "explore" && (
          <section className="explore-page">

            <div className="page-heading">

              <div>

                <div className="eyebrow">
                  DISCOVER
                </div>

                <h1>
                  Find your people 👋
                </h1>

                <p>
                  Connect with interesting people from the community.
                </p>

              </div>

              <div className="explore-count">
                <strong>{users.length}</strong>
                <span>People</span>
              </div>

            </div>

            <div className="profile-grid">

              {users.map((user) => (
                <div
                  className="profile-card"
                  key={user.id}
                >

                  <div className="profile-cover">
                    <div className="cover-decoration"></div>
                  </div>

                  <div className="profile-card-body">

                    <button
                      className="profile-photo-button"
                      onClick={() => openProfile(user)}
                    >

                      <img
                        src={user.photo}
                        alt={user.name}
                      />

                      {user.online && (
                        <span className="profile-online"></span>
                      )}

                    </button>

                    <h3>{user.name}</h3>

                    <p className="username">
                      @{user.username}
                    </p>

                    <p className="profile-bio">
                      {user.bio}
                    </p>

                    <div className="profile-numbers">

                      <div>
                        <strong>
                          {formatNumber(user.followers)}
                        </strong>
                        <span>Followers</span>
                      </div>

                      <div>
                        <strong>
                          {formatNumber(user.following)}
                        </strong>
                        <span>Following</span>
                      </div>

                    </div>

                    <div className="profile-card-buttons">

                      <button
                        className="view-profile"
                        onClick={() => openProfile(user)}
                      >
                        View Profile
                      </button>

                      <button
                        className="message-icon-button"
                        onClick={() => openMessages(user)}
                      >
                        💬
                      </button>

                    </div>

                    <button
                      className={
                        following.includes(user.id)
                          ? "following-button"
                          : "follow-button"
                      }
                      onClick={() => toggleFollow(user.id)}
                    >
                      {following.includes(user.id)
                        ? "✓ Following"
                        : "+ Follow"}
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </section>
        )}

        {/* PROFILE */}
        {page === "profile" && selectedUser && (
          <section>

            <button
              className="back-button"
              onClick={goHome}
            >
              ← Back
            </button>

            <div className="profile-hero">

              <div className="profile-hero-cover">
                <div className="hero-orb orb-one"></div>
                <div className="hero-orb orb-two"></div>
                <div className="hero-orb orb-three"></div>
              </div>

              <div className="profile-hero-content">

                <div className="large-profile-photo-wrapper">

                  <img
                    className="large-profile-photo"
                    src={selectedUser.photo}
                    alt={selectedUser.name}
                  />

                  {selectedUser.online && (
                    <span className="large-online"></span>
                  )}

                </div>

                <div>

                  <div className="profile-name-row">

                    <div>
                      <h1>{selectedUser.name}</h1>
                      <p>@{selectedUser.username}</p>
                    </div>

                    <span className="verified-badge">
                      VERIFIED
                    </span>

                  </div>

                  <p className="large-bio">
                    {selectedUser.bio}
                  </p>

                  <div className="large-profile-stats">

                    <div>
                      <strong>
                        {selectedUser.id === 0
                          ? myPosts.length
                          : selectedUser.posts.length}
                      </strong>
                      <span>Posts</span>
                    </div>

                    <div>
                      <strong>
                        {formatNumber(selectedUser.followers)}
                      </strong>
                      <span>Followers</span>
                    </div>

                    <div>
                      <strong>
                        {formatNumber(selectedUser.following)}
                      </strong>
                      <span>Following</span>
                    </div>

                  </div>

                </div>

                <div className="profile-buttons">

                  {selectedUser.id === 0 ? (
                    <button
                      className="profile-message-button"
                      onClick={() =>
                        alert(
                          "Edit Profile feature coming soon!"
                        )
                      }
                    >
                      ✏️ Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        className="profile-message-button"
                        onClick={() =>
                          openMessages(selectedUser)
                        }
                      >
                        💬 Message
                      </button>

                      <button
                        className={
                          following.includes(
                            selectedUser.id
                          )
                            ? "profile-following-button"
                            : "profile-follow-button"
                        }
                        onClick={() =>
                          toggleFollow(selectedUser.id)
                        }
                      >
                        {following.includes(
                          selectedUser.id
                        )
                          ? "✓ Following"
                          : "+ Follow"}
                      </button>
                    </>
                  )}

                </div>

              </div>

            </div>

            <div className="profile-content">

              <div className="profile-content-heading">
                <h2>Posts</h2>

                <span>
                  {selectedUser.id === 0
                    ? myPosts.length
                    : selectedUser.posts.length}{" "}
                  posts
                </span>
              </div>

              <div className="profile-post-grid">

                {(selectedUser.id === 0
                  ? myPosts
                  : selectedUser.posts
                ).map((image, index) => (
                  <div
                    className="profile-post"
                    key={index}
                  >

                    <img
                      src={image}
                      alt="Profile post"
                    />

                    <div className="profile-post-overlay">
                      ❤️ {index + 10}
                      <span>
                        💬 {index + 2}
                      </span>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </section>
        )}

        {/* MESSAGES */}
        {page === "messages" && (
          <section className="messages-page">

            <div className="messages-container">

              <div className="conversation-list">

                <div className="messages-title">

                  <div>
                    <div className="eyebrow">
                      CHAT
                    </div>

                    <h2>Messages</h2>
                  </div>

                  <button
                    onClick={() =>
                      setPage("explore")
                    }
                  >
                    +
                  </button>

                </div>

                <div className="message-search">
                  🔍
                  <input
                    placeholder="Search conversations..."
                  />
                </div>

                {users.map((user) => (
                  <button
                    className={`conversation ${messageUser?.id === user.id
                        ? "active-conversation"
                        : ""
                      }`}
                    key={user.id}
                    onClick={() =>
                      setMessageUser(user)
                    }
                  >

                    <div className="conversation-avatar">

                      <img
                        src={user.photo}
                        alt={user.name}
                      />

                      {user.online && (
                        <span className="online-dot"></span>
                      )}

                    </div>

                    <div className="conversation-info">

                      <strong>{user.name}</strong>

                      <small>
                        {messages[user.id]?.length
                          ? messages[user.id][
                            messages[user.id].length - 1
                          ].text
                          : "Start a conversation"}
                      </small>

                    </div>

                  </button>
                ))}

              </div>

              <div className="chat-area">

                {!messageUser ? (
                  <div className="empty-chat">

                    <div className="empty-chat-icon">
                      💬
                    </div>

                    <h2>Your messages</h2>

                    <p>
                      Select someone to start chatting.
                    </p>

                  </div>
                ) : (
                  <>

                    <div className="chat-header">

                      <div className="chat-user">

                        <img
                          className="avatar"
                          src={messageUser.photo}
                          alt={messageUser.name}
                        />

                        <div>
                          <strong>
                            {messageUser.name}
                          </strong>

                          <small>
                            {messageUser.online
                              ? "Online"
                              : "Offline"}
                          </small>
                        </div>

                      </div>

                      <button
                        onClick={() =>
                          openProfile(messageUser)
                        }
                      >
                        View Profile
                      </button>

                    </div>

                    <div className="chat-messages">

                      <div className="chat-start">

                        <img
                          src={messageUser.photo}
                          alt={messageUser.name}
                        />

                        <h3>
                          {messageUser.name}
                        </h3>

                        <p>
                          @{messageUser.username}
                        </p>

                      </div>

                      <div className="message-bubble their-message">
                        Hey! 👋 Nice to connect with you.
                      </div>

                      {(messages[messageUser.id] || []).map(
                        (message, index) => (
                          <div
                            className={`message-bubble ${message.mine
                                ? "my-message"
                                : "their-message"
                              }`}
                            key={index}
                          >
                            {message.text}
                          </div>
                        )
                      )}

                    </div>

                    <div className="chat-input-area">

                      <button>📎</button>

                      <input
                        value={messageText}
                        onChange={(e) =>
                          setMessageText(e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            sendMessage();
                          }
                        }}
                        placeholder={`Message ${messageUser.name}...`}
                      />

                      <button
                        className="send-button"
                        onClick={sendMessage}
                      >
                        ➤
                      </button>

                    </div>

                  </>
                )}

              </div>

            </div>

          </section>
        )}

      </main>

      {/* CREATE POST MODAL */}
      {showCreate && (
        <div
          className="modal-backdrop"
          onClick={() => setShowCreate(false)}
        >

          <div
            className="create-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <div>
                <div className="eyebrow">
                  CREATE
                </div>

                <h2>Create a Post</h2>
              </div>

              <button
                onClick={() =>
                  setShowCreate(false)
                }
              >
                ✕
              </button>

            </div>

            <textarea
              placeholder="What's on your mind?"
              value={newPostText}
              onChange={(e) =>
                setNewPostText(e.target.value)
              }
            />

            <div className="modal-tools">
              <span>📸 Photo</span>
              <span>🎥 Video</span>
              <span>😊 Feeling</span>
              <span>📍 Location</span>
            </div>

            <button
              className="create-post-button"
              onClick={createPost}
            >
              Publish Post
            </button>

          </div>

        </div>
      )}

      {/* <==HELPBOX==> */}

      {showHelp && (
        <div className="help-window">

          {/* HEADER */}
          <div className="help-header">

            <div className="help-header-left">

              <div className="help-avatar">
                🤖
              </div>

              <div>
                <strong>
                  SocialHub Assistant
                </strong>

                <small>
                  ● Online • Ready to help
                </small>
              </div>

            </div>

            <button
              type="button"
              onClick={() =>
                setShowHelp(false)
              }
            >
              ✕
            </button>

          </div>

          {/* BODY */}
          <div className="help-body">

            <div className="bot-message">
              Hi! 👋 I'm SocialHub Assistant.
              <br />
              Choose a problem below or type your question.
            </div>

            {/* QUICK PROBLEMS */}
            <div className="quick-help-title">
              ⚡ Quick Problems
            </div>

            <div className="quick-help-list">

              {helpProblems.map((problem) => (
                <button
                  type="button"
                  className="quick-help-button"
                  key={problem.id}
                  onClick={() =>
                    sendHelpMessage(problem.title)
                  }
                >

                  <span>
                    {problem.icon}
                  </span>

                  <span>
                    {problem.title}
                  </span>

                  <span>
                    →
                  </span>

                </button>
              ))}

            </div>

            {/* CHAT */}
            <div className="help-chat">

              {helpChat.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.sender === "user"
                      ? "user-help-message"
                      : "bot-help-message"
                  }
                >
                  {message.text}
                </div>
              ))}

            </div>

          </div>

          {/* INPUT */}
          <div className="help-input">

            <input
              type="text"
              value={helpMessage}
              placeholder="Describe your problem..."
              onChange={(e) =>
                setHelpMessage(e.target.value)
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  e.preventDefault();

                  sendHelpMessage();
                }

              }}
            />

            <button
              type="button"
              onClick={() =>
                sendHelpMessage()
              }
              disabled={!helpMessage.trim()}
            >
              ➤
            </button>

          </div>

        </div>
      )}

      {/* FLOATING HELP BUTTON */}
      <button
        type="button"
        className="floating-help"
        onClick={() =>
          setShowHelp(!showHelp)
        }
        title="SocialHub Assistant"
      >
        {showHelp ? "✕" : "🤖"}
      </button>

    </div>
  );
}

/* <==FORMAT NUMBER==> */

function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  }

  if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }

  return number;
}

export default App;