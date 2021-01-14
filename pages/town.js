import Head from 'next/head'
import { withRouter } from 'next/router'
import "regenerator-runtime/runtime"
import { GameEngine } from 'react-game-engine'
import styles from '../styles/Home.module.css'

import CursorSystem from '../systems/cursor'
import ButtonSystem from '../systems/button'
import LayoutSystem from '../systems/layout'
import SceneSwitchSystem from '../systems/sceneSwitch'

import { entities } from '../scenes/town'

const Town = ({ router }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Town</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/VPPixel-Simplified.otf" as="font" crossOrigin="" />
      </Head>

      <main className={styles.main}>
        <GameEngine
          className={styles.game}
          style={{ width: '100vw', height: '100vh', backgroundColor: 'black', position: 'relative' }}
          systems={[
            CursorSystem,
            ButtonSystem,
            LayoutSystem,
            SceneSwitchSystem(router),
          ]}
          entities={entities()}
        />
      </main>
    </div>
  )
}

export default withRouter(Town);
