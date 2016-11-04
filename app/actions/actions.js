import getJSON from '../services/getjson';

export function fetchData(fetchOffset, category, query){
  return function(dispatch) {
    let cat = category
    getJSON(`http://api.giphy.com/v1/${category}/search?q=${query}&api_key=dc6zaTOxFJmzC&offset=${fetchOffset}`)
      .then(res=>{
        let data = [];
        let counter = 0
        for (let i = 0; i < 5; i++) {
          let obj = []
          for (let o = 0; o < 5; o++) {
            let it = {
              img_sm:res.data[counter].images.fixed_width.url,
              img_original: res.data[counter].images.original.url
            }
            counter++
            obj.push(it)
          }
          data.push(obj)
        }
        console.log(data)

        /*let data = res.data.map(it => {
          return {
            img_sm:it.images.fixed_width_small.url,
            img_original: it.images.original.url
          }
        })*/
        let json = {
          data: data,
          query:query,
          total: res.pagination.total_count,
          offset: res.pagination.offset,
          count: res.pagination.count
        }
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

