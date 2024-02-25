import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  showFiller = false;

  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

  constructor(
    public navigationService: NavigationService,
    private activatedRoute: ActivatedRoute) {
  }


  hideSidebars() {
    this.leftSidenav.toggle(false).then();
    this.rightSidenav.toggle(false).then();
  }

  // Function to toggle the left sidenav
  async toggleLeftSidenav() {
    await this.leftSidenav.toggle();
  }

  // Function to toggle the right sidenav
  async toggleRightSidenav() {
    await this.rightSidenav.toggle().then();
  }


}
