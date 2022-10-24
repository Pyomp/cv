import { createHTMLElement } from '../../../utils/htmlElement.js'





export class Languages_View {
    constructor(
        parent,
        data = [
            {
                title: 'Français',
                level: 1,
            },
            {
                title: 'Anglais',
                level: .7,
            },
        ]
    ) {
        this.container = createHTMLElement('section', {}, parent)

        for (const d of data) {
            const c = createHTMLElement('div', {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '5px 0',
            }, this.container)

            createHTMLElement('span', {}, c, d.title)
            const percent = (d.level * 100).toFixed(0)
            const color = (d.level * 240).toFixed(0)
            createHTMLElement('div', {
                width: '80px',
                height: '10px',
                borderRadius: '5px',
                background: `linear-gradient(90deg, hsl(${color}, 100%, 50%), hsl(${color}, 100%, 70%) ${percent}%, grey ${percent}%)`
            }, c)
        }
    }
}







