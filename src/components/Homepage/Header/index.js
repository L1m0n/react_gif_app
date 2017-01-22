import * as actions from '../../../actions';
import {connect} from 'react-redux';
import presenter from './presenter';

const mapStateToProps = (state) => {
    return {
        selectedCategory: state.app.selectedCategory,
        offset: state.app.data.offset,
        count: state.app.data.count,
        query: state.app.data.query,
        showDefault: state.app.data.showDefault
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
