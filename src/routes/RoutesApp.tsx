import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Home from "../components/pages/home/Home";
import RepertoirePages from "../components/pages/repertoire/RepertoirePages";
import TheatrePages from "../components/pages/theaterPages/TheatrePages";
import GalleryPages from "../components/pages/gallery/GalleryPages";
import NotFound from "../components/pages/notFound/NotFound";
import PosterPages from "../components/pages/posterPages/PosterPages";
import PosterDetails from "../components/pages/posterDetails/PosterDetails";
import PlayPages from "../components/pages/playPages/PlayPages";
import PlayDetails from "../components/pages/playDetails/PlayDetails";
import Subscription from "../components/pages/subscription/Subscription";
import TeamPages from "../components/pages/teamPages/TeamPages";
import TeamDetails from "../components/pages/teamDetails/TeamDetails";
import CreateList from "../components/pages/createList/CreateList";

const RoutesApp = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <Home />,
    },
    {
      id: 2,
      path: "/repertoire",
      element: <RepertoirePages />,
    },
    {
      id: 3,
      path: "/poster",
      element: <PosterPages />,
    },
    {
      id: 4,
      path: "/play",
      element: <PlayPages />,
    },
    {
      id: 5,
      path: "/theater",
      element: <TheatrePages />,
    },
    {
      id: 6,
      path: "/team",
      element: <TeamPages />,
    },
    {
      id: 7,
      path: "/gallery",
      element: <GalleryPages />,
    },
    {
      id: 8,
      path: "/subscription",
      element: <Subscription />,
    },
    {
      id: 9,
      path: "/posterDetails/:id", 
      element: <PosterDetails />,
    },
    {
      id: 10,
      path: "/playDetails",
      element: <PlayDetails />,
    },
    {
      id: 11,
      path: "/teamDetails",
      element: <TeamDetails />,
    },
    {
      id: 12,
      path: "/createList",
      element: <CreateList />,
    },
    {
      id: 13,
      path: "*",
      element: <NotFound />,
    },
  ];

  return (
    <div>
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default RoutesApp;
