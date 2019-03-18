import { Component, OnInit } from '@angular/core';

import { TimesService } from './times.service';

// import { tabela as db } from '../../db'

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  tabela: any;

  tabela1 = [
    {
      team: 'Manchester City',
      played: 10,
      win: 8,
      draw: 0,
      loss: 2,
      goalsFor: 29,
      goalsAgainst: 12,
      points: 24
    },
    {
      team: 'Arsenal',
      played: 10,
      win: 7,
      draw: 2,
      loss: 1,
      goalsFor: 16,
      goalsAgainst: 6,
      points: 23
    },
    {
      team: 'Tottenham',
      played: 10,
      win: 5,
      draw: 4,
      loss: 1,
      goalsFor: 18,
      goalsAgainst: 7,
      points: 19
    },
    {
      team: 'Leicester',
      played: 10,
      win: 5,
      draw: 4,
      loss: 1,
      goalsFor: 16,
      goalsAgainst: 13,
      points: 19
    }
  ];

  constructor(private timesService: TimesService) { }

  ngOnInit() {
    this.tabela = this.timesService.times();
  }

}
