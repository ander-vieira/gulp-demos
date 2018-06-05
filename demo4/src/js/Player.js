var accel = 300;
var terminal = 150;

class Player {
  constructor(canvas) {
    this.canvas = canvas;
    this.pos = {
      x: 0,
      y: 0
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.acc = {
      x: 0,
      y: 0
    };
  }

  render() {
    var ctx = this.canvas.getContext('2d');

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.pos.x, this.pos.y, 50, 50);
  }

  update(diff) {
    var friction = {
      x: -accel * this.vel.x / terminal,
      y: -accel * this.vel.y / terminal
    };
    this.vel.x += (this.acc.x + friction.x) * diff / 1000;
    this.vel.y += (this.acc.y + friction.y) * diff / 1000;

    this.pos.x += this.vel.x * diff / 1000;
    this.pos.y += this.vel.y * diff / 1000;

    this.render();
  }

  keypress(key, up) {
    if(!up) {
      if(key === 37) {
        this.acc.x = -accel;
      } else if(key === 38) {
        this.acc.y = -accel;
      } else if(key === 39) {
        this.acc.x = accel;
      } else if(key === 40) {
        this.acc.y = accel;
      }
    } else {
      if(key === 37 || key === 39) {
        this.acc.x = 0;
      } else if(key === 38 || key === 40) {
        this.acc.y = 0;
      }
    }
  }
}
