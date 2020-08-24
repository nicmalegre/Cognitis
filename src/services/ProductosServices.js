import axios from "axios";
import { PRODUCTOS_URL } from "../urls/url";
const axiosRequest = axios.create({
  baseURL: PRODUCTOS_URL,
});

export const getDataProduct = async(idProducto) => {
    const response = await axiosRequest.get(
        `/productdata/${idProducto}`,
    );
    return response;
}