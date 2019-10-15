export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }

  animate(ctx){
    this.drawBackground(ctx);
  }

  drawBackground(ctx) {
    ctx.fillStyle = "midnightblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }
}