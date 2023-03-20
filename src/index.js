import React from "react";
import ReactDOM from "react-dom";
import "./Index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
  author: "Sylus Abel",
  title: "Nuclear Effect",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
  author: "Sam Kerr",
  title: "Nuclear Effect 2",
};

const thirdBook = {
  img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
  author: "Francis Dulp",
  title: "Nuclear Effect-Final chapter",
};

const fourthBoook = {
  img: "https://m.media-amazon.com/images/I/61SKca8LJLL._AC_UL320_.jpg",
  author: "Vinncent Odhis",
  title: "Nuclear Effect-Sub",
};

function BookList() {
  return (
    <section className="book-list">
      <Book
        img={firstBook.img}
        author={firstBook.author}
        title={firstBook.title}
        price="3000"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio
        aut fugiat pariatur maiores esse nisi exercitationem animi asperiores
        blanditiis cumque nobis dignissimos, dolor deserunt est veritatis saepe,
        sint provident.
      </Book>
      <Book
        img={secondBook.img}
        author={secondBook.author}
        title={secondBook.title}
        price="3060"
      />
      <Book
        img={thirdBook.img}
        author={thirdBook.author}
        title={thirdBook.title}
        price="854"
      >
        This is the final chapter of Nuclear Effect series.Francis is an equiped
        nuclear scientist and uses his knowledge to summarize Sylus' and Kerr's
        works.
      </Book>
      <Book
        img={fourthBoook.img}
        author={fourthBoook.author}
        title={fourthBoook.title}
        price="FREE"
      />
    </section>
  );
}

const Book = ({ img, title, author, price, children }) => {
  /* const { img, title, author, price } = props; */
  /*   console.log(props); */
  return (
    <article className="book">
      <img src={img} alt="nuclear effect" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h4>KES {price}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
