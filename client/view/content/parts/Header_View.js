import { createHTMLElement } from '../../../utils/htmlElement.js'






export class Header_View {
    constructor(
        parent,
        data = {
            first_name: 'Nicolas',
            last_name: 'Gayet',
            title: 'Développeur Web 3D',
        }
    ) {
        this.container = createHTMLElement('section', { textAlign: 'center', }, parent)

        createHTMLElement('h2', {
            display: 'inline',
            // padding: '20px 0',
        }, this.container, `${data.first_name} ${data.last_name} `)

        createHTMLElement('h3', {
            display: 'inline',
        }, this.container, `${data.title}`)
    }
}






