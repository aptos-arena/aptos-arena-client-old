import { Fighter } from '../types/Fighter'

const fighters: Fighter[] = [
    {
        collectionName: 'Pontem Pirates',
        collectionImage: '/PontemPirate.png',
        collectionBackgroundImage: '/PontemPirateBackdrop.jpg',

        stats: {
            speed: 3,
            strength: 7,
            defense: 5,
        }
    },
    {
        collectionName: "Aptos Monkeys",
        collectionImage: "/AptosMonkey.png",
        collectionBackgroundImage: "/AptosMonkeyBackdrop.jpg",
        stats: {
            speed: 8,
            strength: 4,
            defense: 3,
        }
    }
]

export default fighters