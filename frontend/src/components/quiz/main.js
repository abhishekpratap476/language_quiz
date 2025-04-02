import React from 'react';
import {Link} from 'react-router-dom';
import './main.css'; // Import the CSS file

const CourseCatalog = () => {
    return (
        <div>
            <header >
        <div id="title"><h2>QuizLet</h2></div>
        <nav >
          <a href="/home" >Home</a>
          <a href="/quiz" >Quiz</a>
          <a href="/book" >Book Store</a>
          <a href="/translator" >Translator</a>
        </nav>
      </header>
            <div className="course-container">
                <div className="course-details">
                    <h2 className="course-title">Basic Wordes pranounseation</h2>
                    <p className="course-info">And Speaking part - 1</p>
                </div>
                <div className="arrow-button"><Link to="/quiz">></Link></div>
            </div>

            <div className="course-container">
                <div className="course-details">
                    <h2 className="course-title">Basic Wordes pranounseation</h2>
                    <p className="course-info">And Speaking part - 2</p>
                </div>
                <div className="arrow-button"><Link to="/quiz">></Link></div>
            </div>
        </div>
    );
};

export default CourseCatalog;