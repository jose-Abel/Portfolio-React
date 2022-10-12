import { useState, useEffect, Fragment } from "react";
import "./recent-works.styles.scss";

const RecentWorks = () => {
  const [recentWorks, setRecentWorks] = useState();

  useEffect(() => {
    const getRecentWorks = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        setRecentWorks(data);
      } catch(error) {
        console.log(error);
      }
    }
    getRecentWorks();
  }, []);

	return (
		<Fragment>
      {console.log(recentWorks)}
			<h2 className="recent-works-title"><span>My Recent Works</span></h2>
			<div className="main-work-box">
        <img src={`${recentWorks && recentWorks[0].main_img}`} className="main-work-image"/>
        <div className="main-work-text-box">
          <h3 className="main-work-text-title">{recentWorks && recentWorks[0].title}</h3>
          <p className="main-work-text-area">
          {recentWorks && recentWorks[0].description}
          </p>
          <ul className="main-work-text-skills-box">
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">Ruby</li>
            <li className="skill">Rails</li>
          </ul>

          <a className="see-project-button" href={`${recentWorks && recentWorks[0].see_code}`}>See the Code</a>

          <a className="see-project-button" href={`${recentWorks && recentWorks[0].live_version}`}> Live Version </a>
        </div>
      </div>
		</Fragment>
	);
}

export default RecentWorks;