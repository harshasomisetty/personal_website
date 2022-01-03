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
const Social = () => {
  return (
    <div className="flex flex-row">
      <SocialIcon
        icon={<FaGithub />}
        link_text={"https://www.github.com/harshasomisetty"}
      />
      <SocialIcon
        icon={<FaLinkedinIn />}
        link_text={"https://www.linkedin.com/in/harshasomisetty"}
      />
      <SocialIcon
        icon={<FaTwitter />}
        link_text={"https://www.twitter.com/HarshaSomisetty"}
      />
      <SocialIcon
        icon={<FaAddressCard />}
        link_text={
          "https://docs.google.com/document/d/1GccuGcXmZ6tDAI0Y_svTLM5yTiuQJBqra5AY8o4xE2g/edit"
        }
      />
      <SocialIcon
        icon={<FaRegEnvelope />}
        link_text={"mailto: hs884@scarletmail.rutgers.edu"}
      />
    </div>
  );
};

export default Social;
