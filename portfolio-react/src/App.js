import React from 'react';
import Header from './components/Header'
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <React.Fragment>
      <Header />
      <div className="mainContainer">
        <h1>Front-end Developer</h1>
        <p>curious, restless, and eager to learn</p>
        <img className="avatar" src="https://avatars0.githubusercontent.com/u/44821883?s=460&v=4"/>
        <div className="bio">
        <h2>Hi I´m Agus</h2>
        <p>I´m extremely motivated to constantly develop my skills and grow professionally, this led me to explore the IT industry and
        become a frontend developer. My experience allowed me to develop an analytical and logical profile with excellent organizational skills.</p>
        </div>
        <div className="skillsWrapper">
        <Skills skillsDescription="Bla bla bla bla bla" />
        <Skills skillsDescription="Front-end Developer
        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
        Languages I speak:
        HTML, CSS, Sass, Javascript, React.js, Node.js
        Dev Tools:
        Visual Studio
        Github
        Terminal" />       
        <Skills skillsDescription="Bla bla bla bla bla" />
        </div>
        <h2>My recent work</h2>
        <p>Here are a few recent design projects. Want to see more? Email me.</p>
        <div className="projectsWrapper">
        <Projects imageURL="http://www.matiasriccitelli.com/site/es/img/menuvinos/father.jpg" />
        <Projects imageURL="https://d5mmbfro0itui.cloudfront.net/prod/image/2019/06/18/69a321b994.jpg"/>
        <Projects imageURL="https://www.polaroideyewear.com/content/dam/polaroidsite/00_Varie/02_SS19/SS19_wrapper_1920x462.jpg"/>
      </div>
      </div>
      </React.Fragment>
      </div>
    );
  }
}


export default App;
