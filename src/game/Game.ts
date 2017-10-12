/**
 * Created by shamsiev on 12.10.2017.
 */

export class Game {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx
    }

    start() {
        console.log("Game Started!");
        this.ctx.beginPath();
        this.ctx.rect(100, 100, 100, 100);
        this.ctx.fill();
    }

    multiply(n1: number, n2: number): number {
        return n1 * n2;
    }
}