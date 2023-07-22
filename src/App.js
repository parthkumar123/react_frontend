import './App.css';
import { serverJson, serverTypeJson, serverLocationJson, serverSizeJson } from './json/server';
import ServerGrid from './components/grid/server/server.jsx';
import ServerTypeGrid from './components/grid/server-type/server-type';
import ServerLocationGrid from './components/grid/server-location/server-location';
import ServerSizeGrid from './components/grid/server-size/server-size';
// import ServerImageGrid from './components/grid/server-image/server-image';

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
      {/* <div>
        <h1>Server Image</h1>
        <ServerSizeGrid items={serverSizeDetails} />
      </div> */}
    </>
  );
}

export default App;
