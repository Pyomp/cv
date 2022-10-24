import { Loop_Manager } from '../../lib/modules/Loop_Manager.js'
import { Three_Context } from '../../lib/modules_3D/Three_Context.js'
import { STYLE } from '../../lib/style/Style.js'
import { Particle_Firefly } from '../firefly/Particle_Firefly.js'
import { createHTMLElement } from "../utils/htmlElement.js"

import { Content_View } from './content/Content_View.js'
import { Menu_View } from './menu/Menu_View.js'

export class CV_View {
    constructor(
        parent,
    ) {
        this.container = createHTMLElement('div', {
            display: 'flex',
            background: STYLE.var.background,
            width: '900px',
            maxWidth: '100%',
        }, parent)

        const menu = new Menu_View(this.container)
        const content = new Content_View(this.container)

        init_firefly()
    }
}

const init_firefly = () => {
    const loop_manager = new Loop_Manager()
    const three_context = new Three_Context(document.body)
    {
        const s = three_context.canvas.style
        s.position = 'fixed'
        s.top = '0'
        s.left = '0'
        s.pointerEvents = 'none'
    }
    three_context.update = loop_manager.update

    const particle_firefly = new Particle_Firefly(
        three_context.scene,
        loop_manager.updates_particles,
        loop_manager.updates_frames,
    )

    particle_firefly.start()
}