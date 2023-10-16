import {
  ICategoryTraining,
  ILevelTraining,
  IPost,
  ITrainingData,
} from "../../types/types";

//Images Post Data
const UdemyImage = require("../../src/assets/images/Logo.png");
const UdemyPost = require("../../src/assets/images/PhotoPost.png");
const InstagramImage = require("../../src/assets/images/ImageInsta.png");
const InstagramPost = require("../../src/assets/images/PhotoPostInsta.png");

//Images LevelTraining
const photoTrainingBegginer = require("../..//src/assets/images/PhotoIniciante.png");
const photoTrainingIntermediary = require("../..//src/assets/images/Intermediary.png");
const photoTrainingAdvanced = require("../..//src/assets/images/avanced.png");

//Images Training
const photoTrainingAbdomen = require("../..//src/assets/images/Imagetreino.png");
const photoBannerTraining = require("../..//src/assets/images/imageInit.png");
const videoTrainingAbdomen = require("../..//src/assets/videos/TrainingAbdomen.mp4");

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

export const DataLevelTraining: ILevelTraining[] = [
  { image: photoTrainingBegginer, level: "Iniciante" },
  { image: photoTrainingIntermediary, level: "Intermediário" },
  { image: photoTrainingAdvanced, level: "Avançado" },
];

export const TrainingData: ICategoryTraining[] = [
  {
    image: photoBannerTraining,
    quantityTrainings: "5 Treinos",
    title: "Clássico",
    level: "Iniciante",
    dataTraining: [
      {
        videoSource: videoTrainingAbdomen,
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        videoSource: videoTrainingAbdomen,
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
    level: "Iniciante",
    dataTraining: [
      {
        videoSource: videoTrainingAbdomen,
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        videoSource: videoTrainingAbdomen,
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
    level: "Iniciante",
    dataTraining: [
      {
        videoSource: videoTrainingAbdomen,
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
      {
        videoSource: videoTrainingAbdomen,
        level: "Iniciante",
        name: "Abdômen",
        image: photoTrainingAbdomen,
        timer: "18min",
      },
    ],
  },
];
