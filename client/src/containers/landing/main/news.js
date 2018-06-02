import React from "react";

const News = ({ news }) => {
  let list = news.map(story => (
    <article className="story">
      <section>
        <a>
          <img src="https://picsum.photos/200" />
        </a>
      </section>
      <section>
        <header>
          <h3>Story Header</h3>
          <p>date: {Date.now()}</p>
        </header>
        <p>Story stuff</p>
        <a>Read more</a>
      </section>
    </article>
  ));
  return list;
};

export default News;
