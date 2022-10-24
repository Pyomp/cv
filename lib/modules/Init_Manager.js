









/** to prevent second init and only destroy when all instances are destroyed */
export class Init_Manager {
    constructor(
        /**  @type {async()=>{} | ()=>{}} */ init,
        /**  @type {()=>{}} */ destroy
    ) {
        let timeout
        let needs_gc = false

        let init_count = 0
        let init_promise
        this.init = (...param) => {
            init_count++
            if (init_count === 1) {
                if (needs_gc === true) {
                    clearTimeout(timeout)
                    needs_gc = false
                } else {
                    init_promise = init(...param)
                    return init_promise
                }
            } else {
                return init_promise
            }
        }

        this.destroy = (...param) => {
            init_count--
            if (init_count === 0) {
                needs_gc = true
                timeout = setTimeout(() => {
                    needs_gc = false
                    destroy(...param)
                }, 5000)
            }
        }
    }
}





