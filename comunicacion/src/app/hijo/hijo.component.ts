import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input()
  public title: string;

  public visible = true;
  @Input()
  public visibleP: boolean;

  @Output()
  public evento =  new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.visible = !this.visible;
    this.evento.emit(this.visible);
  }

}
