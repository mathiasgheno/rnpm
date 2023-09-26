function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Clicked {count} times</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>RNPM - React with No Package Manager</h1>
      <p>This is a React Project that does not use any Package Maneger (Like NPM, PNPM, Yarn) to create a simples React Playground.</p>
      <Counter />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));