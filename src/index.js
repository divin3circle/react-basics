import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
    author: "Sylus Abel",
    title: "Nuclear Effect",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
    author: "Sam Kerr",
    title: "Nuclear Effect 2",
    price: "500",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
    author: "Francis Dulp",
    title: "Nuclear Effect-Final chapter",
    price: "500",
  },

  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
    author: "Vinncent Odhis",
    title: "Nuclear Effect-Sub",
    price: "500",
  },
];

/* const names = ["sylus", "mih", "abel"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
}); */

function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        const { id } = book;
        return <Book key={id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author, price }) => {
  /*   const { img, title, author, price } = props; */
  /*   console.log(props); */
  const clickHandler = () => {
    alert("Buy this book?");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="nuclear effect" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h5 style={{ color: "#000", fontSize: "0.75rem" }}>KES {price}</h5>
      <button type="button" onClick={clickHandler}>
        Buy Now
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Buy another copy
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
