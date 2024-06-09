import { IBook } from "../interfaces";
import axiosClient from "./services";

export const getBookList = async (): Promise<IBook[]> => {
  const { data } = await axiosClient({
    url: "mock/books",
    method: "GET",
  });

  return data;
};

export const getBookById = async (id: number): Promise<IBook> => {
  const { data } = await axiosClient({
    url: `mock/books/${id}`,
    method: "GET",
  });

  return data;
};
