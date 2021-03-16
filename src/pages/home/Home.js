import React from "react";
import ActionSummary from "../../components/action-summary/ActionSummary";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <ActionSummary mode="create" code="AS12345" />
    </div>
  );
};

export default Home;
