class BaseItem {
  constructor(imgPath) {
    this.hasload = false;
    this.loadImg(imgPath);
  }
  loadImg(imgPath) {
    let img = new Image();
    img.onload = () => {
      this.hasload = true
      this.img = img
    }
    img.src = imgPath + ".png"
  }
}