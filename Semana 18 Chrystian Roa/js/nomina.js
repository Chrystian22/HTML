//Ingresar datos bvasicos de la nomija y subsidio de transporte
let smlv = parseFloat(prompt("Ingrese salario minimo legal vigente"));
let subtte = parseFloat(prompt("Ingrese subsidio transporte"));
    function liquidar(){
        //sueldo basico
        let n1=document.getElementById("salario").value;
        let n2=document.getElementById("dias").value;
        sueldo=parseInt(n1)/30*parseInt(n2);
        document.getElementById("basico").value=sueldo.toFixed(0);
        //Subsidio transporte
        if (n1>=2*smlv){
            subsidiot=0;
            document.getElementById("subsidio").value=subsidiot.toFixed(2);
        }
        else{
            subsidiot=subtte/30*parseInt(n2);
            document.getElementById("subsidio").value=subsidiot.toFixed(0);
        }
        //Recargo nocturno
        var nhrn=document.getElementById("hrn").value;
        let vhrn=n1/240*nhrn*1.35;//Se paga con 35% mas
        document.getElementById("totrecn").value=vhrn.toFixed(0);
        //Total devengado
        document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);
        //
        let totaldevo=document.getElementById("totaldev").value;
        //Liquidacion de deducciones
        //EPS y pension
        let eps00=(totaldevo-subsidiot)*0.04;
        let pens00=(totaldevo-subsidiot)*0.04;
        document.getElementById('eps').value=eps00.toFixed(0);
        document.getElementById('pension').value=pens00.toFixed(0);
        //Fondo de solidaridad
        let fondo=0;
        if (n1 >= 4*smlv){
            let fondo=totaldevo*0.01;
            document.getElementById('fondos').value=fondo.toFixed(0);
        }else{
            document.getElementById('fondos').value=fondo.toFixed(0);
        }
        //Prestamo
        let presta=document.getElementById("prestam").value;
        //Total deducciones
        document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);
        
        let totalddc=document.getElementById("totaldedu").value;
        let vneto=totaldevo-totalddc;   

        //Total neto pagado
        document.getElementById('neto').value=vneto.toFixed(0);
    }