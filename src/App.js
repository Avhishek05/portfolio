import './App.css';
import { constants } from './const';

function App() {

  const twitter = 'https://twitter.com/avhishek_ydv';
  const linkedIn = 'https://www.linkedin.com/in/avhishekydv/';
  const instagram = 'https://www.instagram.com/avhishek_ydv';
  const stackoverflow = 'https://stackoverflow.com/users/7435489/abhi';

  return (
    <div className="App">
      <div className="Portfolio-Page">
        <div id='home' className='sec1'>
          <div className='fluid'>
            <section>
              <div style={{ paddingLeft: 100, }}>
                <h3>About me:</h3>
                <p>{constants.description.summary}</p>
                <h3>Languages/Libraries</h3>
                <p>{constants.description.tools}</p>
                <h3>{'Fav. Movies & Tv Shows'}</h3>
                <p>{constants.description.passion}</p>
              </div>
            </section>
          </div>
        </div>{/*end sec1*/}
        <div id='portfolio' className='sec3'>
          <div className='fluid portfolio'>
            <h3 className='portfolioHead'>Projects I have worked on</h3>
          </div>
          <div className='fluid portfolio' style={{ marginBottom: 50 }}>
            <p style={{ fontSize: '1.5em' }} className='portfolioHead'>Chat Applications, Call center application, Pricing & Promotions applications, No code applications</p>
          </div>
          <div id='contact' className='fluid contact-view'>
            <div className='center'>
              <a target='_blank' href={twitter} className='social-button'>
                Twitter
              </a>
              <a target='_blank' href={stackoverflow} className='social-button'>
                Stackoverflow
              </a>
              <a target='_blank' href={linkedIn} className='social-button'>
                LinkedIn
              </a>
              <a target='_blank' href={instagram} className='social-button'>
                Instagram
              </a>
            </div>
          </div>
        </div>{/*end sec 3*/}
      </div>
    </div>
  );
}

export default App;
