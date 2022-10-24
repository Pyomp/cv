





import { createHTMLElement } from '../../utils/htmlElement.js'
import { createSeparationBar } from '../../utils/views/separationBar.js'
import { Soft_Skills_View } from './parts/Soft_Skills_View.js'
import { Languages_View } from './parts/Languages_View.js'
import { Personal_Info_View } from './parts/Personal_Info_View.js'
import { Projects_View } from './parts/Projects.js'

export class Menu_View {
    constructor(
        parent
    ) {
        const BASE_WIDTH = 230
        const PADDING_RIGHT = 20

        this.container = createHTMLElement('div', {
            position: 'relative',
            padding: '20px',
            flex: `0 0 ${BASE_WIDTH + PADDING_RIGHT}px`,
            height: `100%`,
            transition: 'flex 1s',
        }, parent)

        new Personal_Info_View(this.container)
        createSeparationBar(this.container)
        new Languages_View(this.container)
        createSeparationBar(this.container)
        new Projects_View(this.container)
        createSeparationBar(this.container)
        new Soft_Skills_View(this.container)
    }
}


