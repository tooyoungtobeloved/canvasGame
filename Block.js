// let game = new Game();
class Block extends BaseItem {
  constructor(img, position) {
    super(img);
    this.x = position.x;
    this.y = position.y;
    this.alive = true;
  }
  collision(ball) {
    if (
      ball.x > this.x + 20 &&
      ball.x + 20 < this.x + 150 &&
      ball.y + 50 > this.y &&
      ball.y + 50 < this.y + 20
    ) {
      console.log("collsion");
      this.alive = false;
      game.score += 1;
    }

    // ball.speedY = -ball.speedY
  }
}
