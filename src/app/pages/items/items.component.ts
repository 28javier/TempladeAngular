import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescriptiosI } from 'src/app/interfaces/infoProductoDescrition.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto: ProductoDescriptiosI;
  productoId: string;

  constructor(private route: ActivatedRoute,
              private ps:ProductosService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametros => {
        // console.log(parametros['id']);
        this.ps.productoId(parametros['id']).subscribe(
          (productos: ProductoDescriptiosI) => {
            this.productoId = parametros['id'];
            // console.log(productos);
            this.producto = productos;
          })
      });
  }

}
