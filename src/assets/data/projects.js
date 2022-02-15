import { v4 as uuidv4 } from "uuid";
import ProjectImg from "../images/blind.jpg";
import UTrackerImg from "../images/utracker.jpg";
import GreenCtgImg from "../images/greenctg.jpg";
import CoinTrackerImg from "../images/cointracker.jpg";
import CavinImg from "../images/cavinimg.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Auto Renewal In Mobile Games",
    desc:
      "This was an internship at TEESYNC TECHNOLOGY LIMITED, Hyderabad where my primary role was to develop an auto payment renewal feature for mobile games in Java.",

    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Speed Emotion Recognition Using CNN",
    desc:
      "The aim in this was to design a Machine Learning model that predicts the emotion of a person using voice sample.",
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: "CrytoCoin Tracker",
    desc:
      "Using this app you can track any e-coin. This app's components were sold to an upcoming new crypto currency exchange company and it's Beta version is available on Play Store for testing.",
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Freelance Projects",
    desc:
      "I Developed websites for various companies (Diffuse Media, Mr Boss Solutions, 3Stripe Security, SKEI Etc..). Domains of these companies can be shared with you on request.",
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: "Smart Walking Stick for the Blind(IOT)",
    desc:
      "A walking stick which will alert the blind person by vibrating the stick. and by beeping if there is any obstacle in the path. Technologies Used: ARDUINO UNO R3, SENSORS.",
    img: ProjectImg,
  },
];

export default projects;
