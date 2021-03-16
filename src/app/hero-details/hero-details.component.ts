import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-details",
  templateUrl: "./hero-details/hero-details.component.html",
  styleUrls: ["./hero-details/hero-details.component.css"]
})

export class HeroDetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  @Input() hero?: Hero;
}
