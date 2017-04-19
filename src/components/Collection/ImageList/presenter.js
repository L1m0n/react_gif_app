import React, {Component} from 'react';
import Image from './Image';


class presenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {id:0, height:0},
                {id:1, height:0},
                {id:2, height:0},
                {id:3, height:0},
                {id:4, height:0}
            ],
            loadMoreTriggered:false
        };

        this.renderPictures = this.renderPictures.bind(this);
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
                        key={data[i].id}
                        id={data[i].id}
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
                    {Object.keys(this.props.images).length === 0 ?
                        <h1>Your collection is empty :(</h1> :
                        this.renderPictures(this.props.images)}
                </div>
            </div>
        );
    }
}

export default presenter;
