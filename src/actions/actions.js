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
          items: data,
          query:query,
          total: res.pagination.total_count,
          offset: res.pagination.offset,
          count: res.pagination.count
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

/*export function nextPage(pageOffset) {
  return {
    type:"MOVE_NEXT",
    pageOffset
  }
}

export function prevPage(pageOffset) {
  return {
    type:"MOVE_PREV",
    pageOffset
  }
}*/

