import getJSON from '../services/getjson';
import reciveData from './reciveData';

const fetchData = (fetchOffset, category, query) => {
    return function(dispatch) {
        getJSON(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${fetchOffset}`)
            .then(res=>{
                console.log(res);
                let data = res.data.map(item => {
                    return {
                        thumbnail:item.images.fixed_width_still.url,
                        gif: item.images.fixed_width.url,
                        id: item.id,
                        height:parseInt(item.images.fixed_width.height, 10),
                        loaded: false
                    }
                });
                let json = {
                    total: res.pagination.total_count,
                    offset: res.pagination.offset,
                    count: res.pagination.count,
                    showDefault:false,
                    query:query,
                    items: data
                };
                dispatch(reciveData(json))
            })
    }
}

export default fetchData;