import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
// import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutMe /> */}
      <Projects /> 
    </div>
  );
};

export default App;