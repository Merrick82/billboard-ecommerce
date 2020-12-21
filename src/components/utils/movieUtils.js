import {getRandomArbitrary} from '../utils/numberUtils.js';

export function getMoviesList() {
    return [
        {
            id: 1,
            title: 'Avatar',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/CH2dhAQ.jpg'
        },
        {
            id: 2,
            title: 'Dunkirk',
            price: getRandomArbitrary(16, 29),
            urlCover: 'https://i.imgur.com/vq4oiRd.jpg'
        },
        {
            id: 3,
            title: 'IT',
            price: getRandomArbitrary(30, 45),
            urlCover: 'https://i.imgur.com/2QeNbmL.jpg'
        },
        {
            id: 4,
            title: 'Kingsman: The Golden Circle',
            price: getRandomArbitrary(15, 40),
            urlCover: 'https://i.imgur.com/5wel4LX.jpg'
        },
        {
            id: 5,
            title: 'Despicable Me 3',
            price: getRandomArbitrary(19, 30),
            urlCover: 'https://i.imgur.com/MirVUWV.jpg'
        },
        {
            id: 6,
            title: 'John Wick',
            price: getRandomArbitrary(10, 60),
            urlCover: 'https://i.imgur.com/i0wbkiO.jpg'
        },
        {
            id: 7,
            title: 'Justice League',
            price: getRandomArbitrary(20, 50),
            urlCover: 'https://i.imgur.com/b7NRpPm.jpg'
        },
        {
            id: 8,
            title: 'Kong',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/O4xifbI.jpg'
        },
        {
            id: 9,
            title: 'Last Action Hero',
            price: getRandomArbitrary(0, 20),
            urlCover: 'https://i.imgur.com/LJH37Dg.jpg'
        },
        {
            id: 10,
            title: 'Limitless',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/8k2ThBU.jpg'
        },
        {
            id: 11,
            title: 'The Lion King',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/12qgoYR.jpg'
        },
        {
            id: 12,
            title: 'The Little Mermaid',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/OWVRhgz.jpg'
        },
        {
            id: 13,
            title: 'Logan',
            price: getRandomArbitrary(10, 20),
            urlCover: 'https://i.imgur.com/IHo1aHM.jpg'
        },
        {
            id: 14,
            title: 'Maleficent',
            price: getRandomArbitrary(20, 35),
            urlCover: 'https://i.imgur.com/Ro1kdFc.jpg'
        },
        {
            id: 15,
            title: 'Deadpool',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/bya1I1z.jpg'
        },
        {
            id: 16,
            title: 'Spectre',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/nOGQ2mn.jpg'
        },
        {
            id: 17,
            title: 'Star Wars: The Last Jedi',
            price: getRandomArbitrary(15, 40),
            urlCover: 'https://i.imgur.com/o9jl2Xh.jpg'
        },
        {
            id: 18,
            title: 'Tarzan',
            price: getRandomArbitrary(10, 30),
            urlCover: 'https://i.imgur.com/BBZNakN.jpg'
        },
        {
            id: 19,
            title: 'Thor Ragnarok',
            price: getRandomArbitrary(20, 50),
            urlCover: 'https://i.imgur.com/tI5YSEh.jpg'
        },
        {
            id: 20,
            title: 'Wonder Woman',
            price: getRandomArbitrary(15, 40),
            urlCover: 'https://i.imgur.com/qexPLfB.jpg'
        }
    ];
}