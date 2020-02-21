const BASE_URL = 'https://thinkful-list-api.herokuapp.com/connorsara';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name){

  const newItem = JSON.stringify(
    {
      name: name
    });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: newItem
  });
}

function updateItem(id, updateData){
  const updateDataStr = JSON.stringify(updateData);


  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: updateDataStr
  });
}

const deleteItem = function(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};