import { ReactNode } from "react";

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
