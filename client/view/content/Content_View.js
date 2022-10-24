





import { createHTMLElement } from '../../utils/htmlElement.js'
import { Bio_View } from './parts/Bio_View.js'
import { Education_View } from './parts/Education_View.js'
import { Header_View } from './parts/Header_View.js'
import { Hobbies_View } from './parts/Hobbies_View.js'
import { Skills_View } from './parts/Skills_View.js'
import { Work_View } from './parts/Work_View.js'

export class Content_View {
    constructor(
        parent
    ) {
        this.container = createHTMLElement('div', {
            // flex: '1',
            // // width: 'auto',
            padding: '20px',
            // display: 'flex',
            // flexDirection: 'column',
            height: 'fit-content',
        }, parent)

        new Header_View(this.container)
        new Bio_View(this.container)
        new Skills_View(this.container)
        // createSeparationBar(this.container)
        new Work_View(this.container)
        new Education_View(this.container)
        new Hobbies_View(this.container)
    }
}






