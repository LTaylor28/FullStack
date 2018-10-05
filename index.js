function validateLunch(){
    var food = doucment.getElementById("lunchWeAte").value;
    if(food === "gyro") {
        alert("My stomach is full.");
    }else{
        alert("I'm still hungry!");
    }
}