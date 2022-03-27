const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const targetedUlList = document.querySelector('#ingredients');
// создаем клон ingredients, чтоб не добавлять в DOM новые элементы на прот
const copyOfTargetedList = targetedUlList.cloneNode(true); 
  ingredients.forEach(element => {
    const listItemToCreate = document.createElement('li')
    listItemToCreate.textContent = element;
    listItemToCreate.classList.add('item');
    return copyOfTargetedList.appendChild(listItemToCreate);
  });
  // вставляем клон в нужное место в DOM.
targetedUlList.parentNode.replaceChild(copyOfTargetedList, targetedUlList);
  console.log('clone Ul element ', copyOfTargetedList);
  console.log('Modified ingredients list =>', targetedUlList);
 
