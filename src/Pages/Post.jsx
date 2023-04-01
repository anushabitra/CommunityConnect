import React, { useEffect, useState } from "react";
import PostComponent from "../components/PostComponent";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Post({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <PostComponent currentUser={currentUser} />;
}
