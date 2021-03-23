import React from 'react';

import Projects from './../Molecules/Projects';

import ProjectA from "./../../assets/Project_A.png";
import ProjectB from "./../../assets/Project_B.png";
import ProjectC from "./../../assets/Project_C.gif";
import ProjectD from "./../../assets/Project_D.gif";

function ProjectList() {


    return (
        <div>
                <Projects 
                    projectImg={ProjectA}
                    projectImgB={ProjectB}
                />

                <Projects 
                    projectImg={ProjectC}
                    projectImgB={ProjectD}
                />
        </div>
    )
}

export default ProjectList
