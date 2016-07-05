import {Component, ViewContainerRef} from '@angular/core';

import {
  InputText,
  Dialog,
  Button
} from 'primeng/primeng';

import {GeneratorService} from '../generator/generator.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/home/home.component.html',
  styleUrls: ['./app/home/home.component.css'],
  directives: [
    InputText,
    Dialog,
    Button
  ],
  providers: [
    GeneratorService
  ]
})

export class Home {
  public viewContainerRef: ViewContainerRef;
  public generatorService: GeneratorService;
  public displayDialog: boolean = false;
  public resizeDialog: boolean = false;
  public dragDialog: boolean = false;
  public effect: string;
  public passwordAmount: number;
  public letterAmount: number;
  public numberAmount: number;
  public symbolAmount: number;

  constructor (
      viewContainerRef: ViewContainerRef,
      generatorService: GeneratorService) {
    this.viewContainerRef = viewContainerRef;
    this.generatorService = generatorService;
  }

  public showDialog = () => {
    this.displayDialog = true;
    this.effect = 'fade';
  }

  public onSubmit = () => {
    if (this.passwordAmount < 1) {
      this.passwordAmount = 1;
    }

    if (this.letterAmount < 1) {
      this.letterAmount = 32;
    }

    if (this.numberAmount < 1) {
      this.numberAmount = 32;
    }

    if (this.symbolAmount < 1) {
      this.symbolAmount = 0;
    }

    this.generatorService.generate(this.passwordAmount, this.letterAmount, this.numberAmount, this.symbolAmount);
  }
}
