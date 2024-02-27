import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


interface registroForm{
  names: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers:[],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {

  hide = true;

  formBuilder = inject(FormBuilder);

  form: FormGroup<registroForm> = this.formBuilder.group({
    names: this.formBuilder.control('',{
      validators: Validators.required,
      nonNullable: true,
    }),
    lastName: this.formBuilder.control('',{
      validators: Validators.required,
      nonNullable: true,
    }),
    email: this.formBuilder.control('',{
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('',{
      validators: Validators.required,
      nonNullable: true,
    }),
    });
  
    signUp(): void{
      if (this.form.invalid) return;
      console.log(this.form.value);
    }
}
