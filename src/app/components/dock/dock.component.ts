import { Component } from "@angular/core";
import { DesktopIconComponent } from "../desktop-icon/desktop-icon.component";
@Component({
  selector: "app-dock",
  standalone: true,
  imports: [DesktopIconComponent],
  templateUrl: "./dock.component.html",
  styleUrl: "./dock.component.css",
})
export class DockComponent {
  dockIconList = [
    {
      fileName: "LinkedIn",
      imgSrc:
        "https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png",
      href: "https://www.linkedin.com/in/vivek-rawani-70a856221",
    },
    {
      fileName: "Github",
      imgSrc: "https://pngimg.com/uploads/github/github_PNG40.png",
      href: "https://github.com/vivekrawani",
    },
    {
      fileName: "Leetcode",
      imgSrc:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/LeetCode_logo_black.png",
      href: "https://leetcode.com/u/atticus_lin",
    },
    {
      fileName: "Email me",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/8743/8743964.png",
      href: "mailto:atticus.lin.tech@gmail.com",
    },
  ];
}
