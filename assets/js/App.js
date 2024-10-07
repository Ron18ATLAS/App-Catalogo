import Producto from "./Product.js"
import UI from "./UI.js";

//DOM

document.getElementById("formulario")
    .addEventListener("submit", function(e){
        const nombre =  document.getElementById("nombre").value;
        const precio =  document.getElementById("price").value;
        const anyo =  document.getElementById("year").value;

        const prod=new Producto(nombre, precio, anyo);
        
        const ui = new UI();

        if(nombre==="" || precio==="" || anyo===""){
           return ui.showMensaje("Complete los campos por favor...","info");
        }
        ui.addProducto(prod);
        ui.showMensaje("¡Producto agregado!", "success");

        e.preventDefault();

        })

document.getElementById("lista-productos")
    .addEventListener("click",function(e){
    const ui= new UI();
    ui.deleteProducto(e.target);
    

    })