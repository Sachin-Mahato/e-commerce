"use client";
async function fetchAllProducts() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  try {
    if (!response.ok) {
      throw new Error(`error in fetching response object`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`error in fetching all products ${error}`);
  }
}

export default fetchAllProducts;
