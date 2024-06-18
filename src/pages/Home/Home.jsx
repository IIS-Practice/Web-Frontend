import React from "react";
import "./Home.styles.css";
import HomeMainBlock from "./components/MainBlock/HomeMainBlock";
import HomeProjects from "./components/Projects/HomeProjects";
import HomeTasks from "./components/Tasks/HomeTasks";
import HomeContacts from "./components/Contacts/HomeContacts";

const Home = () => {
  return (
    <div>
       <HomeMainBlock/>
       <HomeProjects/>
       <HomeTasks/>
       <HomeContacts/>
    </div>
  )
};

export default Home;
