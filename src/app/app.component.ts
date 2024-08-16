import { Component, output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DockComponent } from "./components/dock/dock.component";
import { DesktopIconComponent } from "./components/desktop-icon/desktop-icon.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DockComponent, DesktopIconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Angular";
  desktopIconsList = [
    {
      fileName: "About me",
      imgSrc: "./profile.svg",
      // imgSrc: "https://avatars.githubusercontent.com/u/93576226?v=4",
    },
    {
      fileName: "Education",
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/education-e-learning/64/EDUCATION-1024.png",
    },
    {
      fileName: "Tech",
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/databases-and-cloud-technology/48/24-512.png",
    },
    {
      fileName: "Projects",
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/luchesa-part-3/128/Programming-1024.png",
    },
  ];
}
