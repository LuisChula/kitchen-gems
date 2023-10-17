import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carousel',
  templateUrl: './img-carousel.component.html',
  styleUrls: ['./img-carousel.component.css']
})
export class ImgCarouselComponent implements OnInit {

  imgs: Array<string> = new Array();
  imgSelected: number = 0;
  
  allImgs: Array<string> = new Array();
  imgIndex: number = 0;
  start: number = 0;
  end: number = 3;

  showLeft: boolean = true;
  showRight: boolean = true;

  ngOnInit(): void {
    this.setAllImgs();
    this.setImgs(this.start, this.end);
  }

  select(index: number) {
    this.imgSelected = index;
    this.imgIndex = this.start + index;
  }

  setAllImgs() {
    this.allImgs = ["https://imgmedia.lbb.in/media/2020/06/5ee6ff35fbf0fe7a8f08fbce_1592196917352.jpg", "https://imgmedia.lbb.in/media/2020/06/5ee6ff35fbf0fe7a8f08fbce_1592196917352.jpg", "https://imgmedia.lbb.in/media/2020/06/5ee6ff35fbf0fe7a8f08fbce_1592196917352.jpg", "https://imgmedia.lbb.in/media/2020/06/5ee6ff35fbf0fe7a8f08fbce_1592196917352.jpg", "https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-cute-shit-clipart-with-happy-face-png-image_6107578.png"];

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
    this.imgSelected = this.imgSelected+1 > 3 ? 3 : this.imgSelected+1;
  }

  previous() {
    this.imgIndex--;
    if (this.imgIndex < this.start) {
      this.start = this.imgIndex;
      this.end = this.start + 3;
      this.setImgs(this.start, this.end);
    }
    this.imgSelected = this.imgSelected-1 < 0 ? 0 : this.imgSelected-1;
  }

  checkArrows() {
    this.showRight = this.imgIndex == this.allImgs.length-1 ? false : true;
    this.showLeft = this.imgIndex == 0 ? false : true;
  }

}
