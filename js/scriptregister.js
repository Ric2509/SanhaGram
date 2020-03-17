var data = new Date()


function corrigevalordia(valor)
{
    console.log(valor.value);
    if(valor.value < 1){
      
        valor.value = "1";
    }
    if(valor.value >31){
        
        valor.value = "31";
    }
}

function corrigevalorano(valor)
{
    console.log(data.getFullYear());
    if(valor.value < 1970){
      
        valor.value = "1970";
    }
    if(valor.value > data.getFullYear()){
        
        valor.value = data.getFullYear();
    }
}