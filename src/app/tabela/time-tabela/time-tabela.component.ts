import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-tabela',
  templateUrl: './time-tabela.component.html',
  styleUrls: ['./time-tabela.component.css']
})
export class TimeTabelaComponent implements OnInit {

  @Input() time: [];
  
  constructor() { }

  ngOnInit() {
  }

}
