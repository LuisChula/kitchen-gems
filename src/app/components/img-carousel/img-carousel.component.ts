import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.css']
})
export class ImgCarouselComponent implements OnChanges {

  imgs: Array<string> = new Array();
  imgSelected: number = 0;

  @Input() allImgs: Array<string> = new Array();
  imgIndex: number = 0;
  start: number = 0;
  end: number = 3;

  showLeft: boolean = true;
  showRight: boolean = true;

  ngOnChanges(): void {
    if (this.allImgs != null) {
      this.end = this.allImgs.length <= 3 ? this.allImgs.length : 3;
      this.setImgs(this.start, this.end);
    }
  }

  select(index: number) {
    this.imgSelected = index;
    this.imgIndex = this.start + index;
  }

  setImgs(start: number, end: number) {
    this.imgs = [];
    for (let index = start; index <= end; index++) {
      this.imgs.push(this.allImgs[index])
    }
    this.checkArrows();
  }

  next() {
    this.imgIndex++;
    if (this.imgIndex > this.end) {
      this.end = this.imgIndex;
      this.start = this.end - 3;
      this.setImgs(this.start, this.end);
    }
    this.imgSelected = this.imgSelected + 1 > 3 ? 3 : this.imgSelected + 1;
  }

  previous() {
    this.imgIndex--;
    if (this.imgIndex < this.start) {
      this.start = this.imgIndex;
      this.end = this.start + 3;
      this.setImgs(this.start, this.end);
    }
    this.imgSelected = this.imgSelected - 1 < 0 ? 0 : this.imgSelected - 1;
  }

  checkArrows() {
    this.showRight = this.imgIndex == this.allImgs.length - 1 ? false : true;
    this.showLeft = this.imgIndex == 0 ? false : true;
  }

}
