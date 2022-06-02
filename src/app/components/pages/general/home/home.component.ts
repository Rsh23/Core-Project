import { Component, OnInit } from '@angular/core';
import { LoginI } from '../../../../modelos/login/login.interface';
import { ResponseI } from '../../../../modelos/login/response.interface';
import { DataService } from '../../../../services/data.service';
import { ChartsService } from '../../../../services/charts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( private ChartsService: ChartsService ) {
    
  }





  // options

  // Grafico 2
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  get multi(){
    return this.ChartsService.multiData
  }


  // Grafico 1
  view: [number, number] = [700, 400];

  get single(){
    return this.ChartsService.countryData;
  }


  onRandomData(){
    this.ChartsService.randomData(); 
  }

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  

  ngOnInit(): void {
  }
  
}
