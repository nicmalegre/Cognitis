import {
    CARGAR_ACTUAL,
} from '../Actions/ProductosActions';

const initialState = {
	productoActual: {}
}

const productos = (state = initialState,action) => {
    switch(action.type){
        case CARGAR_ACTUAL:
            return {
                ...state,
                productoActual: action.payload,
            }
        default: return state
    }
}

export default productos