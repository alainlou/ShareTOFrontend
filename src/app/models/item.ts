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