import { movie } from "./types/movie";

const whyToJoinData = [
  {
    title: "Enjoy your TV",
    description:
      "Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more",
  },
  {
    title: "Download your shows to watch online",
    description:
      "Save your favorites easily and always have something to watch",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them - free with your membership",
  },
];

const frequentlyAskedQuestions = [
  {
    q: "What is Netflix?",
    res: "",
  },
  {
    q: "How much des Netflix cost?",
    res: "",
  },
  {
    q: "Where can I watch?",
    res: "",
  },
  {
    q: "How do I cancel?",
    res: "",
  },
  {
    q: "What can I watch on Netflix?",
    res: "",
  },
  {
    q: "Is Netflix good for kids?",
    res: "",
  },
];

const menuList = [
  {
    label : "Home",
    to : "/browse"
  },
  {
    label : "TV Shows",
    to : "/browse"
  },
  {
    label : "Movies",
    to : "/browse"
  },
  {
    label : "New & Popular",
    to : "/browse"
  },
  {
    label : "My List",
    to : "/browse"
  },
]


const moviesList : movie[] = [
  {
    title : "",
    description : "",
    image : "/assets/cards/card9.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card6.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card2.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card11.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card10.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card7.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card4.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card2.jpg"
  },
  {
    title : "",
    description : "",
    image : "/assets/cards/card1.jpg"
  },
]
export { frequentlyAskedQuestions, whyToJoinData, menuList ,moviesList};
