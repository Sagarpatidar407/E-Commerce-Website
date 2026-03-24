let bagitems; 

Onload();

function Onload() {
    let bagitemstr = localStorage.getItem('bagitems');
    bagitems = bagitemstr ? JSON.parse(bagitemstr) : [];
    displaybagicon();
}

function addTobag(itemId){
    bagitems.push(itemId);
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
    displaybagicon();
}

function displaybagicon(){
    let bag_item_count = document.querySelector(".bag-item-count");
    if(bagitems.length > 0){
        bag_item_count.style.visibility = 'visible'
        bag_item_count.innerHTML = bagitems.length;
    }
    else{
        bag_item_count.style.visibility = 'hidden'
    }
    
}

console.log(bagitems);


