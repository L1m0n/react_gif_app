import getJSON from '../services/getjson';
import reciveData from './reciveData';

const getDefault = (offset, categori) => {
    return function(dispatch) {
        getJSON(`http://api.giphy.com/v1/${categori}/trending?api_key=dc6zaTOxFJmzC&offset=${offset}`)
            .then(res=>{

                let data = res.data.map(item => {
                    return {
                        height:parseInt(item.images.fixed_width.height, 10),
                        thumbnail:item.images.fixed_width_still.url,
                        gif: item.images.fixed_width.url,
                        url:item.images.original.url,
                        fbUrl:item.url,
                        loaded: false,
                        id: item.id
                    }
                });
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
};

export default getDefault;