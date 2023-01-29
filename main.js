// code that should run immediately

let output = document.getElementById("output"); 


// code that needs to wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("showAllButton").addEventListener("click", function () {
        console.log(exerciseArray);
        let message = "Exercise  Calorie\n";
        for (i = 0; i < exerciseArray.length; i++) {
            message = message + exerciseArray[i].situps + "  " + exerciseArray[i].pushups + "  "+ exerciseArray[i].jumprope + "\n";
            console.log(message);
        }
        document.getElementById("output").value = message;
    });
});

exerciseArray = []; // define an array of type of exercise


    let Exercise = function (which, length, calories) {
        this.exerciseName = which;
        this.exerciseLenght = length;
        this.exerciseCalories = calories;
        
    }
    
    // Create instances of Exercise objects
    // All instances of Exercise will have these common properties and methods
    let situps = new Exercise("Situps", 1 , 10 );
    let pushups = new Exercise("Pushups", 1 , 15);
    let jumprope = new Exercise("Jumprope", 1 , 18);
    
    exerciseArray.push(Exercise);
    console.log(exerciseArray);
    
    output.innerHTML += situps.exerciseName + " " + situps.exerciseLenght + " " + situps.calories+ "<br><br>";
    output.innerHTML += pushups.exerciseName + " " + pushups.exerciseLenght + " " + pushups.exerciseCalories + "<br><br>";
    output.innerHTML += jumprope.exerciseName + "  " + jumprope.exerciseLenght + "  " + jumprope.exerciseCalories

      
       
    document.getElementById("situps").value = "";
    document.getElementById("pushups").value = "";
    document.getElementById("jumprope").value = "";

    




