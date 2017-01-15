import * as actions from '../../../actions';
import {connect} from 'react-redux';
import presenter from './presenter';

const mapStateToProps = (state) => {
    return {
        selectedCategory: state.selectedCategory,
        offset: state.data.offset,
        count: state.data.count,
        query: state.data.query,
        showDefault: state.data.showDefault
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (offset, category, query) => {
            dispatch(actions.fetchData(offset, category, query))
        },
        prev: (offset, category, query) => {
            dispatch(actions.fetchData(offset, category, query))
        },
        next: (offset, category, query) => {
            dispatch(actions.fetchData(offset, category, query))
        },
        changeCategory: (category) => {
            console.log(actions);
            dispatch(actions.selectCategory(category))
        },
        getDefault: (offset, categori) => {
            dispatch(actions.getDefault(offset, categori))
        },
        prevDefault:(offset, categori) => {
            dispatch(actions.getDefault(offset, categori))
        },
        nextDefault:(offset, categori) => {
            dispatch(actions.getDefault(offset, categori))
        }
    }
};

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Header
