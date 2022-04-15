import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  badgeCount = 3;
  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
  showChip = true;

  constructor(private toastController: ToastController) {}

  async setBadgeCount(count?: number) {
    if (typeof count === 'number') {
      this.badgeCount = count < 0 ? 0 : count;
    }
    // this.badge.set(this.badgeCount);
    if (this.badgeCount === 0) {
      // this.badge.clear();
    }

    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);

    const toast = await this.toastController.create({
      message: 'Badge count updated.',
      duration: 2000,
      color: 'success',
      position: 'middle'
    });
    toast.present();
  }

  clearBadgeCount() {
    this.badgeCount = 0;
    this.setBadgeCount();
  }
}
