/**
 * https://letsencrypt.org/docs/client-options/
 * https://certbot.eff.org/lets-encrypt/osx-other
 * https://stackoverflow.com/questions/7576217/assigning-a-domain-name-to-localhost-for-development-environment
 * tutorial: get SSL cert using certbot + react/ node - https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca
 * 
 */
import React, {
  Component
} from 'react';

const APP_NAME = "test" // foldername
const BASE_URL = "https://supermario.io"
const IPA_URL = `${BASE_URL}/apps/${APP_NAME}/app.ipa` // IPA_URL -> manifest.json: points to path of *.ipa file
const MANIFEST_URL = `${BASE_URL}/apps/${APP_NAME}/manifest.plist` // URL to manifest.plist of the app
const OTA_URL = `itms-services://?action=download-manifest&url=${MANIFEST_URL}` // download link


class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <p>
            Airdropping .ipa files
          </p>
          <p>
            powered by supermario V2
          </p>

          <a
            href={IPA_URL}
            target="_new"
            rel="noopener noreferrer"
          >
            {IPA_URL}
          </a>
          <br>
          </br>
          <br>
          </br>
          <a
            href={OTA_URL}
            target="_new"
            rel="noopener noreferrer"
          >
            {OTA_URL}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
