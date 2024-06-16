import React, { useState } from "react";
import "./Home.styles.css";
import OutlinedButton from "@components/shared/OutlinedButton";
import WaterfallModal from "./components/WaterfallModal";
import ScrumModal from "./components/ScrumModal";

const Home = () => {
  const [showWaterfallModal, setShowWaterfallModal] = useState(false);
  const openWaterfallModal = () => setShowWaterfallModal(true);
  const closeWaterfallModal = () => setShowWaterfallModal(false);

  const [showScrumModal, setShowScrumModal] = useState(false);
  const openScrumModal = () => setShowScrumModal(true);
  const closeScrumModal = () => setShowScrumModal(false);

  return (
    <div>
      <OutlinedButton text="WATERFALL" onClick={openWaterfallModal} />
      <WaterfallModal
        showModal={showWaterfallModal}
        closeModal={closeWaterfallModal}
      />

      <OutlinedButton text="SCRUM" onClick={openScrumModal} />
      <ScrumModal showModal={showScrumModal} closeModal={closeScrumModal} />
    </div>
  );
};

export default Home;
