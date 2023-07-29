 function addNewWeField()
{
        console.log("Adding new field");
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let weOb = document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");


    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAcField(){
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let acOb = document.getElementById("ac");
    let acAddButtonOb=document.getElementById("acAddButton");


    acOb.insertBefore(newNode,acAddButtonOb);
}
function generateresume()
{
    console.log("generatecv");


    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1"); 
    nameT1.innerHTML =nameField;

    document.getElementById("nameT2").innerHTML= nameField;

    document.getElementById("contactT").innerHTML=document.getElementById(
        "NumberField").value;
        document.getElementById("addressT").innerHTML=document.getElementById(
        "addressFeild").value;
        document.getElementById("linkT").innerHTML=document.getElementById(
        "lkField").value;
        document.getElementById("ObjectiveT").innerHTML=document.getElementById(
            "objectiveField").value;
        

            let wes = document.getElementsByClassName("weField");
            let str ="";
            for (let e of wes)
            {
                str =str +`<li> ${e.value} </li> `;

            }
            document.getElementById("weT").innerHTML = str;

            let acs=document.getElementsByClassName("eqField");
              let str1="";
            for(let e of acs)
            {
                str1= str1 +`<li> ${e.value} </li>`;

            }
            document.getElementById("aqT").innerHTML =str1;

            document.getElementById("ckT").innerHTML=document.getElementById(
                "certificationFeild").value;
                document.getElementById('resume-form').style.display='none';
                document.getElementById('resume-temp').style.display='none';
            }
function printResmue(){
    window.print();
}
        




