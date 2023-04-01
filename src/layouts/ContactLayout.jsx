import React, { useMemo, useState } from "react";
import Contact from "../Pages/Contact";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";

export default function ContactLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Contact currentUser={currentUser} />
    </div>
  );
}
