import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCategory, fetchData} from '../actions/actions'

require('./App.scss')

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

  getNext(){
    const {dispatch} = this.props
    const {offset, query, count} = this.props.store[this.props.store.selectedCategory]
    dispatch(fetchData(offset+count, this.props.store.selectedCategory , query))

  }

  getPrev(){
    const {dispatch} = this.props
    const {offset, query, count} = this.props.store[this.props.store.selectedCategory]
    dispatch(fetchData(offset-count, this.props.store.selectedCategory , query))

  }

  changeCategory(category){
    const {dispatch} = this.props
    dispatch(selectCategory(category))
  }

  render() {
    let input
    let count = 0
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
          input.value = ""
        }}>
          <input type="text" className="query-input" ref={node => input = node}/>
        </form>
        {this.props.store[this.props.store.selectedCategory] &&
          <button onClick={e=>{
            this.getPrev()
          }}>
            prev
          </button>
        }
        {this.props.store[this.props.store.selectedCategory] &&
          <button onClick={e=>{
            this.getNext()
          }}>
            next
          </button>
        }
        <div>
          {
            this.props.store[this.props.store.selectedCategory] && 
            [0,1,2,3,4].map(item => <div>{this.props.store[this.props.store.selectedCategory].data[item].map(
              img=><img src={img.img_sm} />)}</div>)
          }
        </div>
  		</div>
  	)
  }
}
/*this.props.store[this.props.store.selectedCategory] &&
this.props.store[this.props.store.selectedCategory].data.map(item =>
  <img src={item.img_sm} key={count++} />
)*/

function mapStateToProps(state) {
	return {
		store: state
	}
}

 export default connect(mapStateToProps)(App)