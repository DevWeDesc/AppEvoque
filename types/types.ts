import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export type IPost = {
  id: number;
  photoUser: string | any;
  name: string;
  patrocined: boolean;
  photoPost: string | any;
  description: string;
};

export type IContextApp = {
  children: ReactNode;
};

export type ICategoryTraining = {
  title: string;
  quantityTrainings: string;
  level: string;
  image: string | ImageSourcePropType;
  dataTraining: ITrainingData[];
};

export type ITrainingData = {
  name: string;
  level: string;
  image: string | ImageSourcePropType;
  timer: string;
};
