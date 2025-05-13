import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

function App() {
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-dark"
         pubkey="1872d6826b7cf943674b"
      />
    </div>
  );
}

export default App;