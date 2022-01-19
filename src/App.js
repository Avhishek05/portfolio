import { useEffect, useState } from 'react';
import './App.css';
import { constants } from './const';

function App() {

  return (
    <div className="App">
      <h2>Hi, I am {constants.name}</h2>

      <h5>Libraries / Frameworks I have worked on</h5>
      ReactJS, ReactNative NodeJs
	PHP, Git, AngularJS, Firebase, MongoDB, MySQL, GraphQL, ChartIQ
					ExpressJS, FeathersJS, TypeScript, Python, C++   
      <h5>Education</h5>
• Indian Institute of Information Technology Kota,	  2015 – 2019<br/>
• B. Tech, Computer Science and Engineering, CGPA: 6.46/10<br/>
• M.B.V.B, Kota	<br/>			                                             				  
• Senior Secondary School, RBSC, 85.20%,  2014<br/> 
• Secondary School, RBSC, 83.17%,    2012                                                                                                       

      <h5>Contact with me here</h5>
      <p><a href="https://stackoverflow.com/users/7435489/abhi" target={'_blank'}>Stackoverflow</a></p>
      <p><a href="https://twitter.com/avhishek_ydv" target={'_blank'}>Twitter</a></p>
      <p><a href="https://www.instagram.com/avhishek_ydv" target={'_blank'}>Instagram</a></p>
  
    </div>
  );
}

export default App;
