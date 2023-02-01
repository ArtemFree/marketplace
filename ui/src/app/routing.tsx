import { CreatePage } from "src/pages/create-page";
import { ExplorePage } from "src/pages/explore-page";
import { MainPage } from "src/pages/main-page";
import { UserProfilePage, UserProfileEditPage } from "src/pages/user-page";
import React from 'react'

interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/user/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/user/profile/edit",
    element: <UserProfileEditPage />,
  },
];

