import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage {
  name: string;
  pokemon: any;

  avatarButtonStyle = {
    height: '60vw',
    width: '60vw',
    'max-height': '200px',
    'max-width': '200px',
    margin: '0 auto',
    'background-color': 'white',
    'border-radius': '50%',
    'box-shadow': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
  };

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  async ionViewWillEnter() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    this.name = this.route.snapshot.paramMap.get('name');
    this.dataService.getOne(this.name)
      .pipe(take(1))
      .subscribe(pokeData => this.pokemon = pokeData);
  }

}
