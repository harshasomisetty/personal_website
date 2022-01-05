import React from "react";

const ProjectCard = ({link, title, description, tech, location, image}) => {
  return (
    <div className="flex flex-col border-2 rounded border-black antialiased m-2 p-2 w-96 space-y-3">
      <h3 className="font-semibold">{title}</h3>
      <p className="">{description}</p>
      <p className="text-sm">{tech}</p>

      <div className="p-1 w-fit border rounded-lg border-black/50 shadow-sm hover:shadow-xl">
        <a href={"http://" + link}>
          <p>View on {location}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
