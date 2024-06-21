import { Injectable } from '@angular/core';
import { StatsPiloti } from './stats-piloti';
import { General } from './general';


@Injectable({
  providedIn: 'root'
})
export class PilotiService {

  StatsPilotiList: StatsPiloti[] = [
    {
      id: 0,
      name: 'Max Verstappen',
      money: 30,
      photo: `/assets/max.avif`,
      powerups: ['Turbo Boost', 'Nitro', 'Scudo Difensivo']
    },
    {
      id: 1,
      name: 'Sergio Perez',
      money: 10,
      photo: `/assets/perez.avif`,
      powerups: ['Nuvola di Fumo', 'Acceleratore', 'Nitro']
    },
    {
      id: 2,
      name: 'Charles Leclerc',
      money: 15,
      photo: `/assets/leclerc.avif`,
      powerups: ['Scudo Difensivo', 'Turbo Boost', 'Nitro']
    },
    {
      id: 3,
      name: 'Carlos Sainz',
      money: 15,
      photo: `/assets/sainz.avif`,
      powerups: ['Acceleratore', 'Nitro', 'Scudo Difensivo']
    },
    {
      id: 4,
      name: 'Lewis Hamilton',
      money: 15,
      photo: `/assets/hamilton.avif`,
      powerups: ['Nitro', 'Scudo Difensivo', 'Turbo Boost']
    },
    {
      id: 5,
      name: 'George Russell',
      money: 15,
      photo: `/assets/russel.avif`,
      powerups: ['Turbo Boost', 'Acceleratore', 'Nuvola di Fumo']
    },
    {
      id: 6,
      name: 'Lando Norris',
      money: 15,
      photo: `/assets/norris.avif`,
      powerups: ['Scudo Difensivo', 'Turbo Boost', 'Nitro']
    },
    {
      id: 7,
      name: 'Oscar Piastri',
      money: 15,
      photo: `/assets/piastri.avif`,
      powerups: ['Nuvola di Fumo', 'Nitro', 'Acceleratore']
    },
    {
      id: 8,
      name: 'Fernando Alonso',
      money: 15,
      photo: `/assets/alonso.avif`,
      powerups: ['Nitro', 'Scudo Difensivo', 'Turbo Boost']
    },
    {
      id: 9,
      name: 'Lance Stroll',
      money: 15,
      photo: `/assets/stroll.avif`,
      powerups: ['Acceleratore', 'Turbo Boost', 'Nitro']
    },
    {
      id: 10,
      name: 'Yuki Tsunoda',
      money: 15,
      photo: `/assets/tsunoda.avif`,
      powerups: ['Turbo Boost', 'Nitro', 'Nuvola di Fumo']
    },
    {
      id: 11,
      name: 'Daniel Ricciardo',
      money: 15,
      photo: `/assets/ricciardo.avif`,
      powerups: ['Nuvola di Fumo', 'Scudo Difensivo', 'Acceleratore']
    },
    {
      id: 12,
      name: 'Valtteri Bottas',
      money: 15,
      photo: `/assets/bottas.avif`,
      powerups: ['Nitro', 'Turbo Boost', 'Scudo Difensivo']
    },
    {
      id: 13,
      name: 'Guanyu Zhou',
      money: 15,
      photo: `/assets/zhou.avif`,
      powerups: ['Turbo Boost', 'Acceleratore', 'Nuvola di Fumo']
    },
    {
      id: 14,
      name: 'Kevin Magnussen',
      money: 15,
      photo: `/assets/kmag.avif`,
      powerups: ['Scudo Difensivo', 'Nitro', 'Turbo Boost']
    },
    {
      id: 15,
      name: 'Nico Hülkenberg',
      money: 15,
      photo: `/assets/hulk.avif`,
      powerups: ['Nitro', 'Nuvola di Fumo', 'Acceleratore']
    },
    {
      id: 16,
      name: 'Esteban Ocon',
      money: 15,
      photo: `/assets/ocon.avif`,
      powerups: ['Nuvola di Fumo', 'Scudo Difensivo', 'Turbo Boost']
    },
    {
      id: 17,
      name: 'Pierre Gasly',
      money: 15,
      photo: `/assets/gasly.avif`,
      powerups: ['Acceleratore', 'Turbo Boost', 'Nitro']
    },
    {
      id: 18,
      name: 'Alexander Albon',
      money: 15,
      photo: `/assets/albon.avif`,
      powerups: ['Turbo Boost', 'Nitro', 'Scudo Difensivo']
    },
    {
      id: 19,
      name: 'Logan Sargeant',
      money: 15,
      photo: `/assets/sargeant.avif`,
      powerups: ['Nitro', 'Scudo Difensivo', 'Acceleratore']
    }
];

  getPiloti(): StatsPiloti[] {
    return this.StatsPilotiList;
  }

  getPilotaById(id: number): StatsPiloti | undefined {
    return this.StatsPilotiList.find(StatsPiloti => StatsPiloti.id === id);
  }

  GeneralList: General[] = [
    {
      id: 20,
      name: '3 Yellow Flag in una gara',
      money: 15
    },
    {
      id: 21,
      name: 'Per ogni Red Flag',
      money: 15
    },
    {
      id: 22,
      name: 'Redbull uno due',
      money: 15
    },
    {
      id: 23,
      name: 'Per ogni problema nei pit',
      money: 15
    },
    {
      id: 24,
      name: 'Logan Sargeant',
      money: 15
    }

  ];
  getGeneral(): General[] {
    return this.GeneralList;
  }

  getGeneralById(id: number): General | undefined {
    return this.GeneralList.find(General => General.id === id);
  }
}