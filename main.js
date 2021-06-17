let log = console.log.bind(console);
let game = new Game();
let ball = new Ball(game, "ball");
let paddle = new Paddle("paddle");
// let block = new Block("block");

let images = {
  paddle: "paddle",
  block: "block",
  ball: "ball",
};
let promiseQuene = [];
(loadPromise = function() {
  let namesList = Object.keys(images);
  namesList.forEach((name, index) => {
    promiseQuene[index] = PromiseI(name);
    log(promiseQuene);
  });
})();
function PromiseI(name) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.src = name + ".png";
    image.onload = function () {
      resolve({ name, image });
    };
  });
}
// promiseQuene[0].then(res => {
//   console.log(res);
// })

window.addEventListener("keydown", function (e) {
  let k = e.key;
  game.keydowns[k] = true;
  if (k === " ") ball.fired = !ball.fired;
});
window.addEventListener("keyup", (e) => {
  let k = e.key;
  delete game.keydowns[k];
});

let blocks = [];
window.addEventListener("keydown", function (e) {
  let k = e.key;
  if ("123456789".includes(k)) {
    blocksPos = game.loadLevel(k);
    blocksPos.map((item) => {
      let block = new Block("block", item);
      log(block);
      blocks.push(block);
    });
  }
});

game.registerAction("a", function () {
  paddle.moveLeft();
});
game.registerAction("d", function () {
  paddle.moveRight();
});

game.registerAction("r", () => {
  location.reload();
});
function draw() {
  // ctx.clearRect(0, 0, 600, 600)
  game.clearRect();
  game.init();
  game.drawImage(ball);
  if (ball.fired) {
    ball.move();
  }
  game.drawImage(paddle);
  game.handleActions();
  paddle.collision(ball);
  game.collision(ball);
  // for (let i = 0; i <= 5; i++) {
  //   if (s.block[i].hasload)
  //     if (s.block[i].alive) {
  //       s.draw(s.block[i], s.block[i].x, s.block[i].y);
  //     }
  // }
  requestAnimationFrame(draw);
}
draw();
