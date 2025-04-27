import React from "react";
import xd from "./images/xd.jpg";
import hosting from "./images/hosting.jpeg";
import visual from "./images/visual.png";

const data = [
  {
    service: "Design Services (e.g., XD, Figma)",
    price: "200 USD - 800 USD",
    paragraph:
      "Design services are commonly referred to as (UI/UX Design) or (Graphic Design) services. These are typically used to create visually appealing and user-friendly interfaces for websites, mobile apps, and other digital platforms. Tools like Adobe XD and Figma are widely used by designers to create wireframes, prototypes, and high-fidelity designs. These designs are then handed over to developers for coding and implementation. For instance, if you hire a designer for your website, they will use tools like XD or Figma to create the layout, colors, fonts, and overall aesthetic of your website before the development process starts.",
  },

  {
    service: "Hosting and Domain Registration Services",
    price: "50 USD - 150 USD per year",
    paragraph:
      "Hosting and domain registration services are crucial for making your website accessible online. A domain name is your website's address (e.g., www.yoursite.com), and hosting is where your website’s files are stored and made accessible to users. This service is generally referred to as (Web Hosting) or (Domain Registration). When you register a domain, you secure the name for your website, and when you host it, you ensure it can be accessed by anyone online. For example, a website owner might register a domain like www.example.com and use hosting services to store their website's data and make it available to users worldwide.",
  },

  {
    service: "Website Development Services (Web Developer)",
    price: "600 USD - 3000 USD",
    paragraph:
      "Website development services are typically referred to as (Web Development) or (Website Building) services. These services involve the actual creation of the website, from coding and scripting to implementing features like e-commerce, user accounts, and content management systems (CMS). A web developer takes the design and translates it into a fully functioning website using technologies like HTML, CSS, JavaScript, and various backend technologies. For example, if you need a business website, a developer would build the structure, integrate forms, and set up a content management system so you can easily update the site without technical knowledge.",
  },
];

const Site = () => {
  const images = [xd, hosting, visual];

  return (
    <div className="px-4 py-6">
      <h1 className="text-center text-2xl font-semibold mb-6">
        The process of promoting your work online.
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-evenly lg:justify-start gap-4">
        {images.map((value, index) => {
          return (
            <div
              key={index}
              className="border p-4 w-full sm:w-80 lg:w-96 bg-white shadow-md rounded-md flex flex-col items-center justify-between"
            >
              <h2 className="text-xl font-bold mt-2 text-center">
                {data[index].service}
              </h2>
              <p className="text-gray-600 text-center">{data[index].price}</p>
              <img
                className="w-full h-44 object-cover rounded-md mt-4"
                src={value}
                alt={`Image ${index}`}
              />
              <p className="text-gray-600 text-center mt-4 px-2">{data[index].paragraph}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-xl font-semibold">
          If you require any of the services mentioned above, feel free to contact me at "Connecthereon@gmail.com" As an intermediary, I will handle the work and ensure it is professionally managed and delivered by skilled professionals.
        </h2>
      </div>
    </div>
  );
};

export default Site;
