import React from "react";

const ProjectCard = ({link, title, description, tech, location, image}) => {
  return (
    <div className="flex flex-row border-2 border-dashed rounded border-black antialiased m-2">
      <a href={"http://" + link}>
        <div className="flex flex-col ">
          <h3>{title}</h3>
          <p className="">{description}</p>
          <p className="text-sm">{tech}</p>
          <div className="w-30 border-2 border-black">
            <p>View on {location}</p>
          </div>
        </div>
        <div>{/* <img alt={title + " demo"} src={image} /> */}</div>
      </a>
    </div>
  );
};

export default ProjectCard;
