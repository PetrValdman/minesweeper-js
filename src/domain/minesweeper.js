import { field } from "./models/field.js";

export class Minesweeper {

    /**
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(rows, columns, bombs = null) {
        this.rows = rows;
        this.columns = columns;

        this.isGameOver = false;

        if (bombs == null)
            this.bombs = this._calculateDefaultBombs();
        else
            this.bombs = bombs;

        this.logic = [];

        for (let i = 0; i <= this.columns; i++) {
            let a = [];
            for (let j = 0; j <= this.rows; j++) {
                a.push(field.hidden);
            }
            this.logic.push(a);
        }

    }





    /**
     * TODO: IMPLEMENT THIS
     * Calculate how many bombs should be on the field and return it.
     * The calculation should Depend on the size of the field.
     * @private
     * @return {number} amount of bombs
     */
    _calculateDefaultBombs() {
        console.log("calculateDefaultBombs")
        return 10;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns the current state of the field.
     * Fields can be: hidden, visible, flagged or question marked.
     * @param {number} x
     * @param {number} y
     * @return {field}
     */
    getField(x, y) {
        console.log("getField")
        return this.logic[x][y];
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns how many bombs are around the field
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    getAmountOfSurroundingBombs(x, y) {
        console.log("getAmountOfSurroundingBombs")
        return 0;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns true there is a bomb on the position
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isBombOnPosition(x, y) {
        console.log("isBombOnPosition")
        return true;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Reveals the field and all empty connected fields around it.
     * Or stops the game if clicked on a position, where a bomb is located.
     * @param {number} x
     * @param {number} y
     */
    reveal(x, y) {
        console.log("reveal")

        this.logic[x][y] = field.visible

    }

    /**
     * TODO: IMPLEMENT THIS
     * Toggles the field state, if it has not been revealed yet.
     * @param {number} x
     * @param {number} y
     */
    toggleFieldState(x, y) {
        console.log("toggleFieldState")
        if (this.logic[x][y] === field.hidden) {
            this.logic[x][y] = field.flag

        } else if (this.logic[x][y] === field.flag) {
            this.logic[x][y] = field.question_mark

        } else if (this.logic[x][y] === field.question_mark) {
            this.logic[x][y] = field.hidden

        }

    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user already won
     * @returns {boolean}
     */
    didWin() {
        console.log("didWin")
        return false;
    }

    /**
     * TODO: IMPLEMENT THIS
     * Returns if the user clicked a bomb and therefore lost. not done???
     * @returns {boolean}
     */
    didLoose() {
            console.log("didLoose")
            return false;
            if (this.logic[x][y] === field.visible) {
                if (this.logic === isBombOnPosition) {
                    return true;
                }
            }
        }
        /**
         * Returns the remaining amount bombs, user has to select
         * @return {number}
         */
    getRemainingBombCount() {
        console.log("getRemainingBombCount")
        return 5;
    }


}