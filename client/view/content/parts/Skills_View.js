import { createHTMLElement } from '../../../utils/htmlElement.js'







export class Skills_View {
    constructor(
        parent,
        data = [
            'Moderne JavaScript - Import / Export - Class - WebSocket - PWA - Async / Await',
            'Vue.js - React.js - Redux - Jest - ESLint - Typescript',

            'Node JS - SQL - HTTP / WebSocket - Linux',

            '3D - WebGL - Three JS - Shader - GLSL',
            'Blender - Modeling - Texture - Animation - Shading',

            'Git - JSDoc',
            'Connaissances bas niveau - OS - Réseaux - C - Assembleur - Électronique'
        ]
    ) {

        this.container = createHTMLElement('section', { padding: '5px 0' }, parent)

        createHTMLElement('h2', {}, this.container, 'Compétences')
        const ul = createHTMLElement('ul', {}, this.container)
        for (const d of data) {
            const ele = createHTMLElement('li', { userSelect: 'text', padding: '1px 0' }, ul, d)
        }
    }
}



