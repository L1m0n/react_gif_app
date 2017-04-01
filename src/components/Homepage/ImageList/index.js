import * as actions from '../../../actions';
import presenter from './presenter';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


const mapStateToProps = (state) => {
    return {
        images: state.app.data.items,
        category:state.app.selectedCategory,
        offset: state.app.data.offset
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGifLoadAction: (id) => {
            dispatch(actions.changeLoadedStatus(id))
        },
        loadMore: (category, offset)=>{
            dispatch(actions.loadMore(category, offset));
        },
        showSingleGif: (gif) => {
            dispatch(actions.showGif(gif));
            browserHistory.push('/gifpage');
        }
    }
};

const ImageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default ImageList;