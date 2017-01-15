import * as actions from '../../../../actions';
import presenter from './presenter';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        images: state.data.items,
        category:state.selectedCategory,
        offset: state.data.offset
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGifLoadAction: (id) => {
            dispatch(actions.changeLoadedStatus(id))
        },
        loadMore: (category, offset)=>{
            dispatch(actions.loadMore(category, offset));
        }
    }
};

const ImageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default ImageList;