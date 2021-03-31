import React from 'react';

import Projects from './../Molecules/Projects';

import ProjectA from "./../../assets/Project_A.png";
import ProjectB from "./../../assets/Project_B.png";
import ProjectC from "./../../assets/Project_C.gif";
import ProjectD from "./../../assets/Project_D.gif";
import useProjects from '../../reacthooks/useProjects';
import Modal from '../Atoms/Modal';

function ProjectList() {

    const {state, showSPA, showVintageMovies, showWebco, showStrike9Training} = useProjects();

    return (
        <div>
                <Projects 
                    projectImg={ProjectA}
                    projectImgB={ProjectB}
                    onClickA={(e) => {
                        showSPA(e);
                    }}
                    onClickB={(e) => {
                        showVintageMovies(e)
                    }}
                />

                <Projects 
                    projectImg={ProjectC}
                    projectImgB={ProjectD}
                    onClickA={(e) => {
                        showWebco(e);
                    }}
                    onClickB={(e) => {
                        showStrike9Training(e)
                    }}
                />

                <Modal onClose={showSPA} show={state.SPA}>
                    <h2>SPA</h2>
                </Modal>
                
                <Modal onClose={showVintageMovies} show={state.vintageMovies}>
                    <h2>Vintage Movies</h2>
                </Modal>
        </div>
    )
}

export default ProjectList
