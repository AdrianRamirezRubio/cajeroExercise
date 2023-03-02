/* informacion de los billetes */
const dinero=[
            {
                "tipo":"1000",
                "valor":1000,
                "cantidad":50
            },
            {
                "tipo":"500",
                "valor":500,
                "cantidad":50
            },
            {
                "tipo":"200",
                "valor":200,
                "cantidad":50
            },
            {
                "tipo":"100",
                "valor":100,
                "cantidad":50
            },
            {
                "tipo":"50",
                "valor":50,
                "cantidad":50
            },
            {
                "tipo":"20",
                "valor":20,
                "cantidad":50
            },
            {
                "tipo":"1",
                "valor":1,
                "cantidad":50
            }
        ];

class cajero{ 
    /* Revisa si el monto es aceptable */
    static revisa=(num)=>{
        return (num%50);
    }
    /* Revisa si cantidad de billetes a entregar */
    static calculaEntrega=(num)=>{
        /* console.log('El numero', num); */
        dinero.sort( (a, b)=>{return b-a});
        
        let flag = 0;
        let resto = num;  
        let data = [];
        for (let value in dinero) {
            //value += 1;
            /* console.log('Valor',dinero[value].valor); */

            flag = parseInt(resto/dinero[value].valor);
            resto = resto%dinero[value].valor;

           /*  console.log('Division',flag);
            console.log('Resto',resto); */

            if(flag>0){
                data.push({"tipo":dinero[value].tipo,
                "valor":dinero[value].valor,
                "cantidad":flag});
                /* console.log('CajeroData',data); */
            }
           
        }
        generarTicket(data);
       /*  console.log('CajeroData',data); */
        return 1;
    }

    static reset=()=>{
        document.getElementById("ticket1").innerHTML = "";
    }


} 


retira=()=>{
    cajero.reset();
    monto = parseInt(document.getElementById('monto').value);
    if (monto>0 && monto !== "") {
        cajero.calculaEntrega(monto);
    } else { 
        ///window.alert('Ingresa un monto');
        M.toast({html: 'Ingresa un monto'})
    }
    
}


generarTicket=(data)=>{
    ticket="";
    for (let value in data) {
        ticket+= "<div id='ticket'>"+ 
                        "<div class='col s12 m6'>"+
                            "<div class='card blue-grey darken-1'>"+
                                "<div class='card-content white-text'>"+
                                "    <span class='card-title'>Información de Retiro</span>"+
                                "    <p>Moneda "+data[value].tipo+"</p>"+
                                "    <p>Cantidad"+data[value].cantidad+"</p>"+
                                "</div>"+
                            "</div>"+
                    "</div></div>";
    }
   /*  console.log(ticket); */
    document.getElementById("ticket1").innerHTML += ticket;
    document.getElementById("a1").style.visibility = "";
    document.getElementById("a1").style.display = "";
}


window.addEventListener('load', function() {
    reload();
});

reload=()=>{
    document.getElementById('monto').value="";
    document.getElementById("a1").style.visibility = "hidden";
    document.getElementById("a1").style.display = "none";
    cajero.reset();
}

loaded=()=>{
    reload();
}
