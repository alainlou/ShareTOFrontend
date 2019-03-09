export interface Item {
    title: string;
    type: string;
    description: string;
    location: string;
    available: boolean;
}

export const ITEMS: Item [] = [
    {title: 'Lawnmower', type: 'garden tool', description: 'A lawnmower', location: 'here', available: true},
    {title: 'Lawnmower', type: 'garden tool', description: 'A lawnmower', location: 'here', available: true}
];
