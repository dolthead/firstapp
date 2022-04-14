import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people.service';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  searchText = '';
  items: Observable<any>;

  constructor(private peopleService: PeopleService, private modal: ModalController) {}

  ngOnInit() {
    this.items = this.peopleService.getPeople(20);
  }

  find(person: any) {
    return this.searchText.trim() === ''
      || `${ person.first_name } ${ person.last_name } ${ person.address.state }`.toLowerCase()
      .includes(this.searchText.toLowerCase());
  }

  presentAbout() {
    this.modal.create({
      component: AboutPage
    }).then(modal => modal.present());
  }
}
