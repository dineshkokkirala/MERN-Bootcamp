import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";

function Home() {
  //console.log("API IS", API);

  return (
    <Base title="Home Page" description="Welcome to the T-Shirt store">
      <div className="row text-center">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <button className="btn btn-success">Test</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Test</button>
        </div>
      </div>
    </Base>
  );
}

export default Home;
