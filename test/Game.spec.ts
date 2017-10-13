/**
 * Created by shamsiev on 12.10.2017.
 */
import Game from "../src/game/Game";

describe("Game", () => {

    let game: Game;

    it("should multiply correctly", () => {
        game = new Game(null);
        const actual = game.multiply(2, 30);
        console.log(`Actual: ${actual}`);
        chai.assert.strictEqual(actual, 60, "Two digits should be correctly multiplied");
    });

});