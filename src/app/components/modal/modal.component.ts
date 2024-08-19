import {
  Component,
  Output,
  EventEmitter,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
} from "@angular/core";
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

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private initialX = 0;
  private initialY = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  onMouseDown(event: MouseEvent): void {
    // Make sure the click is on the border for resizing, otherwise enable dragging
    const element = this.el.nativeElement.querySelector(
      "#movable-resizable-div",
    );
    const rect = element.getBoundingClientRect();
    if (
      event.target === element &&
      event.offsetX > rect.width - 10 &&
      event.offsetY > rect.height - 10
    ) {
      return;
    }

    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.initialX = element.offsetLeft;
    this.initialY = element.offsetTop;

    this.renderer.listen("document", "mousemove", this.onMouseMove.bind(this));
    this.renderer.listen("document", "mouseup", this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;

    const element = this.el.nativeElement.querySelector(
      "#movable-resizable-div",
    );
    element.style.left = `${this.initialX + deltaX}px`;
    element.style.top = `${this.initialY + deltaY}px`;
  }

  onMouseUp(): void {
    this.isDragging = false;
  }
}
