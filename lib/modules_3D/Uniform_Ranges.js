import { createHTMLElement } from '../dom/htmlElement.js'
import { Event_Dispatcher } from '../modules/Event_Dispatcher.js'




export class Range_Data {
    constructor(
        name = 'range',
        min = -1,
        max = 1,
        step = 0.1,
    ) {
        this.name = name
        this.min = min
        this.max = max
        this.value = (min + max) / 2
        this.step = step
    }
}

class View {
    constructor(
        parent,
        range = new Range_Data(),
        event_manager
    ) {
        this.container = createHTMLElement('div', {
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        }, parent)
        const input = createHTMLElement('input', {

        }, this.container, undefined, {
            type: 'range',
            min: `${range.min}`,
            max: `${range.max}`,
            value: `${range.value}`,
            step: `${range.step}`,
        })

        const span = createHTMLElement('span', {
            marginLeft: '5px',
            width: '50px'
        }, this.container, input.value)
        input.addEventListener('input', () => {
            range.value = +input.value
            span.innerHTML = input.value
            event_manager.emit(range.name, range.value)
        })
    }
}

export class Uniform_Ranges extends Event_Dispatcher {
    constructor(
        parent, style,
        ranges = [new Range_Data()]
    ) {
        super()
        const container = createHTMLElement('div', style, parent)

        for (const range of ranges) {

            Object.defineProperty(this, range.name, {
                get: () => { return range.value },
            })

            new View(
                container,
                range,
                this
            )
        }
    }
}







