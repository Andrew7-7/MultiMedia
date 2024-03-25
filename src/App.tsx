import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        Welcome to our Short Movie
        <p className="madeBy">Made by Kelompok 5</p>
      </div>

      <p className="title">PINJOL</p>

      <div className="moviePlace">
        <video width="600" controls>
          {/* <source
            src={`${process.env.PUBLIC_URL}/sample.mp4`}
            type="video/mp4"
          /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="aboutUs">
        <p>Andrew</p>
        <p>Eugene Emmanuelle Hervine</p>
        <p>Arya Yudhistira Ramadhan</p>
        <p>Pierre Sitorus</p>
        <p>Alvrian Timothius</p>
        <p>Christopher Jovison</p>
      </div>
    </>
  );
}

export default App;
