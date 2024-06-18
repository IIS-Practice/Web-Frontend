import React from "react";
import "./Home.styles.css";
import HomeMainBlock from "./components/MainBlock/HomeMainBlock";
import HomeProjects from "./components/Projects/HomeProjects";
import HomeTasks from "./components/Tasks/HomeTasks";

const Home = () => {
  return (
    <div>
       <HomeMainBlock/>
       <HomeProjects/>
       <HomeTasks/>
    </div>
  )
};

export default Home;
