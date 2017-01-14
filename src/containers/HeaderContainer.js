import {fetchData, selectCategory, getDefault} from '../actions/actions';
import {connect} from 'react-redux';
import Header from '../components/Header/index';

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.selectedCategory,
		offset: state.data.offset,
		count: state.data.count,
		query: state.data.query,
		showDefault: state.data.showDefault
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
		},
		getDefault: (offset, categori) => {
			dispatch(getDefault(offset, categori))
		},
		prevDefault:(offset, categori) => {
			dispatch(getDefault(offset, categori))	
		},
		nextDefault:(offset, categori) => {
			dispatch(getDefault(offset, categori))
		} 
	}
};

const ControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);

export default ControlsContainer
