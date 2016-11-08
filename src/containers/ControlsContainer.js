import {fetchData} from '../actions/actions';
import {connect} from 'react-redux';
import Controls from '../components/Controls';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.selectedCategory,
		offset: state.data.offset
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (offset, category, query) => {
			dispatch(fetchData(offset, category, query))
		}
	}
}

const ControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)

export default ControlsContainer