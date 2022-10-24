import { createHTMLElement } from '../dom/htmlElement.js'
import { Loop_Manager } from '../modules/Loop_Manager.js'

export class Debug_3D_View {

    /**
     * 
     * @param {Loop_Manager} loop_manager
     */
    constructor(
        parent,
        loop_manager
    ) {
        this.container = createHTMLElement('div', {
            position: 'fixed',
            bottom: '0',
            left: '0',
        }, parent)


        const fps_dt = [0]
        const fps_update = (dt) => {
            fps_dt.unshift(dt)
            fps_dt.length = Math.min(fps_dt.length, 100)
        }
        loop_manager.updates_frames.add(fps_update)

        const display = () => {
            this.container.innerHTML = `fps: ${(1 / (fps_dt.reduce((a, b) => a + b) / fps_dt.length)).toFixed(0)}`
        }
        const interval = setInterval(display, 100)

        this.dispose = () => {
            loop_manager.frame_updates.delete(fps_update)
            clearInterval(interval)
            this.container.remove()
        }

    }
}










