import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss'],
})
export class SaisieComponent implements OnInit {
  name: string = 'Clément';
  firstButtonIsValid: Boolean;
  secondButtonIsValid: Boolean;

  constructor() {
    this.firstButtonIsValid = true;
    this.secondButtonIsValid = false;
  }

  handleFirstButtonClick(): void {
    this.firstButtonIsValid = false;
    this.secondButtonIsValid = true;
  }

  handleSecondButtonClick(): void {
    this.firstButtonIsValid = true;
    this.secondButtonIsValid = false;
  }

  getColor(): string {
    if (this.name === 'Clément') return 'green';
    return 'red';
  }

  ngOnInit(): void {}
}
