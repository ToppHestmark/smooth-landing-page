import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  dark: true,
  primary: true,
  darkText: false,
  imgStart: false,
  image: svg1,
  alt: "Transfer",
  topLine: "Premium",
  headLine: "Unlimited Transaction with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
  imgStart: true,
  image: svg2,
  alt: "Piggy bank",
  topLine: "Save More",
  headLine: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
  imgStart: false,
  image: svg3,
  alt: "Receip",
  topLine: "Join our team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
};
