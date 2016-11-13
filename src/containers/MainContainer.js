import {changeLoadedStatus} from '../actions/actions'
import {connect} from 'react-redux';
import Main from '../components/Main/index'


const mapStateToProps = (state) => {
	return {
		images: state.data.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onGifLoadAction: (id) => {
			dispatch(changeLoadedStatus(id))
		} 
	}
}

const MainContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)

export default MainContainer;