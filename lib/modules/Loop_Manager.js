









export class Loop_Manager {
    updates_physics = new Set()
    updates_particles = new Set()
    updates_frames = new Set()


    now = 0
    dt_physics_raf = 0
    dt_particles_raf = 0

    constructor(
        dt_physics = .05,
        dt_particles = .03
    ) {
        this.update = (dt) => {
            this.now += dt
            this.dt_physics_raf += dt
            this.dt_particles_raf += dt

            while (this.dt_physics_raf > dt_physics) {
                this.dt_physics_raf -= dt_physics
                for (const f of this.updates_physics)
                    if (f(dt_physics) === true)
                        this.updates_physics.delete(f)
            }

            while (this.dt_particles_raf > dt_particles) {
                this.dt_particles_raf -= dt_particles
                for (const f of this.updates_particles)
                    if (f(dt_particles) === true)
                        this.updates_particles.delete(f)
            }

            for (const f of this.updates_frames)
                if (f(dt) === true)
                    this.updates_frames.delete(f)
        }
    }
}





