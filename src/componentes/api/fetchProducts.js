import { mockProducts } from './mock';

//Busca produtos com base em uma consulta.
const fetchProducts = async (query) => {
  // Simula uma chamada de API
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!query) {
    return mockProducts;
  }

  const lowercasedQuery = query.toLowerCase();
  const results = mockProducts.filter(product =>
    product.title.toLowerCase().includes(lowercasedQuery)
  );

  return results;
};
export default fetchProducts;
