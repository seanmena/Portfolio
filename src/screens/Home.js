import React from "react";
import "./Home.css";
import bar from "../assets/bar.png";
import bookclub from "../assets/bookclub.png";
import sleepyangler from "../assets/sleepyangler.png";
import newspage from "../assets/NewsPage.png";
import employeemanager from "../assets/employeemanager.png";
import resume from "../assets/SeansResume.pdf";

const Home = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div id="home" className="home">
      {/* HEADER */}
      <div className="header">
        <div className="big-ani">
          <h1 className="big-title">
            Hi I'm Sean, <br />I build and design <br />
            full stack applications.
          </h1>
        </div>
        <div className="sub-ani">
          <h2 className="sub-title">
            I create pixel perfect full stack applications from my own
            prototypes
          </h2>
        </div>
        <h1 className="work-title">Want to see my work?</h1>
        <div className="btn-container">
          <button className="btn">
            <a href="#projects">Projects</a>
          </button>
          <button className="btn">
            <a href={resume} download="SeansResume.pdf">
              Resume
            </a>
          </button>
        </div>

        {/* PROJECTS */}

        <div>
          <img className="bar" alt="bar" src={bar}></img>
        </div>

        <div id="projects" className="projects">
          <h1 className="project-title">Projects</h1>
          <div className="project-container">
            <div className="p-cont">
              <div className="p-cont-img">
                <img alt="bookclub" src={bookclub}></img>
              </div>
              <div className="inside-cont">
                <h2>Book Club</h2>
                <p>
                  A book-tracking application. Users create or log in to an
                  account. Each user has a “My Books”, and a “Search” tab. Users
                  may search for their favorite books, and save them to their
                  “My Books” page.
                </p>
                <h3>What I did</h3>
                <p>
                  Designed in Figma and used React and CSS to create the UI.
                  Used Axios to fetch the data from the Google Books API on the
                  “Search” page of the website. Firebase was used for the
                  database and auth system.
                </p>
                <h3>What I used</h3>
                <p>Figma, React, CSS, Javascript, Firebase, Google Books API</p>
                <h3>Challenges</h3>
                <p>
                  Pulling data using a third party API, and storing it in my own
                  database was definitely a challenge. I learned a lot about how
                  to move data fluidly through multiple points from this
                  project.
                </p>
                <div className="sub-container">
                  <a
                    href="https://github.com/seanmena/Books"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source Code
                  </a>

                  <a
                    href="https://book-club-9650b.firebaseapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Site
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=ehQW5LKX8iw&feature=youtu.be"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="p-cont">
              <div className="p-cont-img">
                <img alt="sleepyangler" src={sleepyangler}></img>
              </div>
              <div className="inside-cont">
                <h2>Sleepy Angler</h2>
                <p>
                  A fly fish website for a fishing guide. The Admin may add and
                  delete blog posts, add and delete images to their gallery, and
                  view/delete submitted contact forms.
                </p>
                <h3>What I did</h3>
                <p>
                  Designed multiple prototypes in Figma. The client chose their
                  favortie one. I built the UI with React and CSS. I used
                  Firebase for the Database, and authentication system.
                </p>
                <h3>What I used</h3>
                <p>Figma, React, CSS, Javascript, Firebase</p>
                <h3>Challenges</h3>
                <p>
                  The auth system was definitely the biggest challenge for me.
                  Using protected routes, and rendering elements based on
                  authorization status took a lot of research. I learned a lot
                  about auth, routing, and CRUD from this project.
                </p>

                <div className="sub-container">
                  <a
                    href="https://github.com/seanmena/sleepyangler"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source Code
                  </a>

                  <a
                    href="https://sleepyangler.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Site
                  </a>

                  <a
                    href="https://youtu.be/uIvjJZ4A66c"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-container">
            <div className="p-cont">
              <div className="p-cont-img">
                <img alt="newspage" src={newspage}></img>
              </div>
              <div className="inside-cont">
                <h2>News Homepage</h2>
                <p>
                  A Front-end Mentor Challenge. The landing page for a news
                  company. This project is only frontend.
                </p>
                <h3>What I did</h3>
                <p>Developed UI that matches the prototype provided to me.</p>
                <h3>What I used</h3>
                <p>React and CSS</p>
                <h3>Challenges</h3>
                <p>
                  Creating a complex design without using any CSS frameworks was
                  a challenge. I hadn't jumped fully into CSS grid before this
                  project. I learned a lot about CSS and how to build a
                  responsive website from this project.
                </p>
                <div className="sub-container">
                  <a
                    href="https://github.com/seanmena/LandingPage"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source Code
                  </a>

                  <a
                    href="https://seanmena.github.io/LandingPage/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
            <div className="p-cont">
              <div className="p-cont-img">
                <img alt="employee" src={employeemanager}></img>
              </div>
              <div className="inside-cont">
                <h2>Employee Manager</h2>
                <p>
                  A management software. Users may manage their team in a
                  database, they can create, read, update, and delete members.
                  This project is only backend.
                </p>
                <h3>What I did</h3>
                <p>
                  Developed a management tool based on a user story provided to
                  me.
                </p>
                <h3>What I used</h3>
                <p>Node.js, MySQL</p>
                <h3>Challenges</h3>
                <p>
                  MySQL workbench was a learning curve, I've worked mostly with
                  MongoDB, Firebase, and other NoSQL databases. I learned a alot
                  about table management in this project, as well as using
                  node.js syntax.
                </p>
                <div className="sub-container">
                  <a
                    href="https://github.com/seanmena/EmployeeManager"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source Code
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=CoCmhje6Lmw"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img className="bar" alt="bar" src={bar}></img>
        </div>

        {/* ABOUT */}
        {/* 
        <div id="about-me" className="about">
          <h1 className="about-title">About Me</h1>

          <div className="about-container">
            <div className="container">
              <h1>Work</h1>
              <p>
                I love problem solving, I spend a lot of time at any job I've
                had searching for solutions to issues. I've worked mainly
                retail/customer facing jobs and have become very good at
                creating relationships. I love meeting new people and taking on
                new challenges.
              </p>
              <h1>Fun</h1>
              <p>
                I love to create things! I make music, digital art, clothing,
                and coffee. I spend my free time playing video games, reading,
                camping/hiking, and hanging out with my cat. I love meeting new
                people, and experiences new things.
              </p>
            </div>
          </div>
        </div> */}
        <div id="contact" className="contact">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-container">
            <div className="container">
              <h1>Email Me:</h1>
              <Mailto email="seanmenadev@gmail.com">
                <h1>Seanmenadev@gmail.com</h1>
              </Mailto>
              <h1>
                Connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/sean-mena-2910651aa/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
              </h1>
              <h1>
                Follow me on{" "}
                <a
                  href="https://github.com/seanmena"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </h1>
              <h1>
                Static resume link:{" "}
                <a
                  href="https://docs.google.com/document/d/1iop4H8UbKZliw1mscqDUpO5HWgYyb9XHLz5IcSwi-4o/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Here
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
