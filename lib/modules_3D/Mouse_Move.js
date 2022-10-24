import { Vector2 } from './three.module.js'



export class Mouse_Move {
    constructor(
        element,
    ) {
        this.vector2 = new Vector2()
        const listener = (e) => {
            this.vector2.x = e.clientX / innerHeight * 2 - 1
            this.vector2.y = e.clientY / innerWidth * 2 - 1
        }

        element.addEventListener('mousemove', listener)
        this.dispose = () => {
            element.removeEventListener('mousemove', listener)
        }
    }
}











