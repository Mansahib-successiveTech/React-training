"use client";

import { redirect } from "next/navigation";

const withAuth = (WrappedComponent) => (props) => {
  let islogin = true;

  if (!islogin) {
    redirect("/login");
  }

  return <WrappedComponent {...props} />;
};

export default withAuth;
