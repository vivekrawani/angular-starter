import { Component, Output, EventEmitter, Input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/desktop-icon";
import { EducationComponent } from "../education/education.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { TechComponent } from "../tech/tech.component";
import { ProjectsComponent } from "../projects/projects.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { NgComponentOutlet } from "@angular/common";
// import { MovableResizableComponent } from "../movable-resizable/movable-resizable.component";
@Component({
  selector: "app-modal",
  standalone: true,
  imports: [
    AboutMeComponent,
    TechComponent,
    ProjectsComponent,
    NotFoundComponent,
    EducationComponent,
    NgComponentOutlet,
  ],
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.css",
})
export class ModalComponent {
  @Input() iconDetails!: DesktopIcon;
  @Output() modalCloseEvent = new EventEmitter<any>();

  closeModal() {
    this.modalCloseEvent.emit("close modal");
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
