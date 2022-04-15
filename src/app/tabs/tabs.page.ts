import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  tabCount = 3;

  constructor() {}

  ngOnInit() {
    window.addEventListener('badgeCount', (e: Event) =>  {
      this.tabCount = e['detail'];
    });
  }

}
