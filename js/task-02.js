const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const targetedUlList = document.querySelector('#ingredients');

// создаем клон ingredients, чтоб не пушить в DOM при переборе массива
const copyOfTargetedList = targetedUlList.cloneNode(true); 

  ingredients.forEach(element => {
    const listItemToCreate = document.createElement('li')

    listItemToCreate.textContent = element;
    listItemToCreate.classList.add('item');

    return copyOfTargetedList.appendChild(listItemToCreate);
  });

  // вставляем клон в нужное место в DOM.
targetedUlList.parentNode.replaceChild(copyOfTargetedList, targetedUlList);
  
 
