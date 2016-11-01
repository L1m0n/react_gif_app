import React, {Component} from 'react';
import getJSON from '../services/getjson.js';

export default class App extends Component {


  constructor(props) {
    super(props);
    this.getGif = this.getGif.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
    this.state = {
      data : []
    }
  }

  componentDidMount() {

  }

  getGif(e){
    e.preventDefault();
    let self = this
    let query = encodeURIComponent(this.state.query) 
    let urlPrefix = "http://api.giphy.com/v1/stickers/search?q=";
    let apiKey = '&api_key=dc6zaTOxFJmzC';

    let url = urlPrefix+query+apiKey;
    let data = getJSON(url);
    data.then(result => {
      self.setState({
        data: result.data
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
        {
          this.state.data.map(img=>
            <img src={img.images.fixed_width_small.url} key={count++}/>
          ) 
        }
      </div>
    );
  }

}
