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

                cell.innerHTML = this._getIcon(i, j);
                cell.addEventListener('click', () => {
                    this.game.reveal(i, j);
                });
                cell.addEventListener('contextmenu', (e) => {
                    this.game.toggleFieldState(i, j);
                    e.preventDefault()
                });

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
        if (this.game.isGameOver && this.game.isBombOnPosition(x, y))
            return '💣';
        else
            switch (this.game.getField(x, y)) {
                case field.hidden:
                    return '<div class="hidden">&nbsp;</div>';
                case field.visible:
                    const amount = this.game.getAmountOfSurroundingBombs(x, y); //Return number
                    return `
                        <div class="empty">
                            ${amount === 0 ? ' ' : amount}
                        </div>
                    `;
                case field.flag:
                    return '<div class="hidden">🏴</div>';
                case field.question_mark:
                    return '<div class="hidden">❓</div>';
            }
    }
}


