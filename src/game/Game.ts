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

const SPEED = 20; // pixels/second

export default class Game {
    private ctx: CanvasRenderingContext2D;
    private engine: Engine;
    private direction: string;

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

    private _currentX = 75;

    private _currentY = 75;

    private mainLoop(time: number) {

        if (this.direction == "right") {
            this._currentX += 1;
        } else if (this.direction == "left") {
            this._currentX -= 1;
        }

        const options = {
            brickXPosition: this._currentX,
            brickYPosition: this._currentY,
            brickSize: 100
        };
        console.log(options);
        this.engine.render(options);


        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.rect(x, y, 100, 100);
        this.ctx.fill();

        x += 1;
        requestFrame(() => {
            this.mainLoop((performance.now()))
        });
    }
    multiply(n1: number, n2: number): number {
        return n1 * n2;
    }

    setMovement(movement: string) {
        this.direction = movement;
    }
}