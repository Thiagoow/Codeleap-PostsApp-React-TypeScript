import Logo from '../components/Logo/Logo'
import CountBtn from '../components/CountBtn/CountBtn'
// Images import:
import reactLogo from '../assets/img/react.svg'
import viteLogo from '../assets/img/vite.svg'

export default function App() {
  return (
    <div className="App">
      <div>
        <Logo link="https://vitejs.dev" name="vite" img={viteLogo} />
        <Logo link="https://reactjs.org" name="react" img={reactLogo} />
      </div>

      <h1>Vite + React</h1>

      <div style={{ padding: '2em' }}>
        <CountBtn />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p style={{ color: '#888' }}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
