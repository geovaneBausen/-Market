import { mockProducts } from './mock';

// Função para buscar informações de um item específico
export const fetchItem = async (itemId) => {
  // Simula uma chamada de API
  await new Promise(resolve => setTimeout(resolve, 500));

  const product = mockProducts.find(item => item.id === itemId);

  if (!product) {
    throw new Error('Item não encontrado');
  }

  return product;
};

export default fetchItem;
