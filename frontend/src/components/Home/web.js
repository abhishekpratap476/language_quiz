import React from 'react';
import './web.css';

const MainPage = () => {
  return (
    <div lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Main Page</title>
      </head>
      <body>
        {/* Navigation Section */}
        <header className="navbars">
        <div id="title"><h2>QuizLet</h2></div>
        <nav >
          <a href="/home" >Home</a>
          <a href="/corce" >Quiz</a>
          <a href="/book" >Book Store</a>
          <a href="/translator" >Translator</a>
        </nav>
        </header>

        {/* Main Content */}
        <main>
          <section className="content-section">
            <h1>Welcome to the Language Learning App</h1>
            <p>Explore the benefits and features of language learning!</p>

            {/* Informational Boxes */}
            <div className="info-boxes">
              <div className="box">
                <h3>Improves Communication</h3>
                <p>Learn new languages to enhance your communication skills.</p>
              </div>
              <div className="box">
                <h3>Cognitive Benefits</h3>
                <p>Boost memory and problem-solving abilities with language learning.</p>
              </div>
              <div className="box">
                <h3>Career Opportunities</h3>
                <p>Open doors to new job opportunities and career growth.</p>
              </div>
            </div>
          </section>

          {/* Result Progress Bar */}
          <section className="result-section">
            <h2>Quiz Result</h2>
            <div className="progress-bar">
              <div className="progress" id="progress" style={{ width: '0%' }}>0%</div>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
};

export default MainPage;