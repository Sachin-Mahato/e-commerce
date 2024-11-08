async function fetchAllProducts() {
   const url = "https://fakestoreapi.com/products"
   let response = await fetch(url);
   try {
      if (!response.ok) {
         throw new Error(`error in fetching response object`);
      }
      let data = await response.json();
      return data;
   } catch (error) {
      console.log(`error in fetching all products ${error}`)
   }
}

export default fetchAllProducts;