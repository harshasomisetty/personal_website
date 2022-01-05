import React from "react";
import ProjectCard from "../components/Project-Card.js";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        <ProjectCard
          link={"checkra.xyz"}
          title={"Checkra"}
          description={
            "Podcast aggregator that generates podcast notes, timestamps, and identifies keywords and entities."
          }
          location={"Web"}
          tech={
            "Full Stack Python for Dataprocessing and Website. Spacy for NLP, Flask/Plotly for Website, Deployed on Heroku."
          }
          image={"checkra"}
        />
        <ProjectCard
          link={"twitblog.xyz"}
          title={"TwitBlog"}
          description={
            "Twitter Thread Aggregator that identifies all of a Twitter User's Threads, and identifies relavent topics"
          }
          location={"Web"}
          tech={
            "MERN stack (Mongodb, Express, React, Node) with Tailwind, NginX, with a multi-container Docker architecture, with Python Data Processing. Deployed on DigitalOcean."
          }
          image={"twitblog"}
        />
      </div>
    </div>
  );
};

export default Projects;
