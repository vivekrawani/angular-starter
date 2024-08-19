import { Component, Input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/desktop-icon";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matClose } from "@ng-icons/material-icons/baseline";
import { ModalComponent } from "../modal/modal.component";
@Component({
  selector: "app-desktop-icon",
  standalone: true,
  imports: [NgIconComponent, ModalComponent],
  templateUrl: "./desktop-icon.component.html",
  styleUrl: "./desktop-icon.component.css",
  viewProviders: [provideIcons({ matClose })],
})
export class DesktopIconComponent {
  @Input() iconDetails!: DesktopIcon;
  @Input() showFileName!: Boolean;
  isModalOpen = false;
  onDoubleClick() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
