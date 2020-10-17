import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IonApp, IonPage } from '@ionic/react';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { CardSelectionPage } from './pages/CardSelectionPage';
import { SelectedCardPage } from './pages/SelectedCardPage';


const App = () => {

  useEffect(() => {
    ScreenOrientation.lock(ScreenOrientation.ORIENTATIONS.PORTRAIT)
  }, [])

  return (
    <div className='App'>
      <IonApp>
        <IonPage>
          <Router>
            <Route exact path='/' component={CardSelectionPage} />
            <Route path="/selected" component={SelectedCardPage} />
          </Router>
        </IonPage>
      </IonApp>
    </div>
  );
}

export default App;
