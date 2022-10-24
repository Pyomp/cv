import { createHTMLElement } from '../../../utils/htmlElement.js'







export class Personal_Info_View {
    constructor(
        parent,
        data = {
            phone: '06 52 96 64 83',
            mail: 'gayetni@gmail.com',
            linkedin:'linkedin.com/in/nicolas-gayet',
        }
    ) {
        this.container = createHTMLElement('section', {
            padding: '0 0 5px 0',
        }, parent)
        const img = createHTMLElement('img', {
            width: '130px',
            borderRadius: '50%',
            border: 'solid 2px black',
            // boxSizing: 'border-box',
            // pointerEvents: 'none',
            display: 'block',
            margin: 'auto',
        }, this.container, undefined, {
            alt: "Photo de profil",
            rel: "preload",
            src: new URL('./photo.jpg', import.meta.url).href
        })
        img.addEventListener('click', () => { window.getSelection().removeAllRanges() })

        const phone = createHTMLElement('div', {
            margin: '5px 0'
        }, this.container, data.phone)

        const mail = createHTMLElement('div', {
            margin: '5px 0'
        }, this.container, data.mail)

        const linkedin = createHTMLElement('a', {
            margin: '5px 0'
        }, this.container, data.linkedin,{
            target: '_blank',
            href: `https://${data.linkedin}`
        })
    }
}


