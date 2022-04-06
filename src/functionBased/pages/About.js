import React from "react";
import { Link, useLocation   } from "react-router-dom";


const About = () => {
    const location = useLocation();
    //console.log(location)

    return (     
         <React.Fragment>
            <div className="about__header" >
                <h1>About Page</h1>
                <p>On this page you can find dynamic links where you can find more information on the Application as well as the Author.</p>
            </div>
            <div className="about__content">   
                <ul className="about__list">
                    <li>
                        <Link to={`${location.pathname}/about-app`}>About App</Link> {/* ${url} */}
                    </li>
                    <li>
                        <Link to={`${location.pathname}/about-author`}>About Author</Link> {/* ${url} */}
                    </li>
                </ul>
            </div>
        </React.Fragment>         
    )
}
export default About