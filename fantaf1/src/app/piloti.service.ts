import { Injectable } from '@angular/core';
import { StatsPiloti } from './stats-piloti';



@Injectable({
  providedIn: 'root'
})
export class PilotiService {

  StatsPilotiList: StatsPiloti[] = [
    {
      id: 0,
      name: 'Max Verstappen',
      money: 30,
      state: 'IL',
      photo: `/assets/max.avif`,
      locali: 5,
      metri: 45,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Sergio Perez',
      money: 10,
      state: 'CA',
      photo: `/assets/perez.avif`,
      locali: 6,
      metri: 123,
      wifi: false,
      laundry: true,
      
    },
    {
      id: 2,
      name: 'Charles Leclerc',
      money: 15,
      state: 'AK',
      photo: `/assets/leclerc.avif`,
      locali: 4,
      metri: 177,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Carlos Sainz',
      money: 15,
      state: 'IL',
      photo: `/assets/sainz.avif`,
      locali: 1,
      metri: 89,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Lewis Hamilton',
      money: 15,
      state: 'IN',
      photo: `/assets/hamilton.avif`,
      locali: 8,
      metri: 11,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'George Russell',
      money: 15,
      state: 'CA',
      photo: `/assets/russel.avif`,
      locali: 5,
      metri: 198,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Lando Norris',
      money: 15,
      state: 'CA',
      photo: `/assets/norris.avif`,
      locali: 2,
      metri: 32,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Oscar Piastri',
      money: 15,
      state: 'CA',
      photo: `/assets/piastri.avif`,
      locali: 7,
      metri: 150,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Fernando Alonso',
      money: 15,
      state: 'CA',
      photo: `/assets/alonso.avif`,
      locali: 9,
      metri: 72,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Lance Stroll',
      money: 15,
      state: 'OR',
      photo: `/assets/stroll.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 10,
      name: 'Yuki Tsunoda',
      money: 15,
      state: 'OR',
      photo: `/assets/tsunoda.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 11,
      name: 'Daniel Ricciardo',
      money: 15,
      state: 'OR',
      photo: `/assets/ricciardo.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 12,
      name: 'Valtteri Bottas',
      money: 15,
      state: 'OR',
      photo: `/assets/bottas.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 13,
      name: 'Guanyu Zhou',
      money: 15,
      state: 'OR',
      photo: `/assets/zhou.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 14,
      name: 'Kevin Magnussen',
      money: 15,
      state: 'OR',
      photo: `/assets/kmag.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 15,
      name: 'Nico Hülkenberg',
      money: 15,
      state: 'OR',
      photo: `/assets/hulk.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 16,
      name: 'Esteban Ocon',
      money: 15,
      state: 'OR',
      photo: `/assets/ocon.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 17,
      name: 'Pierre Gasly',
      money: 15,
      state: 'OR',
      photo: `/assets/gasly.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 18,
      name: 'Alexander Albon',
      money: 15,
      state: 'OR',
      photo: `/assets/albon.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    },
    {
      id: 19,
      name: 'Logan Sargeant',
      money: 15,
      state: 'OR',
      photo: `/assets/sargeant.avif`,
      locali: 3,
      metri: 75,
      wifi: true,
      laundry: true
    }

  ];

  getPiloti(): StatsPiloti[] {
    return this.StatsPilotiList;
  }

  getPilotaById(id: number): StatsPiloti | undefined {
    return this.StatsPilotiList.find(housingLocation => housingLocation.id === id);
  }
}