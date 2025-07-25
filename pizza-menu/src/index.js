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

const pizzas = pizzaData;


function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Header() {
    return <div>
        <header className="header">
            <h1>Bawale's First Pizza co.</h1>
        </header>
    </div>
}

function Menu() {
    return <div>
        <main className="menu">
            <h2>Our Menu's</h2>

            {pizzas &&
                <>
                    <p>Authentic Italian cusine. 6 creative dishes to choos from.
                        All from our stone oven, all orginic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObject={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            }
        </main>
    </div>
}

function Pizza({ pizzaObject }) {

    //if (pizzaObject.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""} `}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <span>{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
            </div>
        </li >)
}

function Footer() {
    const hour = new Date().getHours();
    const openingHour = 12;
    const closingHour = 22;
    const isOpen = (hour >= openingHour && hour < closingHour);

    return <div>
        <footer className="footer">
            {isOpen ? <Order closingHour={closingHour} openingHour={openingHour} /> : <p>We are closed!</p>}
        </footer>
    </div>
}

function Order({ openingHour, closingHour }) {
    return (<div className="order">
        <p>{new Date().toLocaleTimeString()}. We're  open from {openingHour}:00 to {closingHour}:00, you can order online until {closingHour}:00.</p>
        <button className="btn">Order</button>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);