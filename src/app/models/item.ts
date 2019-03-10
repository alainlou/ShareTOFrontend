export interface SimpleItem {
    title: string;
    content: string;
    contact: string;
    address: string;
}

export interface Item extends SimpleItem {
    lat: string;
    lng: string;
}


// export const ITEMS: Item [] = [
//     {title: 'Lawnmower', type: 'garden tool', description: 'A lawnmower', img: '', contact: '123131', location: 'here', available: true},
//     {title: 'Shovel', type: 'garden tool', description: 'A shovel', img: '',contact: '123131', location: 'here', available: true},
//     {title: 'Car', type: 'transportation', description: 'A 2006 Honda Civic', img: '',contact: '123131', location: 'here', available: true}
// ];
