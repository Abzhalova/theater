import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Home from "../components/pages/home/Home";
import RepertoirePages from "../components/pages/repertoire/RepertoirePages";
import AfishaPages from "../components/pages/afisha/AfishaPages";
import SpectaklPages from "../components/pages/spectaklPages/SpectaklPages";
import TheatrePages from "../components/pages/theartePages/TheatrePages";
import ComandaPages from "../components/pages/comandaPages/ComandaPages";
import GalleryPages from "../components/pages/gallery/GalleryPages";
import Abonement from "../components/pages/abonement/Abonement";
import NotFound from "../components/pages/notFound/NotFound";

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
      element: <AfishaPages />,
    },
    {
      id: 4,
      path: "/play",
      element: <SpectaklPages />,
    },
    {
      id: 5,
      path: "/theater",
      element: <TheatrePages />,
    },
    {
      id: 6,
      path: "/team",
      element: <ComandaPages />,
    },
    {
      id: 7,
      path: "/gallery",
      element: <GalleryPages />,
    },
    {
      id: 8,
      path: "/subscription",
      element: <Abonement />,
    },
    {
      id: 9,
      path: "*",
      element: <NotFound />,
    }
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
