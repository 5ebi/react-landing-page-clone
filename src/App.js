import { useRef, useState } from 'react';
import styles from './App.module.css';
import logo from './svg/logo.svg';

export default function App() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const [isVideo2Visible, setIsVideo2Visible] = useState(false); // State to track video 2 visibility

  const handleVideoEnd = () => {
    setIsVideo2Visible(true); // No need to check video2Ref.current here
    video2Ref.current.play(); // Play the second video when the first ends
  };
  return (
    <div className={styles.wrapper}>
      {/* HEADER*/}
      <header>
        <div className={styles.heading}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <nav>
            <ul>
              <li>
                <a href="/">Solutions</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </nav>
          <div>
            <a className={styles.headerButtonLeft} href="/">
              Sign in
            </a>
            <a className={styles.headerButtonRight} href="/">
              Start for free
            </a>
          </div>
        </div>
        <hr
          style={{
            height: '0.1px',
            backgroundColor: '#ccc',
            border: 'none',
            marginBottom: '80px',
          }}
        />
      </header>
      {/* MAIN PART*/}
      <main>
        <div className={styles.wrapper}>
          <a className={styles.buttonLearn} href="/">
            Learn about the Specify Design Token Format
          </a>

          {/* Apply gradient directly on the span */}
          <h1 className={styles.h1Margin}>
            <span
              style={{
                backgroundImage:
                  'linear-gradient(270deg, rgb(110, 86, 207) 0%, rgb(249, 209, 255) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: '64px',
              }}
            >
              Your Design Token Engine
            </span>
          </h1>

          <p>
            Flexible and powerful, Specify makes it easy to build the exact
            <br />
            Design Token workflow your Design System needs.
          </p>
          <a className={styles.buttonStartForFree} href="/">
            Start for free
          </a>

          <div style={{ padding: '20px' }} />

          {/* VIDEOS*/}

          <div className={styles.containervids}>
            <video
              ref={video1Ref}
              className={styles.layer1}
              src="https://framerusercontent.com/assets/jm7WGkaOefOXB61tZjv7cUhEsVE.webm"
              muted
              autoPlay
              playsInline
              onEnded={handleVideoEnd} // Call when video ends
            />
            <video
              ref={video2Ref}
              className={`${styles.layer2} ${
                isVideo2Visible ? styles.visible : ''
              }`}
              src="https://framerusercontent.com/assets/pSo8D917e0J1tbDXmiSXrdeHcY.mp4"
              muted
              playsInline
              loop
            />
          </div>
        </div>
      </main>
    </div>
  );
}
