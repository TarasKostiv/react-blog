import React from "react";
import Posts from "./components/Posts";
import Header from "./components/Header"
import Carousel from "./components/Carousel";
import Accordion from "./components/Accordion";

function App() {
  return (
      <div className="app bg-dark" style={{height: '100%'}}>
          <div className="container ">
              <div className="row">
                  <Header />
              </div>
              <div className="row mt-3">
                  <div className="col">
                          <Posts />
                  </div>
                      {/*<div className="col col-3 ">*/}
                      {/*  <Accordion />*/}
                      {/*</div>*/}
              </div>
          </div>
      </div>
  );
}

export default App;
