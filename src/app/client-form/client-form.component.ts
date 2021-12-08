import { Component, OnInit } from '@angular/core';

interface FormField {
  value: string;
  isValid: boolean;
}

interface User {
  firstname: FormField;
  lastname: FormField;
  email: FormField;
  address: FormField;
  postalCode: FormField;
  city: FormField;
  phoneNumber: FormField;
  civility: FormField;
  login: FormField;
  password: FormField;
  country: FormField;
}

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  user: User = {
    firstname: {
      value: '',
      isValid: true,
    },
    lastname: {
      value: '',
      isValid: true,
    },
    email: {
      value: '',
      isValid: true,
    },
    address: {
      value: '',
      isValid: true,
    },
    postalCode: {
      value: '',
      isValid: true,
    },
    city: {
      value: '',
      isValid: true,
    },
    phoneNumber: {
      value: '',
      isValid: true,
    },
    civility: {
      value: '',
      isValid: true,
    },
    login: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    country: {
      value: '',
      isValid: true,
    },
  };

  constructor() {}

  submit(): void {
    console.log(this.user);
  }

  changeValue(value: string, accessor: string): void {
    console.log({ accessor, value });
    (this.user as any)[accessor].value = value;
  }

  ngOnInit(): void {}
}
