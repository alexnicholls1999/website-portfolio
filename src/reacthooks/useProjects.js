import { useState } from "react";

export default function useProjects() {
    const [state, setState] = useState({
        spa: false,
        vintageMovies: false,
        webco: false,
        strike9training: false 
    });

    const showSPA = (e) => {
        setState({
            ...state,
            spa: !state.spa
        })
    }

    const showVintageMovies = (e) => {
        setState({
            ...state,
            vintageMovies: !state.vintageMovies
        })
    }

    const showWebco = (e) => {
        setState({
            ...state,
            webco: !state.webco
        })
    }

    const showStrike9Training = (e) => {
        setState({
            ...state,
            strike9training: !state.strike9training
        })
    }

    return {
        state,
        showSPA,
        showVintageMovies,
        showWebco,
        showStrike9Training
    }
}