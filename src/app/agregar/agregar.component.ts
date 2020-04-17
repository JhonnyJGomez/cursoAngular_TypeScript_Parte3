import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formularioCreado:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado= this.formBuilder.group({
      nombre: ['Nombre', Validators.required],
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      contrasena: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])] 
    })
  }
}
