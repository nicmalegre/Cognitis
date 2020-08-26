import axios from "axios";
import { PRODUCTS_URL } from "../urls/url";
const axiosRequest = axios.create({
  baseURL: PRODUCTS_URL,
});

export const getDataProduct = async(idProducto) => {
    const response = await axiosRequest.get(
        `/productdata/${idProducto}`,
    );
    return response;
}