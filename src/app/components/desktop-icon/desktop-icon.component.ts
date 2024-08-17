import { Component, Input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/desktop-icon";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matClose } from "@ng-icons/material-icons/baseline";
import { EducationComponent } from "../education/education.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { TechComponent } from "../tech/tech.component";
import { ProjectsComponent } from "../projects/projects.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { NgComponentOutlet } from "@angular/common";

@Component({
  selector: "app-desktop-icon",
  standalone: true,
  imports: [
    NgIconComponent,
    AboutMeComponent,
    TechComponent,
    ProjectsComponent,
    NotFoundComponent,
    EducationComponent,
    NgComponentOutlet,
  ],
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
  getComponent() {
    switch (this.iconDetails.fileName) {
      case "About me": {
        return AboutMeComponent;
        break;
      }
      case "Education": {
        return EducationComponent;
        break;
      }
      case "Tech": {
        return TechComponent;
        break;
      }
      case "Projects": {
        return ProjectsComponent;
        break;
      }
      default: {
        return NotFoundComponent;
        break;
      }
    }
  }
}
