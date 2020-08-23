import {
    getDataProduct
} from '../../services/ProductosServices';
export const CARGAR_ACTUAL = "CARGAR_ACTUAL";

export const fetchProductoData = (idProducto) => async(dispatch)=> {
    try{
        //const {data} = await getDataProduct(idProducto);
        dispatch({
            type: CARGAR_ACTUAL,
            payload: idProducto,
        });
    }catch(error){
        console.log(error);
    };
};