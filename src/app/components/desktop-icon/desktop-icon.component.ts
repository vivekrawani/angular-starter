import { Component, Input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/desktop-icon";
@Component({
  selector: "app-desktop-icon",
  standalone: true,
  imports: [],
  templateUrl: "./desktop-icon.component.html",
  styleUrl: "./desktop-icon.component.css",
})
export class DesktopIconComponent {
  @Input() iconDetails!: DesktopIcon;
  @Input() showFileName !: Boolean;
  onDoubleClick() {
    alert("window");
  }
}
