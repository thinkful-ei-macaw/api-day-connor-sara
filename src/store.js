
const items = [];
let hideCheckeditems = false;
const error = null;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function(id, newData) {
  let foundItem = this.items.find(item => item.id === id);
  Object.assign(foundItem, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

function setError(e) {
 this.error = e;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  findAndUpdate,
  toggleCheckedFilter,
  setError
};