import { Component, Input, OnInit } from '@angular/core';
import { exercise } from 'src/app/shared.service';

@Component({
  selector: 'app-view-exercise',
  templateUrl: './view-exercise.component.html',
  styleUrls: ['./view-exercise.component.scss']
})
export class ViewExerciseComponent implements OnInit {
  @Input() data!: exercise | undefined;
  @Input() grid: boolean = false;
  DJANGO_SERVER = 'http://127.0.0.1:8000';
  imgPath: string = "";
  resolution: boolean = this.data?.resol == null || this.data?.resol == '' ? false : true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.resolution);
    console.log(this.data);
  }

  ngOnChanges(): void {
    if (this.data?.img == null) {
      this.imgPath = "";
    } else {
      this.imgPath = this.DJANGO_SERVER + "/../.." + this.data?.img;
    }

    this.resolution = this.data?.resol == null || this.data?.resol == '' ? false : true;
  }
}