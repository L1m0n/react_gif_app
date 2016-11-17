import getJSON from '../services/getjson';

export function fetchData(fetchOffset, category, query){
  return function(dispatch) {
    getJSON(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${fetchOffset}`)
      .then(res=>{

        let data = res.data.map(item => {
          return {
            thumbnail:item.images.fixed_width_still.url,
            gif: item.images.fixed_width.url,
            id: item.id,
            loaded: false
          }
        })
        let json = {
          total: res.pagination.total_count,
          offset: res.pagination.offset,
          count: res.pagination.count,
          showDefault:false,
          query:query,
          items: data
        }
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
            loaded: false
          }
        })
        let json = {
          total: res.pagination.total_count,
          offset: res.pagination.offset,
          count: res.pagination.count,
          showDefault:true,
          items: data
        }
        dispatch(reciveData(json))
      })
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


