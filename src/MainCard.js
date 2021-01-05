import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./MainCard.css";
import List from "./List";

function MainCard() {
  return (
    <div className="card maincard">
      <div className="card-body">
        <div className="left__content">FAQs about Login</div>
        <List />
      </div>
    </div>
  );
}

export default MainCard;
