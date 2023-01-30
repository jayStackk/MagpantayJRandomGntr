import { SaveToLocalStorage ,SaveToLocalStoragebybtn, getLocalStorage, RemoveFromLocalStorage,  newArray} from './localstorage.js';
let injectHere = document.getElementById('injectHere');
let resetMe = document.getElementById('resetMe');
let namebtn = document.getElementById('namebtn');
let randomizer = document.getElementById('randomizer');

let userInput = document.getElementById('userInput');

// Going to create my Students List now, They are going to show up as Buttons that way if the user wants to remove the {name} then
// a click would erase that previous user Input. 


// creating functions for my class list to show up when addeventlistener is clicked


function newListWeb(userInput){
    
    let b = document.createElement('button');
    b.className = 'btn btn-dark';
    b.type = 'button';
    b.textContent = userInput;
    b.id = userInput;
    // create div for my newList
    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(b);
    
    injectHere.appendChild(div);
    
    div.addEventListener('click', function(e){
        let hideDiv = document.getElementById(b.id);
        hideDiv.remove();


// importing from Local storage
        RemoveFromLocalStorage(b.id)
        getLocalStorage();
        console.log(newArray.length)
    });
    
    
}



let injecthere2 = document.getElementById('injecthere2');
function createElementsForGroup(Group){
    
    let p = document.createElement('p')
    p.innerHTML = Group
    injecthere2.appendChild(p)
}


console.log( newArray.length);
// importing from Local storage
getLocalStorage();
arrayList();




function newList(userInput){

    let b = document.createElement('button');
    b.className = 'btn btn-light';
    b.type = 'button';
    b.textContent = userInput.value;
    b.id = userInput.value;
    // create div 
    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(b);
    
    injectHere.appendChild(div);
    
    div.addEventListener('click', function(e){
        let hideDiv = document.getElementById(b.id);
        hideDiv.remove();

        // importing from Local storage
        RemoveFromLocalStorage(b.id)
        getLocalStorage();
        console.log(newArray.length)
    });
    
    
}

function arrayList(){
    for(let i =0; i< newArray.length; i++){
        

        // importing from Local storage
        console.log(newArray[i]);
        newListWeb(newArray[i]);
    }
}

function randomizerfunction(){
    let randomize = Math.floor(Math.random() * newArray.length);
    let randomPerson = newArray[randomize];
    createElementsForGroup(randomPerson);
    
}

//creating my addEventListener To get data when the button is 'Clicked', Should make my Random Generator work!
namebtn.addEventListener('click', function(e){
    newList(userInput);


    // importing from Local storage
    getLocalStorage();
    SaveToLocalStoragebybtn(userInput.value);
    console.log(newArray.length)
});



randomizer.addEventListener('click', function(e){
    randomizerfunction();
});

resetMe.addEventListener('click',function(e){
    location.reload();
});