import { STYLE } from '../../../../lib/style/Style.js'
import { createHTMLElement } from '../../../utils/htmlElement.js'


export class Projects_View {
    constructor(
        parent,
        data = [
            {
                link: `CabaneTD.com`,
                description: `Tower Defense 3D jouable sur navigateur et mobile.`,
            },
            {
                link: `PyompyStudio.com`,
                description: `Jeu 3D web multi-joueur amateur.`,
            },
            {
                link: `Twitch.tv/Pyompy`,
                description: `Stream de "live coding", extension Twitch "Frost", Mini jeu JS 3D en overlay.`
            },
            {
                link: `github.com/Pyomp`,
                description: `Projets divers.`
            }
        ]
    ) {
        this.container = createHTMLElement('section', { padding: '5px 0' }, parent)
        createHTMLElement('h3', {}, this.container, 'Liens')
        const ul = createHTMLElement('ul', {}, this.container)
        for (const d of data) {
            const li = createHTMLElement('li', { margin: '5px 0' }, ul)
            createHTMLElement('a', { borderBottom: `solid 1px ${STYLE.var.colorText}` }, li, d.link, { target: "_blank", href: `https://${d.link}` })
            createHTMLElement('p', { margin: '5px 0 0 10px' }, li, d.description)
        }
    }
}



