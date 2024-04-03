import imageBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-12-21',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;