/**
 * Created by shamsiev on 12.10.2017.
 */

import './css/app.sass'
import Game from "./game/Game";

const onReady = () => {
    console.log("working!");

    const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    new Game(ctx).start()
};

document.addEventListener("DOMContentLoaded", onReady);