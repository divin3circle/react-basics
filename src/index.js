import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg"
    alt="nuclear effect"
  />
);

ReactDOM.render(<BookList />, document.getElementById("root"));
