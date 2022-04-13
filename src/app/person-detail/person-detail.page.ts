import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage {
  id: number;
  person: Observable<any>;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  async ionViewWillEnter() {
    this.id = await this.route.snapshot.params.id;
    this.person = this.peopleService.getPerson(this.id);
  }

  getGoogleHref(address) {
    return `http://maps.google.com/maps?q=${ address.street_address }, ${ address.city }, ${ address.state } ${ address.zip_code }`;
  }

}
