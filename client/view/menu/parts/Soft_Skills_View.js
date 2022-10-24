import { createHTMLElement } from '../../../utils/htmlElement.js'







export class Soft_Skills_View {
    constructor(
        parent,
        data = [
            'Gestion Kanban',
            'Qualité, Hygiène, Sécuité et Environnement (QHSE)',
            'Amélioration continue',
            'Méthode Agile',
        ]
    ) {
        this.container = createHTMLElement('section', { padding: '5px 0' }, parent)
        createHTMLElement('h3', {},this.container, 'Soft Skills')
        for (const d of data) {
            const ele = createHTMLElement('p', { userSelect: 'text', margin: '5px 0' }, this.container, d)
        }
    }
}



