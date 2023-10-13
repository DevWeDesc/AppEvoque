import { IPost } from "../../types/types";

const UdemyImage = require("../../src/assets/images/Logo.png");
const UdemyPost = require("../../src/assets/images/PhotoPost.png");

const InstagramImage = require("../../src/assets/images/ImageInsta.png");
const InstagramPost = require("../../src/assets/images/PhotoPostInsta.png");

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
