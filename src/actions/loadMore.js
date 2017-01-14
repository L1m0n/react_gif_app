import getJSON from '../services/getjson';
import updateData from './updateData';

const loadMore = (categori, offset) => {
    return function(dispatch) {
        getJSON(`http://api.giphy.com/v1/${categori}/trending?api_key=dc6zaTOxFJmzC&offset=${offset}`)
            .then(res=>{

                let data = res.data.map(item => {
                    return {
                        thumbnail:item.images.fixed_width_still.url,
                        gif: item.images.fixed_width.url,
                        id: item.id,
                        loaded: false,
                        height:parseInt(item.images.fixed_width.height, 10)
                    }
                });
                let json = {
                    total: res.pagination.total_count,
                    offset: res.pagination.offset,
                    count: res.pagination.count,
                    showDefault:true,
                    items: data
                };
                dispatch(updateData(json))
            })
    }
};

export default loadMore;
