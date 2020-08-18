import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Programs from './compenents/Programs';
import Filters from './compenents/Filters';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    programs: [],
    url: "https://api.spaceXdata.com/v3/launches?limit=100",
    launch_success: null,
    land_success: null,
    launch_year: null,
    count: 0
  });

  //To check the initial url from browser url search bar
  // if it contains some filters then load filtered data only during initial render
  const setUrl = (url) => {
    console.log('called');
    let params = new URLSearchParams(document.location.search.substring(1));
    console.log(params, document.location.search.substring(1));
    let launch = params.get("launch_success");
    let land = params.get("land_success");
    let year = params.get("launch_year");
    let stateUrl = url;
    if (launch) {
      stateUrl = stateUrl + `&launch_success=${launch}`;
    }
    if (land) {
      stateUrl = stateUrl + `&land_success=${land}`;
    }
    if (year) {
      stateUrl = stateUrl + `&launch_year=${year}`;
    }
    setState({ url: stateUrl, count: 1, launch_success: launch, land_success: land, launch_year: year });

  }
  const select = (val, context) => {
    console.log(val);
    //when user wants to remove the filter
    if (state[context] == val) {
      console.log("called when unselected")
      const url = new URL(location);
      url.searchParams.delete(context);
      history.replaceState(null, null, url)
      let stateUrl = new URL(state.url);
      stateUrl.searchParams.delete(context);
      setState(prevState => {
        return { ...prevState, url: stateUrl, [context]: null }
      });

    } else {
      const url = new URL(location);
      url.searchParams.set(context, val);
      history.replaceState(null, null, url)
      let stateUrl = new URL(state.url);
      stateUrl.searchParams.set(context, val);
      setState(prevState => {
        return { ...prevState, url: stateUrl, [context]: val }
      });
    }
  }
  useEffect(() => {
    setUrl(state.url);
  }, [])
  useEffect(() => {
    if ((state.count) > 0) {
      console.log(state.url);
      axios.get(state.url).then(res => {
        console.log(res);
        setState(prevState => {
          return { ...prevState, programs: res.data }
        });
      });
      console.log(state.launch_year)
    }

  }, [state.url, state.count]);
  return (<>
    <p className="pageTitle">Spacex Launch Programs</p>
    <div className="content">
      <Filters className="filters" clicks={select} land={state.land_success} launch={state.launch_success} year={state.launch_year} />
      {state.programs ? (state.programs.length > 0 ? (<Programs className="programs" data={state.programs} />) : <div>No data found on server for this combination</div>) : "Loading"}
    </div>
    <div className="footer">Developved by: {"Nipun Goyal"}</div>

  </>)
};

export default App;



