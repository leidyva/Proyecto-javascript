function onClickSubmitButton(){
    let inputValue = document.getElementById("inputText").value;
    if(inputValue>0){
        alert("Hey el número es mayor que 0");
    }else if (inputValue<0){
        alert("Hey el número es menor");
    }else{
        alert("Intente otra vez");
    }
}