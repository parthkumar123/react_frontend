import './App.css';
import { serverJson, serverTypeJson, serverLocationJson, serverSizeJson } from './json/server';
import ServerGrid from './components/grid/server/server-grid.jsx';
import ServerTypeGrid from './components/grid/server-type-grid/server-type-grid';
import ServerLocationGrid from './components/grid/server-location-grid/server-location-grid';
import ServerSizeGrid from './components/grid/server-size-grid/server-size-grid';

function App() {
  // Fetch server type component details
  const serverDetails = serverJson();
  const serverTypeDetails = serverTypeJson();
  const serverLocationDetails = serverLocationJson();
  const serverSizeDetails = serverSizeJson();

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
      <div>
        <h1>Server Location</h1>
        <ServerLocationGrid items={serverLocationDetails} />
      </div>
      <div>
        <h1>Server Size</h1>
        <ServerSizeGrid items={serverSizeDetails} />
      </div>
    </>
  );
}

export default App;
