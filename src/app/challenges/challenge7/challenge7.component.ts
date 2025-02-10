import { Component, OnInit } from '@angular/core';
import { faUser as userIcon, faBell as notificationsIcon,
  faTachometerAlt as dashboardIcon, faComments as messagesIcon, faCog as settingsIcon  }
from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenge7',
  templateUrl: './challenge7.component.html',
  styleUrls: ['./challenge7.component.scss']
})
export class Challenge7Component implements OnInit {
  sideNavToggled: boolean = false;
  readonly ICONS = {
    user: userIcon,
    notifications: notificationsIcon,
    dashboard: dashboardIcon,
    messages: messagesIcon,
    settings: settingsIcon
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sideNavToggled = !this.sideNavToggled;
  }
}
