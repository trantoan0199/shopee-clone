import http from 'src/utils/http'
import { SuccessResponse } from 'src/types/utils.type'
import { Product, ProductList, ProductListConfig } from 'src/types/product.type'

const URL = 'products'
const productApi = {
  getProductList: (params: ProductListConfig) => {
    return http.get<SuccessResponse<ProductList>>(URL, { params })
  },
  getProductDetail: (id: string) => {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  }
}

export default productApi
