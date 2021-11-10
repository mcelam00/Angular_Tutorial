import { Component } from '@angular/core';

import { products } from '../products'; //IMPORTAMOS EL ARRAY products


//INDICA QUE LA CLASE ES UN COMPONENTE JUNTO A METADATOS DEL COMPONENTE COMO SU SELECTOR PLANTILLAS Y ESTILOS.
@Component({
  selector: 'app-product-list', //identifica el componente. Por convenio, se nombran como app-nombre de la componente
  templateUrl: './product-list.component.html', //estos son la ruta referencia al HTML y al CSS
  styleUrls: ['./product-list.component.css']
})


//INDICA LA DEFINICIÓN DE LA CLASE
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!'); //cuando se llame al método share al picar el botón vengo aquí
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/