const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addLiItem() {
  const list = document.querySelector('#ingredients');
  ingredients.forEach(el => {
    const addLi = document.createElement('li');
    addLi.classList.add('item');
    addLi.textContent = el;
    list.append(addLi);
  });
}

// const navRef = document.querySelector("#ingredients");


// const item1 = document.createElement("li");
// item1.textContent = ingredients[0];

// const item2 = document.createElement('li');
// item2.textContent = ingredients[1];

// const item3 = document.createElement('li');
// item3.textContent = ingredients[2];

// const item4 = document.createElement('li');
// item4.textContent = ingredients[3];

// const item5 = document.createElement('li');
// item5.textContent = ingredients[4];

// const item6 = document.createElement('li');
// item6.textContent = ingredients[5];

// navRef.append(item1, item2, item3, item4, item5, item6);

// console.log(navRef);


// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(item4);
// console.log(item5);
// console.log(item6);

