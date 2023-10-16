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
  dataTraining: ITrainingData[];
};

export type ITrainingData = {
  photo: string | ImageSourcePropType;
  name: string;
  level: string;
  timer: string;
};
