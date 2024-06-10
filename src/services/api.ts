import { IBook, IGetBookListParams } from "../interfaces";
import axiosClient from "./services";

export const getBookList = async (params?: IGetBookListParams): Promise<IBook[]> => {
  const { data } = await axiosClient({
    url: "mock/books",
    method: "GET",
    params,
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
