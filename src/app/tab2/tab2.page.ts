import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';
import { DataService } from '../services/data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  searchText = '';
  items: any[] = [];
  filteredList: any[] = [];
  subs = [];

  constructor(private dataService: DataService, 
    private modal: ModalController, 
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    this.subs.push(this.dataService.getSome(1000)
      .pipe(take(1))
      .subscribe(pokeData => {
        this.items = pokeData['results'];
        this.items.sort((a, b) => a.name > b.name ? 1 : -1);
        this.filteredList = [...this.items];
        loading.dismiss();
      }));
      console.log('Tab2Page initialized');
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    console.log('Tab2Page destroyed');
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
