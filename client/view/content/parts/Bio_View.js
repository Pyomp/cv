import { createHTMLElement } from '../../../utils/htmlElement.js'




export class Bio_View {
    constructor(
        parent,
        description = `
        Passionné des technologies Web, je cherche un travail dans ce domaine.
        Mon objectif est de devenir développeur senior.
        Curieux, je m'intéresse à toutes les activités où je peux utiliser mon savoir-faire.
        `
    ) {
        this.container = createHTMLElement('section', {}, parent)
        createHTMLElement('h2', {}, this.container, 'Profil')
        createHTMLElement('p', {}, this.container).innerHTML = description
    }
}







