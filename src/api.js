const BASE_URL = 'https://thinkful-list-api.herokuapp.com/connorsara';

function getItems() {
  return apiFetch(`${BASE_URL}/items`);
}

function createItem(name){

  const newItem = JSON.stringify(
    {
      name: name
    });

  return apiFetch(`${BASE_URL}/items`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: newItem
  });
}

function updateItem(id, updateData){
  const updateDataStr = JSON.stringify(updateData);

  return apiFetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: updateDataStr
    });

}

const deleteItem = function(id) {
  return apiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

function apiFetch(...args){
  return fetch(...args);
};


export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};