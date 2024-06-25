import { Component, Input, OnInit } from "@angular/core";
import { General } from "../../api/models/general";

@Component({
  selector: "app-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.css"],
})
export class GeneralComponent implements OnInit {
  @Input() general!: General;

  ngOnInit(): void {}
}
