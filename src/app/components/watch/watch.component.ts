import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-watch",
  standalone: true,
  imports: [],
  template: ` <p>{{ formatedTime }}</p>`,
  styleUrl: "./watch.component.css",
})
export class WatchComponent implements OnInit {
  currentTime: Date = new Date();
  formatedTime: string = "";
  dayMap = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  monthMap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  ngOnInit(): void {
    timer(0, 60 * 1000)
      .pipe(map(() => new Date()))
      .subscribe((time) => {
        this.currentTime = time;
        const day = this.dayMap[this.currentTime.getDay()];
        const month = this.monthMap[this.currentTime.getMonth()];
        const date = this.currentTime.getDate();
        const hour = this.currentTime.getHours();
        const min =
          this.currentTime.getMinutes() > 9
            ? this.currentTime.getMinutes()
            : `0${this.currentTime.getMinutes()}`;
        const post = hour >= 12 ? "PM" : "AM";
        this.formatedTime = `${day} ${month}${date}   ${hour}:${min} ${post}`;
      });
  }
}
