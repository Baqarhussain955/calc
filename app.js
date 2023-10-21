function butto(e){
    document.getElementById("inpt").value+=e
    
}


function equals(){
    var a=document.getElementById("inpt")
    a.value=eval(a.value)
}

function clearr(){
    document.getElementById("inpt").value=''
}

function dlt() {
    var inputField = document.getElementById("inpt");
    // var currentValue = inputField.value;

        // Remove the last character using substring
    inputField.value = inputField.value.slice(0,- 1);

}

