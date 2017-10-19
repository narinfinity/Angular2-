//import { Address } from './address.model';
//import { Post } from './post.model';

namespace Model
{
    export interface Address {
        street: string,
        city: string,
        state: string
    }
    export interface Post {
        id: number,
        title: string,
        body: string,
        userId: number
    }
}
export = Model