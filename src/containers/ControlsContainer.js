import {fetchData, selectCategory} from '../actions/actions';
import {connect} from 'react-redux';
import Controls from '../components/Controls';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.selectedCategory,
		offset: state.data.offset,
		count: state.data.count,
		query: state.data.query
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (offset, category, query) => {
			dispatch(fetchData(offset, category, query))
		},
		prev: (offset, category, query) => {
			dispatch(fetchData(offset, category, query))
		},
		next: (offset, category, query) => {
			dispatch(fetchData(offset, category, query))
		},
		changeCategory: (category) => {
			dispatch(selectCategory(category))
		} 
	}
}

const ControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controls)

export default ControlsContainer
