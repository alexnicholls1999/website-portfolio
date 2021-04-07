import { useState } from "react";

export default function useProjects() {
  const [state, setState] = useState({
    spa: false,
    vintageMovies: false,
    webco: false,
    yourgym: false
  });

  const showSPA = (e) => {
    setState({
      ...state,
      spa: !state.spa
    });
  };

  const showVintageMovies = (e) => {
    setState({
      ...state,
      vintageMovies: !state.vintageMovies
    });
  };

  const showWebco = (e) => {
    setState({
      ...state,
      webco: !state.webco
    });
  };

  const showYourGym = (e) => {
    setState({
        ...state,
        yourgym: !state.yourgym
      });
  }

  return {
    state,
    showSPA,
    showVintageMovies,
    showWebco,
    showYourGym
  };
}
