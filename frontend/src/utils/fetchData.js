const fetchAllProducts = async () => {
   const response = await fetch("https://fakestoreapi.com/products");
   try {
      if (!response.ok) {
         throw new Error(`error in fetching response object`);
      }
      const data = await response.json();
      return data;
   } catch (error) {
      console.log(`error in fetching all products ${error}`)
   }
}

export {fetchAllProducts}