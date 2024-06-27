import React from "react";
import "./Home.styles.css";
import {
  HomeTasks,
  HomeContacts,
  HomeProjects,
  HomeMainBlock,
} from "./components";

const Home = () => {
  return (
    <div className="home-page">
      <HomeMainBlock />
      <HomeProjects />
      <HomeTasks />
      <HomeContacts />
    </div>
  );
};

export default Home;
