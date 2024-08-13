import { Component, output } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DockComponent } from "./components/dock/dock.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DockComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Angular";
}
