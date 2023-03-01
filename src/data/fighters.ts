import { Fighter } from '../types/Fighter'

const fighters: Fighter[] = [
    {
        collectionName: 'Pontem Pirates',
        collectionImage: 'https://www.topaz.so/cdn-cgi/image/width=256,quality=100,fit=scale-down,anim=false,onerror=redirect/https://i.ibb.co/yy5Kyyp/logo.gif',
        stats: {
            speed: 3,
            strength: 7,
            defense: 5,
        }
    },
    {
        collectionName: "Aptos Monkeys",
        collectionImage: "https://www.topaz.so/cdn-cgi/image/width=256,quality=100,fit=scale-down,anim=true,onerror=redirect/https://ipfs.topaz.so//ipfs/bafkreib3xshcu4wd74phn7u5ntrcobkfjwdrbywdbvetbjtcder7gsutwy",
        stats: {
            speed: 8,
            strength: 4,
            defense: 3,
        }
    }
]

export default fighters