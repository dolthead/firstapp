import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { DataService } from '../services/data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchText = '';
  items: any[] = [];
  filteredList: any[] = [];

  constructor(private dataService: DataService, private modal: ModalController) {}

  ngOnInit() {
    this.dataService.getSome(1000)
      .pipe(take(1))
      .subscribe(pokeData => {
        this.items = pokeData['results'];
        this.items.sort((a, b) => a.name > b.name ? 1 : -1);
        this.filteredList = [...this.items];
      });
  }

  filterItems(evt) {
    const searchTerm = evt.srcElement.value;
    this.filteredList = searchTerm.trim()
      ? this.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) 
      : [...this.items];
  }

  presentAbout() {
    this.modal.create({
      component: AboutPage
    }).then(modal => modal.present());
  }
}
