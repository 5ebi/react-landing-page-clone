import styles from './App.module.css'; // Keep your local styles
import logo from './svg/logo.svg';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.header}>
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
      </header>

      <main>
        <div className={styles.wrapper}>
          <section>
            <a href="/">Learn about the Specify Design Token Format</a>

            {/* Apply gradient directly on the span */}
            <h1>
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
            <a href="/">Start for free</a>
          </section>

          <div className={styles.container_row}>
            <video
              className={styles.layer1}
              src="https://framerusercontent.com/assets/pSo8D917e0J1tbDXmiSXrdeHcY.mp4"
              loop
              muted
              autoPlay
            ></video>
            <video
              className={styles.layer2}
              src="https://framerusercontent.com/assets/jm7WGkaOefOXB61tZjv7cUhEsVE.webm"
              loop
              muted
              autoPlay
            ></video>
          </div>
        </div>
      </main>
    </>
  );
}
