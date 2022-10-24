import { STYLE } from '../lib/style/Style.js'
import { CV_View } from "./view/CV_View.js"
import { Check_Button } from './view/misc/Check_Button.js'

await STYLE.init()

document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.height = '100%'
new CV_View(document.body)

addEventListener('beforeprint', () => {
    document.body.style.height = 'auto'
})

addEventListener('afterprint', () => {
    document.body.style.height = '100%'
})

const theme = new Check_Button(
    document.body,
    'black',
    'white',
)

{
    const s = theme.container.style
    s.position = 'fixed'
    s.right = '20px'
    s.top = '10px'
}
theme.container.classList.add('no-print')
theme.on_change.add(() => {
    if (theme.checked === true) {
        STYLE.update(STYLE.themes.light)
    } else {
        STYLE.update(STYLE.themes.dark)
    }
})

addEventListener('beforeprint', () => {
    if (theme.checked === false) {
        STYLE.update(STYLE.themes.light)
    }
})

addEventListener('afterprint', () => {
    if (theme.checked === false) {
        STYLE.update(STYLE.themes.dark)
    }
})