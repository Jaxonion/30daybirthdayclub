import { joinPath } from "sanity";

export default {
    name: 'deals',
    title: 'Deals',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'picture',
            title: 'Picture',
            type: 'image'
        }
    ]
}