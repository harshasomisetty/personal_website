import React from "react";
import {FaInstagram, FaRegEnvelope} from "react-icons/fa";
import {FiTwitter, FiLinkedin, FiGithub} from "react-icons/fi";

const SocialIcon = ({icon, link_text}) => {
  return (
    <div>
      <a href={link_text}>{icon}</a>
    </div>
  );
};

const Social = ({size = 40}) => {
  return (
    <div className="flex flex-row space-x-3">
      <SocialIcon
        icon={<FiGithub size={size} />}
        link_text={"https://www.github.com/harshasomisetty"}
      />
      <SocialIcon
        icon={<FiLinkedin size={size} />}
        link_text={"https://www.linkedin.com/in/harshasomisetty"}
        size={size}
      />
      <SocialIcon
        icon={<FiTwitter size={size} />}
        link_text={"https://www.twitter.com/HarshaSomisetty"}
      />
      <SocialIcon
        icon={<FaInstagram size={size} />}
        link_text={"https://www.instagram.com/harshasomisetty"}
        size={size}
      />
      <SocialIcon
        icon={<FaRegEnvelope size={size} />}
        link_text={"mailto: hs884@scarletmail.rutgers.edu"}
      />
    </div>
  );
};

export default Social;
