import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <h3>Our chef is....</h3>
      <br />
      <AvatarImage />
      <div className="data">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function AvatarImage() {
  return <img src="pizzas/pp.jpg" alt="pizzas/pp.jpg" />;
}

function Intro() {
  return (
    <div>
      <h1>Fatma Erciyas</h1>
      <p>
        Hi. I'm Fatma. I usually prefer .Net Core in my kitchen. :) And I
        decorate my plates using by React.js
      </p>
      <br />
    </div>
  );
}

function Skills() {
  return (
    <div>
      <p>My Skills:</p> <br />
      <Skill skill="React" color="yellow" />
      <Skill skill=".Net Core" color="orange" />
      <Skill skill="Sql" color="yellow" />
      <Skill skill="HTML-CSS" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = [pizzaData];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        image="pizzas/spinaci.jpg"
        price={14}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms "
        image="pizzas/funghi.jpg"
        price={18}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        image="pizzas/spinaci.jpg"
        price={14}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms "
        image="pizzas/funghi.jpg"
        price={18}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 5;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.{" "}
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
// To Use --> style = { style };

// <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
//   Fast React Pizza Co.
// </h1>

//Currently Time;
/* {new Date().toLocaleDateString()}. We're currently open! */
