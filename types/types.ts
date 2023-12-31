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
  videoSource: AVPlaybackSource | any;
  name: string;
  level?: string;
  image: string | ImageSourcePropType | any;
  serious: string;
  repetitions: string;
};

export type ILevelTraining = {
  image: string | ImageSourcePropType | any;
  level: string;
};

export type IModalTraining = {
  modalOpen: boolean;
  setOpenModal: () => void;
  statusVideo: (status: object) => void;
  videoRef: React.MutableRefObject<null>;
  videoSource?: AVPlaybackSource | any;
};
