import React, {Component} from 'react';



class Image extends Component {
    constructor(props) {
        super(props);
        this.srcInsert = this.srcInsert.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            thumbnailLoaded: false,
            gifLoaded:false
        }
    }

    srcInsert = (e) => {
        this.setState({
            thumbnailLoaded: true
        })
    };

    changeStatus = () => {
        this.setState({
            gifLoaded:true
        })
    };

    render(){
        return (
            <div onClick={()=>{this.props.showGif(this.props.item)}}>
                <div className={this.state.gifLoaded? "image-container" : "image-container show-spiner"}>
                    <img className="image__thumbnail" onLoad={() => this.srcInsert()} src={this.props.item.thumbnail} role="presentation"/>
                    <img className="image__gif"  src={this.state.thumbnailLoaded ? this.props.item.gif : ""} onLoad={()=> this.changeStatus()} role="presentation"/>
                    <div className="spinner__wrapper">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                    <div className="image__eye"></div>
                </div>
            </div>
        )
    }

}


export default Image;

/*	srcInsert = (e) => {
 console.log(this.gif)
 e.src = this.props.gif
 }

 render(){
 let gif_node;
 return (
 <div className={this.props.loaded? "image-container" : "image-container show-spiner"}>
 <img className="image__thumbnail" onLoad={() => this.srcInsert(gif_node)} src={this.props.src} role="presentation"/>
 <img className="image__gif"  ref={node => gif_node = node} onLoad={()=> this.props.onLoaded(this.props.id)} role="presentation"/>
 <div className="spinner__wrapper">
 <div className="spinner">
 <div className="bounce1"></div>
 <div className="bounce2"></div>
 <div className="bounce3"></div>
 </div>
 </div>
 </div>
 )
 }
 }
 */