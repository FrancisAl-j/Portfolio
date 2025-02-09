import Profile from "./profile.png";
import HTML from "./html.png";
import CSS from "./css.png";
import JS from "./js.png";
import REACT from "./reactjs.png";
import NODEJS from "./nodejs.png";
import EXPRESS from "./express.png";

export const personal_data = {
  name: "Francis Al-j D. Bilas",
  age: 22,
  stacks: [
    "React Js",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "NodeJs",
    "ExpressJs",
  ],
  description:
    "I'm a beginner software developer with an experience in JavaScript, frameworks like ReactJs, NodeJs, ExpressJs, and MongoDB (MERN)",
  img: Profile,
  education: "4th Year College Student at EARIST",
};

export const stack_data = [
  {
    name: "HTML",
    description:
      "HTML, or HyperText Markup Language, is the standard language used to create and design web pages. It consists of a series of elements that structure content on the web, such as headings, paragraphs, images, links, forms, and more. HTML uses tags to define elements, which browsers then interpret to display content and enable interactive features on websites.",
    image: HTML,
  },
  {
    name: "CSS",
    description:
      "CSS, or Cascading Style Sheets, is a language used to style and layout HTML content on web pages. It controls the appearance of elements, such as colors, fonts, spacing, and positioning. CSS allows you to create visually appealing websites by applying styles to multiple pages consistently. It can be written inline, embedded within HTML, or linked externally as a separate file.",
    image: CSS,
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a programming language used to add interactivity and dynamic behavior to websites. It allows developers to create features like animations, form validations, interactive maps, and real-time updates. JavaScript runs in the browser, enabling users to interact with web pages without needing to reload them. It can also be used on the server side with environments like Node.js.",
    image: JS,
  },
  {
    name: "ReactJs",
    description:
      "ReactJS is a popular JavaScript library used for building user interfaces, especially single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render when data changes. React uses a virtual DOM to optimize performance, making applications faster and more responsive. It's commonly used with state management tools like Redux and integrates well with other libraries and frameworks.",
    image: REACT,
  },
  {
    name: "NodeJs",
    description:
      "Node.js is a JavaScript runtime environment that allows developers to run JavaScript code on the server side. Built on Chrome's V8 engine, Node.js is known for its non-blocking, event-driven architecture, making it ideal for building fast, scalable applications like APIs, real-time chat apps, and streaming services. It uses npm (Node Package Manager) to manage libraries and dependencies, making development efficient and flexible.",
    image: NODEJS,
  },
  {
    name: "ExpressJs",
    description:
      "Express.js is a minimal and flexible web application framework for Node.js. It simplifies the process of building web servers and APIs by providing a robust set of features for handling routes, requests, responses, and middleware. Express is lightweight, allowing developers to structure applications as needed, and it's widely used for creating RESTful APIs and web applications due to its speed and ease of use.",
    image: EXPRESS,
  },
];
