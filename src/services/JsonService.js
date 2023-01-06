import http from "../http-common.js";

class readJson{
  getUsersJson(){
    return http.get('./data/users-detail.json')
  } 
  getProductsJson(){
    return http.get('./data/products-data.json')
  }
  getIngredientsJson(){
    return http.get('./data/ingredients.json')
  }
}

export default new readJson();