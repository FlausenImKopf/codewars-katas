const whosOnline = (friends) => {
  const result = {};
  let onCount = 0;
  let offCount = 0;
  let awCount = 0;
  for (let userData of friends) {
    if (
      userData.status === "online" &&
      userData.lastActivity <= 10 &&
      onCount === 0
    ) {
      result.online = new Array(userData.username);
      onCount++;
    } else if (
      userData.status === "online" &&
      userData.lastActivity <= 10 &&
      onCount > 0
    ) {
      result.online.push(userData.username);
    } else if (userData.status === "offline" && offCount === 0) {
      result.offline = new Array(userData.username);
      offCount++;
    } else if (userData.status === "offline" && offCount > 0) {
      result.offline.push(userData.username);
    } else if (userData.status === "online" && awCount === 0) {
      result.away = new Array(userData.username);
      awCount++;
    } else if (userData.status === "online" && awCount > 0) {
      result.away.push(userData.username);
    }
  }
  return result;
};

// test Input:
friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
  {
    username: "Ann",
    status: "online",
    lastActivity: 7,
  },
];

whosOnline(friends);
