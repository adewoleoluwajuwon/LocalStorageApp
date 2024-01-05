const addSingleItem = document.getElementById('add-single-item-to-ls');
const addAnotherItem = document.getElementById('add-another-item-to-ls');
const addOneItemFromLS = document.getElementById('add-single-item-from-ls');
const removeOneItemFromLS = document.getElementById('remove-single-item-from-ls');
const removeAllItemFromLS = document.getElementById('remove-all-item-from-ls');

// Functions

const addOneItem = () => {
    localStorage.setItem('Names','Karl Hadwen');
    upDateUI();
};

const addOtherItem = () => {
    localStorage.setItem('users', JSON.stringify({name: 'Moss', age: 24,}))
    upDateUI();
};

const addAnItemFromLS = () => {
   const user = JSON.parse(localStorage.getItem('users'));
   const lsCurrently = document.getElementById('ls-currently');
    lsCurrently.textContent = user.age;
};
const rmOneItemFromLS = () => {
    localStorage.removeItem('name');
    upDateUI();
    console.log('success');
};

const rmAllItemFromLS = () => {
    localStorage.clear();
}




//updat the UI

const upDateUI = () => {
    var values = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;
    while(i--) {
        values.push(localStorage.getItem(keys[i]));
    }
    const lsCurrently = document.getElementById('ls-currently');
    lsCurrently.textContent = values;
};


// EventListeners
addSingleItem.addEventListener('click', addOneItem)
addAnotherItem.addEventListener('click', addOtherItem)
addOneItemFromLS.addEventListener('click', addAnItemFromLS)
removeOneItemFromLS.addEventListener('click', rmOneItemFromLS)
removeAllItemFromLS.addEventListener('click', rmAllItemFromLS)
