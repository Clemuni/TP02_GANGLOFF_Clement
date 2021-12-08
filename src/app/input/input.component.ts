import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() isValid: boolean = true;

  @Output() valueChangeEventEmitter = new EventEmitter<string>();

  constructor() {}

  handleInputChange(value: any) {
    this.valueChangeEventEmitter.emit(value.target.value);
  }

  ngOnInit(): void {}
}
