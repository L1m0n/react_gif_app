import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCategory, fetchData, changeStatus} from '../actions/actions';
import Image from '../components/Image'

//require('./App.scss')

class App extends Component {


  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.drawImages = this.drawImages.bind(this)
    this.changeGifStatus = this.changeGifStatus.bind(this)
  }

  componentDidMount() {
  	
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

  changeGifStatus(id){
    const {dispatch} = this.props
    let category = this.props.store.selectedCategory
    dispatch(changeStatus(id, category))
  }

  drawImages(){
    if (this.props.store[this.props.store.selectedCategory]) {
    console.log(this.props.store)
      let counter = 0;
      let data = this.props.store[this.props.store.selectedCategory].data;
      let returnedData = [];
      for (let i = 0; i < 5; i++) {
        let items = []
        for (let c = 0; c < 5; c++){
          let src = data[counter].img_sm;
          let gif = data[counter].img_original;
          let id = data[counter].id;
          let status = data[counter].loaded;
          items.push(<Image 
            src={src} 
            gif={gif} 
            key={id}
            id={id}
            loaded={status}
            onLoad={e=> this.changeGifStatus}
          />)
          counter++
        }
        returnedData.push(<div className="col">{items}</div>)
      }
      return returnedData
    }
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
            this.drawImages()
          }
        </div>
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