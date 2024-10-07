//UI
class UI{
    addProducto(prod){

       const lista= document.getElementById("lista-productos");
       const elemento= document.createElement("div");
       let str =
       `
            <div class="card text-center mb-4">
              <div class="card-body">
               <strong>Producto</strong>: ${prod.nombre}
               <strong>Precio</strong>: ${prod.precio}
               <strong>Año</strong>: ${prod.anyo}
               <a href="#" class="btn btn-outline-danger" name="delete">Borrar</a>
              </div>
            </div>
       
       `;
       elemento.innerHTML= str;
       lista.appendChild(elemento);
       this.resetForm();
       
    }

    resetForm(){
      document.getElementById("formulario").reset();

    }


    deleteProducto(elemento){
      if(elemento.name === "delete"){
        elemento.parentElement.parentElement.parentElement.remove();
        this.showMensaje("¡Producto eliminado!", "info");
      }

    }

    showMensaje(mensaje, cssClass){
      const div= document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(mensaje));

      const container= document.querySelector(".container");
      const app= document.querySelector("#app");
        container.insertBefore(div, app);
          setTimeout(function(){
            document.querySelector(".alert").remove();
            },2000)

    }
}


export default UI;