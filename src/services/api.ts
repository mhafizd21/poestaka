import { IBook } from "../interfaces";
import axiosClient from "./services";

export const getBookList = async (): Promise<IBook[]> => {
  const { data } = await axiosClient({
    url: "mock/books",
    method: "GET",
  });

  return data;
};