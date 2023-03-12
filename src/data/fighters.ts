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
        },
        marketplaceURL: "https://www.topaz.so/collection/Pontem-Space-Pirates-c46dd298b8"
    },
    {
        collectionName: "Aptos Monkeys",
        collectionImage: "/AptosMonkey.png",
        collectionBackgroundImage: "/AptosMonkeyBackdrop.jpg",
        stats: {
            speed: 8,
            strength: 4,
            defense: 3,
        },
        marketplaceURL: "https://www.topaz.so/collection/Aptos-Monkeys-f932dcb983"
    }
]

export default fighters