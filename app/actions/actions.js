import fetch from 'isomorphic-fetch';

export function fetchData(fetchOffset, url){
  return function(dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(dispatch(reciveData(data)))
  }
}

export function reciveData(data){
  return {
    type:"RECIVE_DATA",
    data
  }
}

export function selectCategory(category) {
  return {
    type:"SELECT_CATEGORY",
    category
  }
}

export function nextPage(pageOffset) {
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
}

{
  selectedCatefory:'gifs',
  gifs:{
    fetchOffset:0,
    offsetPerQuery:25,
    pageOffset:0,
    total: 100500,
    data: [
      {
        id:0,
        url_sm:'www',
        url_lg:'www'
      },
      {
        id:1,
        url_sm:'www',
        url_lg:'www'
      }
    ]
  }
}