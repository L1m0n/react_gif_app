import React, {Component} from 'react';
import getJSON from '../services/getjson.js';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.getGif = this.getGif.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.more = this.more.bind(this)
    this.state = {
      data : [],
      offset:0
    }
  }

  componentDidMount() {

  }

  more(){
    this.setState({
      offset: this.state.offset+25
    })
    this.getGif()
    console.log(this.state)
  }

  getGif(e){
    if(e)e.preventDefault();
    let self = this
    let query = encodeURIComponent(this.state.query) 
    let urlPrefix = "http://api.giphy.com/v1/gifs/search?q=";
    let apiKey = '&offset='+this.state.offset+'&api_key=dc6zaTOxFJmzC';

    let url = urlPrefix+query+apiKey;
    let data = getJSON(url);
    data.then(result => {
      self.setState({
        data: result.data,
        offset:self.state.offset+25
      })
    }, 
      error => console.log(error)
    )
  }

  searchQuery(evt){
    this.setState({
      query:evt.target.value
    })
  }

  render() {
    let count = 0;
    return (
      <div className="App">
        <form onSubmit={this.getGif} >
          <input type="text" onChange={this.searchQuery}/>
        </form>

        <button onClick={this.more} style={{display: this.state.offset==0 ? 'none' : 'block' }}>
          More!!!
        </button>
        {
          this.state.data.map(img=>
            <img src={img.images.fixed_width_small.url} key={count++}/>
          ) 
        }
      </div>
    );
  }

}
