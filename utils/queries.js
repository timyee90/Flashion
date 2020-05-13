import axios from "axios";

const baseUrl = "http://18.224.200.47";

const handleError = (err) => console.log("ERROR: ", err);

export const getProductInfo = (productId) => {
  return axios
    .get(`${baseUrl}/products/${productId}`)
    .then(({ data }) => {
      return data;
    })
    .catch(handleError);
};
