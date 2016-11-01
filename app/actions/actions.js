
//action example
/*export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date: date
  };
};*/

//midleware examle
/*export function fetchData() {
  return function thunk(dispatch) {
    if (evt) evt.preventDefault(); 

    getJSON(url).then(function(data) {
      var list = data.list;
      var dates = [];
      var temps =[];

      for (var i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
      }

      
      dispatch(setData(body));
      dispatch(setDates(dates));
      dispatch(setTemps(temps));
      dispatch(setSelectedDate(''));
      dispatch(setSelectedTemp(null));

    }, function(status) { 
      alert('Something went wrong.');
    });
  }
};*/