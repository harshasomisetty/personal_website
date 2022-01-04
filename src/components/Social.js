import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
  FaAddressCard,
} from "react-icons/fa";

const SocialIcon = ({icon, link_text}) => {
  return (
    <div>
      <a href={link_text}>{icon}</a>
    </div>
  );
};

const size = 40;

const Social = () => {
  return (
    <div className="flex flex-row space-x-3">
      <SocialIcon
        icon={<FaGithub size={size} />}
        link_text={"https://www.github.com/harshasomisetty"}
      />
      <SocialIcon
        icon={<FaLinkedinIn size={size} />}
        link_text={"https://www.linkedin.com/in/harshasomisetty"}
        size={size}
      />
      <SocialIcon
        icon={<FaTwitter size={size} />}
        link_text={"https://www.twitter.com/HarshaSomisetty"}
      />
      <SocialIcon
        icon={<FaAddressCard size={size} />}
        link_text={
          "https://docs.google.com/document/d/1GccuGcXmZ6tDAI0Y_svTLM5yTiuQJBqra5AY8o4xE2g/edit"
        }
      />
      <SocialIcon
        icon={<FaRegEnvelope size={size} />}
        link_text={"mailto: hs884@scarletmail.rutgers.edu"}
      />
    </div>
  );
};

export default Social;
