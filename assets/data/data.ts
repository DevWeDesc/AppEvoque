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

//Videos Trainings
const videoTrainingAbdomen = require("../..//src/assets/videos/TrainingAbdomen.mp4");
const videoDev = require("../..//src/assets/videos/TrainingDev.mp4");
const videoSupino = require("../..//src/assets/videos/TrainingSupino.mp4");
const videoSquat = require("../..//src/assets/videos/TrainingSquat.mp4");
const TrainingPulley = require("../..//src/assets/videos/TrainingPulley.mp4");
const TrainingRemada = require("../..//src/assets/videos/TrainingRemada.mp4");
const videoTrainingRosca = require("../..//src/assets/videos/TrainingRosca.mp4");
const videoTrainingFlexora = require("../..//src/assets/videos/TrainingFlexora.mp4");
const videoTrainingPanturrilha = require("../..//src/assets/videos/TrainingPanturrilha.mp4");

const photoBannerIntermediary = require("../..//src/assets/images/ImageBannerIntermediary.png");
const photoBannerAdvanced = require("../..//src/assets/images/ImageBannerAdvanced.png");

const imageTreiningSupino = require("../..//src/assets/images/ImageSupino.jpeg");
const imageDev = require("../..//src/assets/images/ImageDesenvolvimento.jpeg");
const ImageTriceps = require("../..//src/assets/images/ImageTriceps.jpeg");
const ImageSquat = require("../..//src/assets/images/imageSquat.jpg");
const ImageAbdominal = require("../..//src/assets/images/ImageAbdo.jpeg");
const ImagePulley = require("../..//src/assets/images/ImagePulley.jpeg");
const ImageRemada = require("../..//src/assets/images/ImageRemada.jpeg");
const TrainingRosca = require("../..//src/assets/images/TrainingRosca.jpeg");
const TrainingFlexora = require("../..//src/assets/images/TrainingFlexora.jpeg");
const TrainingPanturrilha = require("../..//src/assets/images/TrainingPanturrilha.jpg");

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
    title: "Treino A",
    level: "Iniciante",
    dataTraining: [
      {
        videoSource: videoSupino,
        name: "Supino reto",
        image: imageTreiningSupino,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoDev,
        name: "Desenvolvimento",
        image: imageDev,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingAbdomen,
        name: "Tríceps Máquina",
        image: ImageTriceps,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoSquat,
        name: "Agachamento",
        image: ImageSquat,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingAbdomen,
        name: "Abdominal solo",
        image: ImageAbdominal,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
  {
    image: photoBannerTraining,
    quantityTrainings: "5 Treinos",
    title: "Treino B",
    level: "Iniciante",
    dataTraining: [
      {
        videoSource: TrainingPulley,
        name: "Puxador (pulley) Frontal",
        image: ImagePulley,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: TrainingRemada,
        name: "Remada Máquina",
        image: ImageRemada,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingRosca,
        name: "Rosca direta barra",
        image: TrainingRosca,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingFlexora,
        name: "Mesa flexora",
        image: TrainingFlexora,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingPanturrilha,
        name: "Panturrilha sentado",
        image: TrainingPanturrilha,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
  {
    image: photoBannerIntermediary,
    quantityTrainings: "5 Treinos",
    title: "Treino A",
    level: "Intermediário",
    dataTraining: [
      {
        videoSource: videoSupino,
        name: "Supino reto",
        image: imageTreiningSupino,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoDev,
        name: "Desenvolvimento",
        image: imageDev,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingAbdomen,
        name: "Tríceps Máquina",
        image: ImageTriceps,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoSquat,
        name: "Agachamento",
        image: ImageSquat,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingAbdomen,
        name: "Abdominal solo",
        image: ImageAbdominal,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
  {
    image: photoBannerIntermediary,
    quantityTrainings: "5 Treinos",
    title: "Treino B",
    level: "Intermediário",
    dataTraining: [
      {
        videoSource: TrainingPulley,
        name: "Puxador (pulley) Frontal",
        image: ImagePulley,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: TrainingRemada,
        name: "Remada Máquina",
        image: ImageRemada,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingRosca,
        name: "Rosca direta barra",
        image: TrainingRosca,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingFlexora,
        name: "Mesa flexora",
        image: TrainingFlexora,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingPanturrilha,
        name: "Panturrilha sentado",
        image: TrainingPanturrilha,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
  {
    image: photoBannerAdvanced,
    quantityTrainings: "5 Treinos",
    title: "Treino A",
    level: "Avançado",
    dataTraining: [
      {
        videoSource: TrainingPulley,
        name: "Puxador (pulley) Frontal",
        image: ImagePulley,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: TrainingRemada,
        name: "Remada Máquina",
        image: ImageRemada,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingRosca,
        name: "Rosca direta barra",
        image: TrainingRosca,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingFlexora,
        name: "Mesa flexora",
        image: TrainingFlexora,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingPanturrilha,
        name: "Panturrilha sentado",
        image: TrainingPanturrilha,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
  {
    image: photoBannerAdvanced,
    quantityTrainings: "5 Treinos",
    title: "Treino B",
    level: "Avançado",
    dataTraining: [
      {
        videoSource: TrainingPulley,
        name: "Puxador (pulley) Frontal",
        image: ImagePulley,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: TrainingRemada,
        name: "Remada Máquina",
        image: ImageRemada,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingRosca,
        name: "Rosca direta barra",
        image: TrainingRosca,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingFlexora,
        name: "Mesa flexora",
        image: TrainingFlexora,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
      {
        videoSource: videoTrainingPanturrilha,
        name: "Panturrilha sentado",
        image: TrainingPanturrilha,
        serious: "3 Séries",
        repetitions: "12 Repetições",
      },
    ],
  },
];
