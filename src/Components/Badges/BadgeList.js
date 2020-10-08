// src/Badges/BadgeList.js
import React from "react";
import Badge from "./Badge";
import "./BadgeList.css"
import data from "../badge-data.json";


function BadgeList() {
  const badges = data.map(( { name, category, description, image }, i ) => {

    return (
      <Badge
        id={i}
        key={name}
        name={name}
        category={category}
        image={image}
        description={description}
      />
    );
  });

  return (
    <div>
      <h1>Badge List...</h1>
      <div className="BadgeList">
        { badges }
      </div>
    </div>
  )
}

export default BadgeList;

{
  /* <div class="container">

  <h1>GitHub</h1>
  <p>These badges were earned for achievements with GitHub</p>

  <div class="badge-gallery github">
    <img src="images/github/5-commits.png">
    <img src="images/github/10-commits.png">
    <img src="images/github/100-commits.png">
    <img src="images/github/5-day-streak.png">
    <img src="images/github/7-day-streak.png">
    <img src="images/github/2-week-streak.png">
    <img src="images/github/1-month-streak.png">
    <img src="images/github/1ST-pull-request.png">
    <img src="images/github/4th-pull-request.png">
    <img src="images/github/10th-pull-request.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>

  <h1>JavaScript</h1>
  <p>These badges were earned for achievements with JavaScript</p>

  <div class="badge-gallery javascript">
    <img src="images/js/js-level-1.png">
    <img src="images/js/js-level-2.png">
    <img src="images/js/js-level-3.png">
    <img src="images/js/js-level-4.png">
    <img src="images/js/js-level-5.png">
    <img src="images/js/js-level-6.png">
    <img src="images/js/js-level-7.png">
    <img src="images/js/js-level-8.png">
    <img src="images/js/js-level-9.png">
    <img src="images/other/o.png">
    <img src="images/js/js-level-10.png">
    <img src="images/other/o.png">
    <img src="images/other/js-tutorial-1.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>

  <h1>React</h1>
  <p>These badges were earned for achievements with React</p> 

  <div class="badge-gallery react">
    <img src="images/react/react-tutorial-tutorial.png">
    <img src="images/react/react-tutorial-fundamentals.png">
    <img src="images/react/react-tutorial-passwords.png">
    <img src="images/react/react-tutorial-timers.png">
    <img src="images/react/react-tutorial-weather.png">
    <img src="images/other/o.png">
    <img src="images/react/react-tutorial-tetris.png">
    <img src="images/other/o.png">
    <img src="images/react/react-tutorial-mastery.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>

  <h1>Computer Science</h1>
  <p>These badges were earned for achievements in Computer Science</p>

  <div class="badge-gallery cs">
    <img src="images/other/js-level-1.png">
    <img src="images/other/js-level-10 copy 2.png">
    <img src="images/other/js-level-10 copy.png">
    <img src="images/other/js-level-10.png">
    <img src="images/other/js-level-2.png">
    <img src="images/other/js-level-3.png">
    <img src="images/other/js-level-4.png">
    <img src="images/other/js-level-5.png">
    <img src="images/other/js-level-6.png">
    <img src="images/other/js-level-7 copy 2.png">
    <img src="images/other/js-level-7 copy 3.png">
    <img src="images/other/js-level-7 copy 4.png">
    <img src="images/other/js-level-7 copy 5.png">
    <img src="images/other/js-level-7 copy.png">
    <img src="images/other/js-level-7.png">
    <img src="images/other/js-level-8.png">
    <img src="images/other/js-level-9 copy 2.png">
    <img src="images/other/js-level-9 copy 3.png">
    <img src="images/other/o.png">
    <img src="images/other/js-level-9 copy 4.png">
    <img src="images/other/js-level-9 copy 5.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>

  <h1>Mobile</h1>
  <p>These badges were earned for achievements with Mobile Development</p>

  <div class="badge-gallery mobile">
    <img src="images/other/React Native Init Copy 2.png">
    <img src="images/other/react-redux-1.png">
    <img src="images/other/react-tutorial-0.png">
    <img src="images/other/react-tutorial-1.png">
    <img src="images/other/react-tutorial-18.png">
    <img src="images/other/react-tutorial-2.png">
    <img src="images/other/react-tutorial-3.png">
    <img src="images/other/react-tutorial-4.png">
    <img src="images/other/react-tutorial-5.png">
    <img src="images/other/react-tutorial-6.png">
    <img src="images/other/web 2 Express.png">
    <img src="images/other/react-redux-2.png">
  </div>

  <h1>Job Readiness</h1>
  <p>Earned for achievements in job preparation and interview practice.</p>

  <div class="badge-gallery job">
    <img src="images/other/react-tutorial-0.png">
    <img src="images/other/react-tutorial-1.png">
    <img src="images/other/react-tutorial-18.png">
    <img src="images/other/react-tutorial-2.png">
    <img src="images/other/react-tutorial-3.png">
    <img src="images/other/react-tutorial-4.png">
    <img src="images/other/react-tutorial-5.png">
    <img src="images/other/react-tutorial-6.png">
    <img src="images/other/Redux Badge.png">
    <img src="images/other/web 2 Express.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>

  <h1>Summer Academy</h1>

  <div class="badge-gallery sa">
    <img src="images/other/SA Hoppy Bunny.png">
    <img src="images/other/SA Launched to App Store.png">
    <img src="images/other/SA Make Notes.png">
    <img src="images/other/SA Makestragram.png">
    <img src="images/other/SA Peeved Penguins.png">
    <img src="images/other/SA Sushi Neko Tutorial.png">
    <img src="images/other/SA Swift OOP Tutorial (Games).png">
    <img src="images/other/SA Swift OOP Tutorial.png">
    <img src="images/other/SA Tip Calculator.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
    <img src="images/other/o.png">
  </div>


  <h1>Community</h1>
  <p>Earned for community input and support.</p>

  <div class="badge-gallery community">
    <img src="images/other/Artboard 3 Copy.png">
    <img src="images/other/Artboard 5 Copy 2.png">
    <img src="images/other/Artboard.png">
    <img src="images/other/Intro Challenge.png">
    <img src="images/other/JavaScript Map Filter Reduce Copy 4.png">
    <img src="images/other/JavaScript Map Filter Reduce.png">
    <img src="images/other/JS Map Filter Reduce Copy 2.png">
  </div>

  <h1>Social Justice</h1>
  <p>Earned for making provide support to the goals of social progress.</p>

  <div class="badge-gallery sj">
    <img src="images/other/Artboard 3 Copy.png">
    <img src="images/other/Artboard 5 Copy 2.png">
    <img src="images/other/Artboard.png">
    <img src="images/other/Intro Challenge.png">
    <img src="images/other/JavaScript Map Filter Reduce Copy 4.png">
  </div>

  <h1>Entrepreneurship</h1>
  <p>Earned for work on entrepreneurial goals.</p>

  <div class="badge-gallery ent">
    <img src="images/other/JavaScript Map Filter Reduce.png">
    <img src="images/other/JS Map Filter Reduce Copy 2.png">
    <img src="images/other/JS Map Filter Reduce.png">
    <img src="images/other/React Native Init Copy 2.png">
    <img src="images/other/react-redux-1.png">
    <img src="images/other/react-redux-2.png">
  </div>

</div> */
}