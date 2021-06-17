class Game {
  constructor() {
    let canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.width = canvas.getBoundingClientRect().width;
    this.height = canvas.getBoundingClientRect().height;
    this.score = 0;
    this.lives = 3;
    this.keydowns = {};
    this.actions = {};
    this.block = [];
  }
  drawImage(o) {
    if (o.hasload) {
      this.ctx.drawImage(o.img, o.x, o.y);
    }
  }
  draw() {}
  clearRect() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  init() {
    this.ctx.fillStyle = "royalblue";
    this.ctx.font = "20px bolder 黑体 ";
    this.ctx.textAlign = "right";
    this.ctx.textBaseline = "top";
    this.ctx.fillText("你的生命值：" + this.lives, 500, 0);
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("得分：" + this.score, 500, 22);
    // 初始化砖块
  }
  loadLevel(level){
    let blocksPos = levels[level - 1];
    console.log(level);
    return blocksPos
  }
  registerAction(s, callback) {
    this.actions[s] = callback.bind(this);
  }
  handleActions() {
    let keys = Object.keys(this.keydowns);
    if (keys.length == 0) return;
    keys.forEach((item) => {
      if (!this.actions[item]) return;
      this.actions[item]();
    });
  }
  collision(ball) {
    if (ball.x + 50 > this.width) {
      ball.x = -ball.x;
    }
  }
}
