import { Injectable } from '@angular/core';

interface Country {
  name: string;
  value: number;
}

interface multi {
  name: string;
  series: Series[]

}

interface Series {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private data: Country[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  private multi: multi[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ];

  get countryData(){
    return this.data;
  }

  get multiData(){
    return this.multi
  }

  randomData(){
    this.data = [
      {
        "name": "Germany",
        "value": Math.random() * 1000000
      },
      {
        "name": "USA",
        "value": Math.random() * 1000000
      },
      {
        "name": "France",
        "value": Math.random() * 1000000
      }
    ];
  }

  constructor() { }
}
