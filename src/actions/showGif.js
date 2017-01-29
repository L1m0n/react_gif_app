import {SHOW_GIF} from '../constants/actionTypes';

const showGif = (id) => {
    return {
        type: SHOW_GIF,
        id
    }
};

export default showGif;