import { createHTMLElement } from '../../../utils/htmlElement.js'
import { createSeparationBar } from '../../../utils/views/separationBar.js'

export class Education_View {
    constructor(
        parent,
        data = [
            {
                year: '2020',
                name: 'I.U.T.2 Doyen Gosse',
                title: 'DUT Informatique.',
                city: 'Grenoble',
                description: `Assembleur, C, C++, SQL, Java, PHP, HTML, CSS, Javascript, Android, UML, BPMN (Merise 2).`,
            }, {
                year: '2011',
                name: 'IUT B Lyon 1',
                title: 'DUT Génie électrique et informatique industriel.',
                city: 'Villeurbanne',
                description: `Électronique, électrotechnique, automatisme, C, robotique, traitement de signal.`,
            }
        ],

    ) {
        this.container = createHTMLElement('section', {}, parent)

        createHTMLElement('h2', {}, this.container, 'Diplômes')

        for (let i = 0; i < data.length; i++) {
            const d = data[i]
            if (i !== 0) createSeparationBar(this.container)
            const c = createHTMLElement('article', {
                margin: '5px 0',
                paddingLeft: '10px',
                borderLeft: `solid 1px hsl(${Math.random() * 360}, 100%, 70%)`,
            }, this.container)
            createHTMLElement('p', { fontWeight: 'bolder' }, c, `${d.title}`)
            createHTMLElement('span', { fontSize: 'smaller' }, c, `${d.name}`)
            createHTMLElement('span', { margin: '0 5px', fontSize: 'smaller' }, c, `${d.city}`)
            createHTMLElement('span', { fontSize: 'smaller' }, c, `${d.year}`)
            createHTMLElement('p', {}, c, `${d.description}`)
        }
    }
}