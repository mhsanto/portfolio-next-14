"use client";
import { LinkedinShareButton } from "next-share";

const Linkedin = ({ children }) => {
  return <LinkedinShareButton url="www.linkedin.com/in/mh-santo">{children}</LinkedinShareButton>;
};

export default Linkedin;
