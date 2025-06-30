"use client";

import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

const withAuth = (WrappedComponent) => (props) => {
  const {loggedIn}=useAuth();
  

  if (!loggedIn) {
    redirect("/login");
  }

  return <WrappedComponent {...props} />;
};

export default withAuth;
