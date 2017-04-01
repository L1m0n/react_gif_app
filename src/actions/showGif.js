import {SHOW_GIF} from '../constants/actionTypes';

const showGif = (gif) => {
    return {
        type: SHOW_GIF,
        gif: gif
    }
};

export default showGif;