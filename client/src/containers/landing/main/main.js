import React from "react";

import Contact from "./contact";
import News from "./news";
const main = props => {
  return (
    <section id="main">
      <Contact />
      <section className="news">
        <News news={props.news} />
      </section>
    </section>
  );
};

export default main;
