import {Minesweeper} from "../domain/minesweeper.js";
import {field} from "../domain/models/field.js";

export class MinesweeperGUI {

    /**
     * @param {HTMLElement} container
     * @param {number} rows
     * @param {number} columns
     * @param {number | null} bombs
     */
    constructor(container, rows, columns, bombs = null) {
        this.container = container;
        this.game = new Minesweeper(rows, columns, bombs);
    }

    /**
     * Generates the UI grid
     */
    draw() {
        this._clear();

        const table = document.createElement('table');

        for (let i = 0; i < this.game.rows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < this.game.columns; j++) {
                const cell = document.createElement('td');

                cell.textContent = this._getIcon(i, j);

                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        this.container.appendChild(table);
    }

    /**
     * Clears the game "canvas"
     * @private
     */
    _clear() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    /**
     * Selects the correct icon/number and returns it
     * @param {number} x
     * @param {number} y
     * @return {string}
     * @private
     */
    _getIcon(x, y) {
        switch(this.game.getField(x, y)) {
            case field.hidden:
                return '';
            case field.visible:
                return `${this.game.getFieldValue(x, y)}`; //Return number
            case field.flag:
                return 'P';
            case field.question_mark:
                return '?';
        }
    }
}


