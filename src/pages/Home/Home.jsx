import React from "react";
import "./Home.styles.css";
import HomeTasks from "./components/Tasks/HomeTasks";
import HomeContacts from "./components/Contacts/HomeContacts";
import HomeProjects from "./components/Projects/HomeProjects";
import HomeMainBlock from "./components/MainBlock/HomeMainBlock";

const Home = () => {
  return (
    <div>
      <HomeMainBlock/>
      <HomeProjects/>
      <HomeTasks/>
      <HomeContacts/>
    </div>
  );
};

export default Home;
