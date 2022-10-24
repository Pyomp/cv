import { createHTMLElement } from '../../../utils/htmlElement.js'


export class Hobbies_View {
    constructor(
        parent,
        data = [
            'Streamer sur Twitch',
            'Course à pied',
            'Game Dev',
            'Créative Design',
        ]
    ) {
        this.container = createHTMLElement('section', {}, parent)

        createHTMLElement('h2', {}, this.container, 'Loisirs')

        for (let i = 0; i < data.length; i++) {
            if (i !== 0) this.container.innerHTML += ' - '
            const d = data[i]
            createHTMLElement('span', {}, this.container, d)
        }

    }
}










