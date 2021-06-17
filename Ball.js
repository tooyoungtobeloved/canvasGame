class Ball extends BaseItem {
  constructor(game, img) {
    super(img)
    this.x = 110;
    this.y = 200;
    this.speedX = 5
    this.speedY = 5
    this.fired = false;
  }
  move() {
    if (this.x > game.width - 50 || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0) {
      this.speedY = -this.speedY
    }
    if (this.y > game.height - 50) {
      game.lives -= 1
      this.fired = false
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }
}