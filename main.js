/* Under lektionstid. 

const inpField = document.getElementById("age"); 
const pressBtn =document.getElementById("checkBtn")

function whenClicked() {
    const userAge=parseInt(inpField.value);

    if (userAge >= 25){
        alert("You are old enough.");
    } else{
    alert("You are not old enough.");
    }
}

pressBtn.addEventListener("click", whenClicked); */




// Övningsuppgift 12maj 


//Del 1: Skapa en funktion som tar in ett värde och kollar om: 
//1.Värdet delar med 2 är 5.
//2. Returnerar true om detta är sant.

function checkQuota(x) {
    const quota=parseInt(x/2); 
    if (quota===5){
        return true;}
    else{
        return false; 
    }
}

console.log("kvot = 5: " + checkQuota(10));

// Del 2: 
//Skapa en funktion som tar in ett värde och kollar om: 
//1.Värdet minus 1 är 0.
//2. Returnerar true om detta är sant.

function checkDifference(x) {
    const difference =parseInt(x-1); 
    if (difference===0){
        return true;
    }
    else {
        return false;
    }
}
console.log("differens=0: " + checkDifference(1));

// Del 3: 
//Skapa en funktion som tar in ett värde och kollar om: 
//1.Värdet är större än 10.
//2. Returnerar true om detta är sant.

function checkValueBigger(x) {
 if(x>10) {
     return true; 
 }
 else{
     return false;
 }
}

console.log("Talet är större än 10: " + (checkValueBigger(10)));


// Del 4: 
//Skapa en funktion som tar in ett värde och kollar om: 
//1.Värdet är mindre än 10.
//2. Returnerar true om detta är sant.

function checkValueSmaller(x) {
    if(x<10) {
        return true; 
    }
    else{
        return false;
    }
   }
   
   console.log("Talet är mindre än 10: " + (checkValueSmaller(4)));



// Del 5: 
//Skapa en funktion som returnerar en array med frukter

function createArray(x,y,z) {
    const array=[
        x,
        y,
        z
    ];
    return array; 
}

const fruits = createArray("mango", "papaya", "grape"); 
console.log(fruits[0]);

// Del 6: 
//Skapa en funktion i Javascript som returnerar ett valfritt objekt med valfria värden på.

function createObject(x,y,z) {
    const object ={
        type:x, 
        color:y,
        name:z
    }
    return object;
    
}

const pet= createObject("cat", "tabby", "Mr Whiskarsson"); 
console.log(pet.color);

// Del 7: 
//Skapa en webbsida som har ett formulär med input-fälten:
//johnAge (number)
//sarahAge (number)
//och en knapp.
//När knappen trycks så skall du kolla vem som är äldst och sedan med en “alert()”, printa ut
//antingen “John” eller “Sarah”.
//Här kommer du att använda dig av if och else.


const johnAge=document.getElementById("ageJohn");
const sarahAge=document.getElementById("ageSarah");
pressBtn =document.getElementById("checkBtn");    

function whenClicked(){
    
    const age1= parseInt(johnAge.value); 
    const age2= parseInt(sarahAge.value);

    if (age1>age2) {
        alert("John is the eldest.");
    } 
    else if(age1===age2){ 
        alert("Sarah and John are the same age.");
    } 
    else {
        alert("Sarah is the eldest.");
    }
}

pressBtn.addEventListener("click", whenClicked); 


