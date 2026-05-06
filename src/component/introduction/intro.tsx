import "./intro.css";
import Background from "./background";

import { Name } from "./blocks";
import { Slogan } from "./blocks";

function Intro() {
  return (
    <>
      <div className="home-page">
        <div className="left">
            <div className="top-left">
            <Name />
            </div>
            <div className="bottom-left">
            <Slogan />
            </div>
        </div>
        <div className="right">
            <h1>right</h1>
        </div>
        </div>
    </>
  );
}

export default Intro;
