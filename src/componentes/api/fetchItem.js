// Função para buscar informações de um item específico
export const fetchItem = async (itemId) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar o item');
  }

  const data = await response.json();
  return data;
};

export default fetchItem;
