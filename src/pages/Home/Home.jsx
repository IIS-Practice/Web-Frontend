import React from "react";
import "./Home.styles.css";
import HomeMainBlock from "./components/MainBlock/HomeMainBlock";
import HomeProjects from "./components/MainBlock/Projects/HomeProjects";

const Home = () => {
  return (
    <div>
       <HomeMainBlock/>
       <HomeProjects/>
    </div>
  )
};

export default Home;
