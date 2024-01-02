function addNewWorkExp(){
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weob=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weob.insertBefore(newNode,weAddButtonOb);


}

function addNewQualification(){

    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqob=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    weob.insertBefore(newNode,aqAddButtonOb);
}