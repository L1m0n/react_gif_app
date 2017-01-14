import {changeLoadedStatus, loadMore} from '../actions/actions'
import {connect} from 'react-redux';
import Main from '../components/Main/index'


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
			dispatch(changeLoadedStatus(id))
		},
		loadMore: (category, offset)=>{
			dispatch(loadMore(category, offset));
		}
	}
};

const MainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);

export default MainContainer;