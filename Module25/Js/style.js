console.log('hello world');
console.log(document);
const AllHeadign = document.getElementsByTagName('li');
console.log(AllHeadign);
const listName = document.getElementsByTagName('h1');
console.log(listName);

for(h1 of AllHeadign){
    console.log(h1.innerText)
}

const PlaceName = document.getElementById('Place-name');
PlaceName.innerText='This place is a very nice Change by js'


const PlaceAll = document.querySelectorAll('.Place');
for(const place of PlaceAll){
    console.log(place.innerText)
}

// 2nd step 

const placeOne = document.querySelector('.Place');
console.log(placeOne);


// style css 

const sections = document.querySelectorAll('div');
for(const section  of sections){
    section.style.border = '2px solid black';
    section.style.backgroundColor = 'red';
    section.style.margin = '25px';
    section.style.padding = '30px';
    section.style.borderRadius = '10px'
}

