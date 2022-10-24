import { createHTMLElement } from '../../../utils/htmlElement.js'
import { createSeparationBar } from '../../../utils/views/separationBar.js'




export class Work_View {
    constructor(
        parent,
        data = [
            {
                start: '2021',
                end: '2022',
                title: 'Pyompy Studio',
                city: '42 Usson en Forez',
                business: 'Developpement de jeux vidéo',
                role: 'Indépendant',
                description: 'Création d\'un Tower Defense 3D sur toutes les plateformes disponible sur <a target="_blank" href= "https://cabanetd.com" >CabaneTD.com<a>.',
            }, {
                start: 'Avril 2020',
                end: 'Juin 2020',
                title: 'GIPSA-lab',
                city: '38 Grenoble',
                business: 'Laboratoire de recherche',
                role: 'Developpeur',
                description: `Stage en traitement d'images sur OpenCV en C++. Recherche de techniques pour suivre la topologie d'un corps en mouvement depuis une vidéo.`,
            }, {
                start: '2018',
                end: '2019',
                title: 'ALSTOM',
                city: '69 Villeurbanne',
                business: 'Conception et production de systèmes électroniques embarqués ferroviaires',
                role: 'Technicien Électronique',
                description: 'Dépannage de cartes électroniques (SAV).',
            }, {
                start: '2013',
                end: '2017',
                title: 'CENTRALP',
                city: '69 Vénissieux',
                business: 'Conception fabrication systèmes électroniques embarqués',
                role: 'Technicien Électronique',
                description: 'Test et dépannage de cartes électroniques.',
            },
            // {
            //     start: '2012',
            //     end: '2013',
            //     title: 'SEGULA MATRA Technologies',
            //     city: '69 Vénissieux',
            //     business: 'Prestation – Mission chez Renault Trucks.',
            //     role: 'Technicien Électronique',
            //     description: 'Test et dépannage de cartes électroniques.',
            // }, {
            //     start: 'Avril 2011',
            //     end: 'Juin 2011',
            //     title: 'SAIREM',
            //     city: '69 Neyron',
            //     business: 'Conception et fabrication de micro-onde industriel',
            //     role: 'Technicien Électronique',
            //     description: `Stage sur la création d’un banc de test automatisé pour une carte de commande de générateur HT
            //     (Conception, montage, programmation d'un microcontrôleur, test électronique)
            //     Maintenance des appareils électriques.`,
            // }, {
            //     start: '2008',
            //     end: '2011',
            //     title: 'Quick',
            //     city: '38 L\'Isle d\'Abeau',
            //     business: 'Restauration',
            //     role: 'Équipier',
            //     description: `Grill-man, caissier, manutentionnaire.`,
            // },
        ],
    ) {

        this.container = createHTMLElement('section', {
            position: 'relative',
        }, parent)

        createHTMLElement('h2', {}, this.container, 'Expériences Professionnelles')

        const c1 = createHTMLElement('div', {
            position: 'relative',
        }, this.container)

        for (let i = 0; i < data.length; i++) {
            const d = data[i]
            if (i !== 0) createSeparationBar(c1)

            const article = createHTMLElement('article', {
                margin: '5px 0',
                paddingLeft: '10px',
                borderLeft: `solid 1px hsl(${Math.random() * 360}, 100%, 70%)`,
            }, c1)

            createHTMLElement('span', { fontWeight: 'bolder' }, article, `${d.title}`)
            createHTMLElement('span', { margin: '0 5px', fontSize: 'smaller' }, article, `${d.city}`)
            createHTMLElement('span', { fontSize: 'smaller' }, article, `${d.start} - ${d.end}`)
            createHTMLElement('p', { fontSize: 'smaller' }, article, `${d.business}`)
            createHTMLElement('p', { margin: '5px 0' }, article, `${d.role}`)
            createHTMLElement('p', {}, article).innerHTML = `${d.description}`
        }
    }
}











