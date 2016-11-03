import getJSON from '../services/getjson';

export function fetchData(fetchOffset, category, query){
  return function(dispatch) {
    let cat = category
    getJSON(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${fetchOffset}`)
      .then(res=>{
        let data = res.data.map(it => {
          return {
            img_sm:it.images.fixed_height_small.url,
            img_original: it.images.original.url
          }
        })
        let json = {
          data: data,
          query:query,
          total: res.pagination.total_count,
          offset: res.pagination.offset,
          count: res.pagination.count
        }
        console.log(json.offset, res.pagination.offset);
        dispatch(reciveData(category, json))
      })
  }
}

export function reciveData(category, json){
  return {
    type:"RECIVE_DATA",
    category,
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

