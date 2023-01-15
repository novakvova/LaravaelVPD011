import { Dispatch } from "react";
import http from "../../http_common";
import {
  GetProductAction,
  IProductResponse,
  IProductSearch,
  ProductActions,
  ProductActionTypes,
} from "./types";

export const GetProductList =
  (search: IProductSearch) => async (dispatch: Dispatch<ProductActions>) => {
    try {
      const resp = await http.get<IProductResponse>(
        "/api/products?page=" + search.page
      );

      const { data } = resp;
      const action: GetProductAction = {
        type: ProductActionTypes.GET_PRODUCTS,
        payload: {
          list: data.data,
          count_page: data.last_page,
          current_page: data.current_page,
          total: data.total,
        },
      };
      dispatch(action);
    } catch (err: any) {}
  };
