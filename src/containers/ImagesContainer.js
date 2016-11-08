import {changeLoadedStatus} from '../actions/actions'
import {connect} from 'react-redux';
import ImagesList from '../components/ImagesList'


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

const ImagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ImagesList)

export default ImagesContainer;