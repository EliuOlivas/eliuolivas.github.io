window.onload = ()=>{
    var btn = document.getElementById("btnLogin")
    var txtE = document.getElementById('txtEmail')
    var txtP = document.querySelector("#txtPassword")
    var divA = document.querySelector("#alert")
    var divAS = document.querySelector("#alertSuccess")
    btn.addEventListener('click',(evt)=>{
        evt.preventDefault();
        
        if(txtE.value =="" || txtP.value == "" ){
            divA.innerHTML = "ERROR: <br> <small>Favor de llenar los campos</small>"
            divA.style.display = "block"
        }else{
            if(txtP.value.length<5){
                divA.innerHTML = "ERROR: <br> <small>El password debe ser mayor a 5 letras</small>"
                divA.style.display = "block"
            }else{
                divAS.style.display = "block"
            }
        }
    })
    txtE.addEventListener('focus', (evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
    })
    txtP.addEventListener('focus', (evt)=>{
        divA.style.display='none'
        divAS.style.display='none'
    })
}