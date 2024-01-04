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
    aqob.insertBefore(newNode,aqAddButtonOb);
}

// generating CV
function generateCV(){

    let nameFeild=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameFeild;

    // direct
    document.getElementById("nameT2").innerHTML=nameFeild;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("linkT").innerHTML=document.getElementById("linkField").value;
    document.getElementById("GitT").innerHTML=document.getElementById("gitField").value;

    // objective
    document.getElementById("objectT").innerHTML=document.getElementById("objField").value;
    
    // work experience
    let wes= document.getElementsByClassName("weField");
    let str=''
    for(let e of wes){
        str+=`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;
    
    // academic qualification

    let aqs=document.getElementsByClassName("eqField")
    let str1='';
    for(let e of aqs){
        str1+=`<li>${e.value}</li>`
    }
    document.getElementById("aqT").innerHTML=str1;

    // upload image

    let file=document.getElementById("imgField").files[0]
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
        // set image to template
    reader.onloadend= function (){
        document.getElementById("imgT").src=reader.result;
    };
    

    document.getElementById("cv-form").style.display='none'
    document.getElementById('cv-template').style.display="block";
}

function printCV(){
    window.print();
}