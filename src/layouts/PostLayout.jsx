import React, { useMemo, useState } from "react";
import Post from "../Pages/Post";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";

export default function PostLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Post currentUser={currentUser} />
    </div>
  );
}
