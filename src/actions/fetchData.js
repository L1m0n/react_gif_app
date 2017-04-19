import getJSON from '../services/getjson';
import reciveData from './reciveData';

const fetchData = (fetchOffset, category, query) => {
    return function(dispatch) {
        getJSON(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${fetchOffset}`)
            .then(res=>{
                let data = {}, i;

                for (i = 0; i < res.data.length; i += 1 ) {
                    data[res.data[i].id] = {
                        height : parseInt(res.data[i].images.fixed_width.height, 10),
                        thumbnail : res.data[i].images.fixed_width_still.url,
                        gif : res.data[i].images.fixed_width.url,
                        url : res.data[i].images.original.url,
                        fbUrl : res.data[i].url,
                        loaded : false,
                        id : res.data[i].id
                    }
                }


                let json = {
                    total: res.pagination.total_count,
                    offset: res.pagination.offset,
                    count: res.pagination.count,
                    showDefault:true,
                    items: data
                };
                dispatch(reciveData(json))
            })
    }
}

export default fetchData;