/**
 * Created by shamsiev on 12.10.2017.
 */

import './css/app.sass'
import Game from "./game/Game";


function determineMovement(code: string) {
    if (code == "ArrowRight") {
        return "right"
    }
    if (code == "ArrowLeft") {
        return "left"
    }
    return null
}
const onReady = () => {
    console.log("working!");

    const onKeyup = (key: KeyboardEvent) => {
        game.setMovement(null);
    };

    const onKeyDown = (key: KeyboardEvent) => {
        let movement: string = determineMovement(key.code);
        game.setMovement(movement)
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyup);

    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    const game = new Game(ctx);

    game.start()
};



document.addEventListener("DOMContentLoaded", onReady);

