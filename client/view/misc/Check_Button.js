import { STYLE } from '../../../lib/style/Style.js'
import { cbH } from '../../../utils/utils.js'
import { createHTMLElement } from '../../utils/htmlElement.js'


export class Check_Button {
    #checked = false
    #button
    #color_not_checked
    #color_checked
    constructor(
        parent,
        color_checked = 'blue',
        color_not_checked = 'grey'
    ) {
        this.#color_not_checked = color_not_checked
        this.#color_checked = color_checked

        this.container = createHTMLElement('div', {
            width: '40px',
            height: '20px',
            background: STYLE.var.colorBackground,
            border: `solid 1px ${color_not_checked}`,
            borderRadius: '20px',
            position: 'relative'
        }, parent)

        this.#button = createHTMLElement('div', {
            position: 'absolute',
            width: '16px',
            height: '16px',
            margin: '1px',
            borderRadius: '50%',
            background: color_not_checked,
            left: '0px',
            transition: 'left .5s',
        }, this.container)

        this.disabled = false
        this.checked = false

        this.container.addEventListener('click', () => {
            this.checked = !this.checked
        })
    }

    on_change = new Set()
    get checked() { return this.#checked }
    set checked(a) {
        if (this.disabled === true) return
        if (a === this.#checked || typeof a !== 'boolean') return
        this.#checked = a

        if (this.#checked === true) {
            this.#button.style.background = this.#color_checked
            this.container.style.borderColor = this.#color_checked
            this.#button.style.left = `20px`
        } else {
            this.#button.style.background = this.#color_not_checked
            this.container.style.borderColor = this.#color_not_checked
            this.#button.style.left = `0px`
        }

        cbH(this.on_change)

    }
}