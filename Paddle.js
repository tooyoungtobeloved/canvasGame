class Paddle extends BaseItem {
  constructor(img) {
    super(img)
    this.x = 200;
    this.y = 350;
    this.speed = 5
  }
  collision(ball) {
    if ((ball.x + 50 > this.x && ball.x + 50 < this.x + 150) && (ball.y + 50 > this.y && ball.y + 50 < this
      .y + 20)) {
      console.log('collsion');
      ball.speedY = -ball.speedY
    }
  }
  moveLeft() {
    if (this.x > 0) this.x -= this.speed
  }
  moveRight() {
    if (this.x + 150 + this.speed < game.width) this.x += this.speed
  }
}