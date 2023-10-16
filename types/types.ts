import { AVPlaybackSource } from "expo-av";
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
  image: string | ImageSourcePropType | any;
  dataTraining: ITrainingData[];
};

export type ITrainingData = {
  name: string;
  level: string;
  image: string | ImageSourcePropType | any;
  timer: string;
};

export type IModalTraining = {
  modalOpen: boolean;
  setOpenModal: () => void;
  statusVideo: (status: object) => void;
  videoRef: React.MutableRefObject<null>;
  videoSource: AVPlaybackSource;
};
