import { ICategoryTraining, IPost, ITrainingData } from "../../types/types";

//Images Post Data
const UdemyImage = require("../../src/assets/images/Logo.png");
const UdemyPost = require("../../src/assets/images/PhotoPost.png");
const InstagramImage = require("../../src/assets/images/ImageInsta.png");
const InstagramPost = require("../../src/assets/images/PhotoPostInsta.png");

const photoTrainingAbdomen = require("../..//src/assets/images/Imagetreino.png");
const photoBannerTraining = require("../..//src/assets/images/imageInit.png");

export const PostData: IPost[] = [
  {
    id: 1,
    name: "Udemy",
    photoUser: UdemyImage,
    patrocined: true,
    photoPost: UdemyPost,
    description:
      " Nosso marketplace global apresenta uma extensa biblioteca em vários idiomas, com milhares de cursos ministrados por especialistas reais.",
  },
  {
    id: 2,
    name: "Instagram",
    photoUser: InstagramImage,
    patrocined: true,
    photoPost: InstagramPost,
    description:
      " Nesta terça-feira (14), o Instagram anunciou o fim de mais um recurso voltado para vendas, o Live Shopping (as Compras ao vivo da plataforma).",
  },
];

export const TrainingData: ICategoryTraining[] = [
  {
    image: photoBannerTraining,
    quantityTrainings: "5 Treinos",
    title: "Clássico",
    level: "beginner",
    dataTraining: [
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
    ],
  },
  {
    image: photoBannerTraining,
    quantityTrainings: "5 Treinos",
    title: "Clássico",
    level: "beginner",
    dataTraining: [
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
    ],
  },
  {
    image: photoBannerTraining,
    quantityTrainings: "5 Treinos",
    title: "Clássico",
    level: "beginner",
    dataTraining: [
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
    ],
  },
];
