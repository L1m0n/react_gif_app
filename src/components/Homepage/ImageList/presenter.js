import React, {Component} from 'react';
import Image from './Image';

require('./assets/styles/styles.scss');

class presenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    id:0,
                    height:0
                },
                {
                    id:1,
                    height:0
                },
                {
                    id:2,
                    height:0
                },
                {
                    id:3,
                    height:0
                },
                {
                    id:4,
                    height:0
                }
            ],
            loadMoreTriggered:false
        };

        this.renderPictures = this.renderPictures.bind(this);
        //this.onScrollHandler = this.onScrollHandler.bind(this);
    }

    /*onScrollHandler= ()=>{
     let el = this.refs.main,
     height = el.offsetHeight,
     offsetTop = el.offsetTop,
     triggerValue = height + offsetTop -500,
     scrollValue = window.innerHeight + window.scrollY;

     if (scrollValue > triggerValue && this.state.loadMoreTriggered === false) {
     this.setState({
     loadMoreTriggered:true
     });
     window.setTimeout(()=>{
     this.setState({
     loadMoreTriggered:false
     });
     }, 1000);
     this.props.loadMore(this.props.category, this.props.offset+25)
     }
     console.log('triggerValue: '+triggerValue);
     console.log('scrollValue: '+scrollValue);
     };*/

    /*componentDidMount(){
     window.addEventListener('scroll', this.onScrollHandler);

     };*/

    show = (data) => {
        console.log(data);
    }

    renderPictures(data){
        let columnsVar = [
                {id:0, height:0},
                {id:1, height:0},
                {id:2, height:0},
                {id:3, height:0},
                {id:4, height:0}
            ],
            columnsLenght = columnsVar.length,
            main = [],
            i,
            tempContainer = [
                [], [], [], [], []
            ];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                let y,
                    colIndex = 0,
                    previousColHeight = columnsVar[0].height;

                for (y = 0; y < columnsLenght; y++) {
                    if (previousColHeight > columnsVar[y].height){
                        previousColHeight = columnsVar[y].height;
                        colIndex = columnsVar[y].id;

                    }
                }

                columnsVar[colIndex].height += data[i].height;

                tempContainer[colIndex].push(
                    <Image
                        src={data[i].thumbnail}
                        gif={data[i].gif}
                        key={data[i].id}
                        loaded={data[i].loaded}
                        id={data[i].id}
                        height={data[i].height}
                        item={data[i]}
                        showGif={this.props.showSingleGif}
                    />
                )
            }

        }

        for (let i = 0; i <tempContainer.length; i++) {
            main.push(<div key={i} className="main__col">{tempContainer[i]}</div>);
        }

        return main;
    }

    render() {
        return (
            <div>
                <div className="main" ref="main">
                    {
                        this.props.images && this.renderPictures(this.props.images)
                    }

                </div>
                {/*<button onClick={()=> {
                 this.props.loadMore(this.props.category, this.props.offset+25)
                 }}>LOAD MORE</button>*/}
            </div>
        );
    }
}

export default presenter;
