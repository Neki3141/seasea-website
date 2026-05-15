/*!
 * @license
 * Copyright (C) 2026 Ethan Bastian, Kien Nguyen
 * All Rights Reserved. Licensed under GNU AGPLv3.
 * Full license text available in the source repository.
 */

import "./intro.css";
import Background from "./background";

import { Name } from "./blocks";
import { Slogan } from "./blocks";

function Intro() {
  return (
    <>
      <div className="home-page">
        <div className="textbox-homepage">
          <Name />
          <Slogan />
        </div>

      </div>
    </>
  );
}

export default Intro;
