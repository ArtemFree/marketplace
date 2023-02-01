import React from "react";
import { Link, Route } from "react-router-dom";
import { CommonPage } from "src/common/components/page/common-page";

export const MainPage = () => {
  return (
    <CommonPage>
      <div>Main page</div>
      <Link to="/user/profile">User page</Link>
      <Link to="/user/profile/edit">User page edit</Link>
    </CommonPage>
  );
};
