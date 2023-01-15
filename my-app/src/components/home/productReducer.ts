import { IncomingHttpStatusHeader } from 'http2';
import { IProductState, ProductActions, ProductActionTypes } from './types';

const initState : IProductState = {
    list: [
        // {
        //     id: 2,
        //     name: "AGM",
        //     detail: "---------"
        // }
    ],
    count_page: 0,
    current_page: 0,
    total: 0
}

export const productReducer = (state=initState, action: ProductActions): IProductState => {
    switch(action.type)
    {
        case ProductActionTypes.GET_PRODUCTS: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
    
}