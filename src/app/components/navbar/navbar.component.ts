import { Component } from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matAppleSharp, matSearchSharp } from "@ng-icons/material-icons/sharp";
import { ionSearch, ionWifi, ionBatteryCharging } from "@ng-icons/ionicons";
import { WatchComponent } from "../watch/watch.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [NgIconComponent, WatchComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
  viewProviders: [
    provideIcons({ matAppleSharp, ionSearch, ionWifi, ionBatteryCharging }),
  ],
})
export class NavbarComponent {
  navleftItems = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];
  time = new Date();
}
