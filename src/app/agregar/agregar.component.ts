import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuarios{
  nombre:string,
  correo: string,
  contrasena:string
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  formularioCreado:FormGroup;
  usuario:Array<Usuarios> = new Array<Usuarios>();
  esNuevo:Boolean = true;
  posicion:number

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

  editarUsuario(posicion:number){
    this.formularioCreado.setValue({
      nombre: this.usuario[posicion].nombre,
      correo: this.usuario[posicion].correo,
      contrasena: this.usuario[posicion].contrasena
    })
    this.esNuevo = false
    this.posicion = posicion
  }

  editar(){
    this.usuario[this.posicion].nombre = this.formularioCreado.value.nombre
    this.usuario[this.posicion].correo = this.formularioCreado.value.correo 
    this.usuario[this.posicion].contrasena = this.formularioCreado.value.contrasena
    this.posicion = -1
    this.esNuevo = true
    this.formularioCreado.reset()   
  }
}
