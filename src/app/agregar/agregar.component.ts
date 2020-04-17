import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuarios{
  nombre:string,
  correo: string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formularioCreado:FormGroup;
  usuario:Array<Usuarios> = new Array<Usuarios>();

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

  agregar(){
    this.usuario.push(this.formularioCreado.value as Usuarios)
    this.formularioCreado.reset()
  }
}
