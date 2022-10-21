import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav, Banner, Box, Goals, Contact } from "./components";
import { p1, p2, p3, p4, p5, p6 } from "./assets";

function App() {
  const [projects, setProjects] = useState([
    {
      image: p1,
      name: "Static Website",
      details:
        "For the year 2022, I started practicing coding and started my first personal project with Uplift Code Camp, which is making a static portfolio website. This website contains my projects, my goals and my contact information. I just made it simple and used stars as my background because I love the galaxy.",
      technicalSheet: ["HTML", "CSS"],
    },
    {
      image: p2,
      name: "Whack-Pickle-Rick",
      details:
        "The Whack-Pickle-Rick project is a game that has the same concept as the Whac-A-Mole, an old arcade game machine that you'll see on some amusement arcade centers. I used Pickle Rick as the mole because I love the Rick and Morty series and I think it will be funny if I based my second project on that cartoon show.",
      technicalSheet: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: p3,
      name: "To-Do App",
      details:
        "This project is a To-Do-List app and the first time I've tried applying responsive design media queries. This app is useful and best for people who are forgetful as you won't be able to add a task that's already there, deleting is also an easy way as the button is present whichever the page you're in. Also I made the font size big so I can say it's really readable.",
      technicalSheet: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      image: p4,
      name: "Resto App",
      details:
        "I created a Resto App with the same look of Krusty Krab, a fictional fast food restaurant in SpongeBob SquarePants cartoon but I changed the name to Krusty Krab Pizza. I became playful and used a funny menu. Some of the offered food is really being offered on that Krusty Krab restaurant. For this app, the user can place order, edit the number of items and delete it in the cart being displayed on the website. I also included the total amount of the items added to the cart just like normal resto apps.",
      technicalSheet: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      image: p5,
      name: "Resto App - Backend",
      details:
        "The goal of this project is for the lists on my Krusty Krab Pizza App be registered on my data as we started practicing back-end web applications. I was able to apply an API and add new food items and it will be added on the back-end list as well. Also by adding an item to the cart, the cart data will also be updated including the number of items.",
      technicalSheet: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "ExpressJS",
        "NodeJS",
      ],
    },
    {
      image: p6,
      name: "The Book Review App",
      details:
        "I created a Book Review App and named it The Book. It is made for people who loves books and so they can also communicate with other people who had read with the same book as they look for book reviews. It also helps with people who haven't decided what to read next so they check Recommended Books and see books with good reviews. I also added a section where they can pick a specific category and see available/existing books for now.",
      technicalSheet: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "ExpressJS",
        "NodeJS",
        "MongoDB (Mongoose)",
      ],
    },
  ]);

  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="boxContainer">
        {projects.map((project) => {
          return <Box info={project} />;
        })}
      </div>
      <Goals />
      <Contact />
      <div>
        <footer className="footerContainer">
          Icons from <a href="https://www.flaticon.com">flaticon.com</a>,
          <br /> Apple Logo made by Mac Villarino
        </footer>
      </div>
    </div>
  );
}

export default App;
