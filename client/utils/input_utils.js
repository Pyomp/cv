import { cbH } from '../../utils/utils.js'

const on_first_interaction = new Set()
addEventListener('pointerdown', () => {
    cbH(on_first_interaction)
}, { capture: true, once: true })

/**
 * @param {HTMLElement} element 
 * @param {function(e, dx, dy)} onMove
 * @param {function(e)} onDown
 * @param {function(e)} onUp
 */
export const pointerMove = (element, onMove, onDown, onUp) => {
    let lastX, lastY
    element.style.userSelect = 'none'
    element.style.touchAction = 'none'
    let activated = false

    const onpointerdown = (e) => {
        activated = true
        element.setPointerCapture(e.pointerId)
        lastX = e.clientX
        lastY = e.clientY
        if (onDown) onDown(e)
    }

    const onpointermove = (e) => {
        if (activated) {
            onMove(
                e,
                e.clientX - lastX,
                e.clientY - lastY
            )
            lastX = e.clientX
            lastY = e.clientY
        }
    }
    const onlostpointercapture = (e) => {
        activated = false
        element.releasePointerCapture(e.pointerId)
        if (onUp) onUp(e)
    }
    element.addEventListener('pointerdown', onpointerdown)
    element.addEventListener('pointermove', onpointermove)
    element.addEventListener('lostpointercapture', onlostpointercapture)

    return () => {
        element.removeEventListener('pointerdown', onpointerdown)
        element.removeEventListener('pointermove', onpointermove)
        element.removeEventListener('lostpointercapture', onlostpointercapture)
    }
}

/**
 * 
 * @param {Element} element 
 * @param {function} cb 
 */
export const hold_click_event = (element, cb) => {
    let timeout
    element.addEventListener('pointerdown', (e) => {
        element.setPointerCapture(e.pointerId)
        const repeat = () => {
            cb()
            timeout = setTimeout(repeat, 100)
        }
        cb()
        timeout = setTimeout(repeat, 500)
    })
    element.addEventListener('lostpointercapture', () => {
        clearTimeout(timeout)
    })
}




// 
// export const closeEventCb = []
// export const defaultCloseCb = new Set()
// export const closeEventTrigger = (e) => {
//     if (e && e.target && e.target.blur) e.target.blur()
//     const poped = INPUT.closeEventCb.pop()
//     if (poped) if (poped() === true) INPUT.closeEventTrigger()
//     else {
//         document.activeElement.blur()
//         cbH(INPUT.defaultCloseCb)
//     }
// }


// History
let tryBack = 0
window.onpopstate = (e) => {
    console.log(e.state)
    if (e.state === 1) {
        if (INPUT.closeEventCb.length === 0 && tryBack === 1) {
            history.go(-2)
        }
        else if (INPUT.closeEventCb.length === 0)
            tryBack = 1
        else
            tryBack = 0

        INPUT.closeEventTrigger(e)
    } else {
        history.go(1)
    }
}