/**
 * Created by shamsiev on 13.10.2017.
 */

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;


export default class Engine {

    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    render(options: { brickXPosition: number; brickYPosition: number; brickSize: number }) {
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.ctx.beginPath();
        const x = options.brickXPosition - options.brickSize / 2;
        const y = CANVAS_HEIGHT - (options.brickYPosition +  options.brickSize / 2);
        this.ctx.rect(x, y, options.brickSize, options.brickSize);
        this.ctx.fill();
    }
}