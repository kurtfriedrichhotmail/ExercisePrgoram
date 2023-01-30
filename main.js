// code that should run immediately

exerciseArray = []; // define an array of type of exercise
let Exercise = function  (which, length, calories) {
  this.exerciseName = which;
  this.exerciseLenght = length;
  this.exerciseCalories = calories;
// end object constructor
};


// code that needs to wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {
<<<<<<< HEAD
  document.getElementById("showAllButton").addEventListener("click", function () {
    console.log(exerciseArray);
    let message ;
    for (i = 0; i < exerciseArray.length; i++) {
        message = message + exerciseArray[i].situps + "  " + exerciseArray[i].pushups + "  "+ exerciseArray[i].jumprope + "\n";
        console.log(message);
    }
    document.getElementById("output").value = message;
});

});
    exerciseArray = []; // define an array of type of exercise

    let WorkOut = function  (pWhich, pLength, pCalories) {
        this.which = pWhich;
        this.length = parseFloat (pLength);
        this.calories =parseFloat (pCalories);
        this.calculateAdd = function () {
          return this.length * this.calories;
        };
      // end object constructor
      };
    
    // Create instances of Exercise objects
    // All instances of Exercise will have these common properties and methods
    let situps = new WorkOut("situps",  1 , 10 );
    let pushups = new WorkOut("pushups", 1 , 15);
    let jumprope = new WorkOut("jumprope", 1 , 18);








   

    document.getElementById("add").onclick = function () {
      let radioButtonGroup = document.getElementsByName("exercise");
      let checkedRadio = Array.from(radioButtonGroup).find(
        (radio) => radio.checked
      );
      alert("You have selected : " + checkedRadio.value);
    };
  

     
    exerciseArray.push(WorkOut);
   
        


    output.innerHTML += situps+ " " + length + " " + calories + "<br><br>";
    output.innerHTML += pushups + " " + length  + " " + calories + "<br><br>";
    output.innerHTML += jumprope+ "  " + length + "  " + calories


  
=======
  let output = document.getElementById("output"); 


    // Create instances of Exercise objects
    // All instances of Exercise will have these common properties and methods
    let situps = new Exercise("Situps", 1 , 10 );
    exerciseArray.push(situps);

    let pushups = new Exercise("Pushups", 1 , 15);
    exerciseArray.push(pushups);

    let jumprope = new Exercise("Jumprope", 1 , 18);
    exerciseArray.push(jumprope);

  

    document.getElementById("add").onclick = function () {

      let time = document.getElementById("time").value;
      let calories = 0;
      let radioButtonGroup = document.getElementsByName("exercise");
      let checkedRadio = Array.from(radioButtonGroup).find(
        (radio) => radio.checked
      );
      console.log("here");
        console.log(checkedRadio.value);
      if(checkedRadio.value === "Sit Ups"){
        calories = time * 10;
      }
      if(checkedRadio.value === "Push Ups"){
         calories = time * 15;
      }
      if(checkedRadio.value === "Jump Rope"){
          calories = time * 18;
      }
      exerciseArray.push(new Exercise(checkedRadio.value, time, calories))
      };

 

    document.getElementById("showAllButton").addEventListener("click", function () {
        let ul = document.getElementById('output');
        ul.innerHTML = "";
        for (let i = 0; i < exerciseArray.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML =  exerciseArray[i].exerciseName + "   " +  exerciseArray[i].exerciseLenght + " minutes " +   exerciseArray[i].exerciseCalories + " calories";
        };
    });
>>>>>>> 8ea6bb7b8a1db09cfba6f2166012c8231714eb05
      
       
    
    




