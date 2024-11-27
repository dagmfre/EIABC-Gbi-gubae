import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import "../styles/FullPageWrapper.css";

/* 
 * This project uses fullpage.js under the terms of the GPLv3 license.
 * Fullpage.js is a JavaScript library to create full screen scrolling websites.
 * For more information, visit: https://github.com/alvarotrigo/fullPage.js
 */

const FullPageWrapper: React.FC = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      navigation: true,
      sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "#f90"],
      anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
      menu: "#menu",
      afterRender: () => {
        // Add fade effect to the horizontal carousel
        const horizontalSlides = document.querySelectorAll(".horizontal-slide");
        horizontalSlides.forEach((slide) => {
          slide.classList.add("fade");
        });
      },
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section">
        <div className="horizontal-carousel">
          <div className="horizontal-slide">Slide 1</div>
          <div className="horizontal-slide">Slide 2</div>
          <div className="horizontal-slide">Slide 3</div>
        </div>
      </div>
      <div className="section">
        <h2>Second Page</h2>
        <p>Sample text for the second page.</p>
      </div>
      <div className="section">
        <h2>Third Page</h2>
        <p>Sample text for the third page.</p>
      </div>
      <div className="section">
        <h2>Fourth Page</h2>
        <p>Sample text for the fourth page.</p>
      </div>
    </div>
  );
};

export default FullPageWrapper;