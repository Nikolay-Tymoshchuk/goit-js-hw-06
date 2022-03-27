const mainItemOfSearch = document.querySelector('#categories');
const arrayOfCategories = mainItemOfSearch.querySelectorAll('li.item');
console.log('Number of categories:', arrayOfCategories.length);
arrayOfCategories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log('Category : ', categoryName);
    const numbersOfElementsInSubcategory = category.querySelectorAll('li').length;
    console.log('Elements: ', numbersOfElementsInSubcategory);
    return;
});