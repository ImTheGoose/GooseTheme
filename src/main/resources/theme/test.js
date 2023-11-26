function clearMe(){
    alert("You just reset all variables");
    localStorage.removeItem('David');
    localStorage.removeItem('William');
    let id = "William";
    document.getElementById(id).innerHTML = id+ " kager: "+ 0;
    id = "David";
    document.getElementById(id).innerHTML = id+ " kager: "+ 0;

}

function handleClick(id, add){
    let a = Number(localStorage.getItem(id));
    if (add){
        a = a + 1;
    }else{
        a = a - 1;
    }
    localStorage.setItem(id,a)
    document.getElementById(id).innerHTML = id+ " kager: "+ a;

}