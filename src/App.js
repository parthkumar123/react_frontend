import './App.css';
import { serverJson, serverTypeJson, serverLocationJson, serverSizeJson, serverImageJson } from './json/server';
import ServerGrid from './components/grid/server/server';
import ServerTypeGrid from './components/grid/server-type/server-type';
import ServerLocationGrid from './components/grid/server-location/server-location';
import ServerSizeGrid from './components/grid/server-size/server-size';
import ServerImageGrid from './components/grid/server-image/server-image';
import AutoBackupBox from './components/box/auto-backup-box';
import SshKeysGrid from './components/grid/ssh-keys/ssh-keys';
import ServerLabel from './components/input/server-label';

function App() {
  // Fetch server type component details
  const serverDetails = serverJson();
  const serverTypeDetails = serverTypeJson();
  const serverLocationDetails = serverLocationJson();
  const serverSizeDetails = serverSizeJson();
  const serverImageDetails = serverImageJson();

  return (
    <>
      <ServerGrid products={serverDetails} />
      <ServerTypeGrid items={serverTypeDetails} />
      <ServerLocationGrid items={serverLocationDetails} />
      <ServerImageGrid items={serverImageDetails} />
      <ServerSizeGrid items={serverSizeDetails} />
      {/* <AutoBackupBox /> */}
      <SshKeysGrid />
      <ServerLabel />
    </>
  );
}

export default App;
