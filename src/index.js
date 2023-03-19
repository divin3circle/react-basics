import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";

function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg"
    alt="nuclear effect"
  />
);

const Title = () => <h1>Nuclear Effect</h1>;
const Author = () => <h4>Albert Franscis</h4>;
ReactDOM.render(<BookList />, document.getElementById("root"));
