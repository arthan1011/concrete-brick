/**
 * Created by shamsiev on 12.10.2017.
 */

import Engine from "./Engine";

const requestFrame = (() => {
    return window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
})();

let y = 100;
let x = 100;
let endX = 200;

export default class Game {
    private ctx: CanvasRenderingContext2D;
    private engine: Engine;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.engine = new Engine(ctx)
    }

    start() {
        console.log("Game Started!");

        requestFrame(() => {
            this.mainLoop(performance.now())
        });
    }

    private mainLoop(time: number) {
        this.engine.render({
            brickXPosition: 75,
            brickYPosition: 75,
            brickSize: 100
        });


        this.ctx.beginPath();
        this.ctx.rect(x, y, 100, 100);
        this.ctx.fill();

        x += 1;

        if (x < endX) {
            requestFrame(() => {
                this.mainLoop((performance.now()))
            });
        }
    }


    multiply(n1: number, n2: number): number {
        return n1 * n2;
    }
}