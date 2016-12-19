import React, {Component} from 'react';


class Image extends Component {
	constructor(props) {
		super(props);
		this.srcInsert = this.srcInsert.bind(this)
		this.state = {
			thumbnailLoaded: false
		}
	}

	srcInsert = (e) => {
		this.setState({
			thumbnailLoaded: true
		})
	}

	render(){
		return (
			<div className={this.props.loaded? "image-container" : "image-container show-spiner"}>
				<img className="image__thumbnail" onLoad={() => this.srcInsert()} src={this.props.src} role="presentation"/>
				<img className="image__gif"  src={this.state.thumbnailLoaded ? this.props.gif : ""} onLoad={()=> this.props.onLoaded(this.props.id)} role="presentation"/>
				<div className="spinner__wrapper">
					<div className="spinner">
					  <div className="bounce1"></div>
					  <div className="bounce2"></div>
					  <div className="bounce3"></div>
					</div>
				</div>
				<div className="image__eye"></div>	
			</div>
		)
	}
}


export default Image;
