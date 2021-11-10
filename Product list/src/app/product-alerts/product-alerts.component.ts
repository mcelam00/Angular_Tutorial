import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //Importamos Input para recibir del padre y Output y EventEmitter para emitir eventos al padre
import { Product } from '../products';//Importamos también la interfaz Product de products.ts




@Component({ 
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})




export class ProductAlertsComponent implements OnInit {

  //Defino una propiedad que se llame product con un @Input() que indica que el valor viene del padre 
  @Input() product! : Product; //el product de la P mayúscula es el tipo (de la interfaz que importo arriba). El de la minúscula es el producto que la componente recibe de input de la lista de productos (de la componente padre)
  @Output() notify = new EventEmitter(); //permite a la componente emitir un envento cuando el valore de la propiedad cambie.

  constructor() { }

  ngOnInit(): void {
  }

}
