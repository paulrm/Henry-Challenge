import MOSTRAR_PRODUCTOS from '../actions/products'
import CAMBIAR_QUERY from '../actions/products'

const defaultState ={
    products:[],
}

const productReducer = (state=defaultState, actions) =>{
    if(actions.type === "CAMBIAR_QUERY" ){
        return {
            ... state,
            query: actions.query 
        }
    } else {
        return{
            ...state
        }     
    }
}

export default productReducer;