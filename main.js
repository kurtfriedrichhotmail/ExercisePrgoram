// code that should run immediately

let output = document.getElementById("output"); 


// code that needs to wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {
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


  
      
       
    document.getElementById("situps").value = "";
    document.getElementById("pushups").value = "";
    document.getElementById("jumprope").value = "";

    




