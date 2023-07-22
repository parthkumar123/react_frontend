import './App.css';
import { serverJson, serverTypeJson } from './json/server';
import ServerGrid from './components/grid/server/server-grid.jsx';
import ServerTypeGrid from './components/grid/server-type-grid/server-type-grid';

function App() {
  // Fetch server type component details
  const serverDetails = serverJson();
  const serverTypeDetails = serverTypeJson();

  return (
    <>
      <div>
        <h1>Choose Server</h1>
        <ServerGrid products={serverDetails} />
      </div>
      <div>
        <h1>Server Type</h1>
        <ServerTypeGrid items={serverTypeDetails} />
      </div>
    </>
  );
}

export default App;
