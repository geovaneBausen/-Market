// Função para buscar informações de um item específico
export const fetchItem = async (itemId) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
  const data = await response.json();
  return data;
};

export default fetchItem; 