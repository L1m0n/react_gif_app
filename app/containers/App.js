import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCategory, fetchData} from '../actions/actions'

class App extends Component {


  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
  }

  componentDidMount() {
  	const {dispatch} = this.props
  }

  getData(query){
    const {dispatch} = this.props
    const category = this.props.store.selectedCategory
    dispatch(fetchData(0, category, query))
  }

  changeCategory(category){
    const {dispatch} = this.props
    dispatch(selectCategory(category))
  }

  render() {
    let input
  	return (
  		<div>
        <select onChange={e=>{
          this.changeCategory(e.target.value)
        }}>
          <option>gifs</option>
          <option>stickers</option>
        </select>
        <form onSubmit={ evt => {
          evt.preventDefault();
          this.getData(input.value);
        }}>
          <input type="text" ref={node => input = node}/>
        </form>
  		</div>
  	)
  }
}

function mapStateToProps(state) {
	return {
		store: state
	}
}

 export default connect(mapStateToProps)(App)