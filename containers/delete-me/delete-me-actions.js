import Resources from '../../helpers/resources';

export const GET_ALBUM = 'GET_ALBUM';

export function getAlbum({ id }) {
    console.log('delete-me-actions.js getAlbum() - id =', id);

    return {
        type: GET_ALBUM,
        payload: Resources.albums.get({ id }).verbose().send()
    };
}
