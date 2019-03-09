export interface Item {
    title: string;
    type: string;
    description: string;
    img: any;
    location: string;
    available: boolean;
}

export const ITEMS: Item [] = [
    {title: 'Lawnmower', type: 'garden tool', description: 'A lawnmower', img: '', location: 'here', available: true},
    {title: 'Shovel', type: 'garden tool', description: 'A shovel', img: '', location: 'here', available: true},
    {title: 'Car', type: 'transportation', description: 'A 2006 Honda Civic', img: '', location: 'here', available: true}
];
