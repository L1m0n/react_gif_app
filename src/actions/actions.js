import getJSON from '../services/getjson';

export function fetchData(fetchOffset, category, query){
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

export function getDefault(offset, categori){
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
        dispatch(reciveData(json))
      })
  }
}

export function loadMore(categori, offset) {
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
}

export function updateData(json) {
    return{
      type:'UPDATE_DATA',
        json
    }
}

export function changeLoadedStatus(id){
  return {
    type: "CHANGE_STATUS",
    id
  }
}

export function reciveData(json){
  return {
    type:"RECIVE_DATA",
    json
  }
}

export function selectCategory(category) {
  return {
    type:"SELECT_CATEGORY",
    category
  }
}


