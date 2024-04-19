import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import { pulseOutline, calculatorOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const goToClickCounter = () => {
    history.push('/click_counter');
  };

  const goToCalculator = () => {
    history.push('/calculator');
  };

  const goToToDoList = () => {
    history.push('/to_do_list');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center"> {/* Centering content */}
        <IonCard id="card1" onClick={goToClickCounter} style={{ width: '350px', cursor: 'pointer' }} color="danger">
              <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={pulseOutline} slot="start" /> */}
                  <img alt="" id="click_counter" src="../src/assets/img/click_counter.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-danger)', color: 'danger', padding: 0 }}>
                  Click Counter
                </div>
              </IonCardContent>
            </IonCard>
  
  
        <IonCard id="card2" onClick={goToCalculator} style={{ width: '350px', cursor: 'pointer' }} color="warning">
        <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={pulseOutline} slot="start" /> */}
                  <img alt="" id="click_counter" src="../src/assets/img/calculator.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-warning)', color: 'white', padding: 0 }}>
                  Calculator
                </div>
              </IonCardContent>
            </IonCard>
          
          <IonCard id="card3" onClick={goToToDoList} style={{ width: '350px', cursor: 'pointer' }} color="warning">
          <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={pulseOutline} slot="start" /> */}
                  <img alt="" id=" To_do_list" src="../src/assets/img/To_do_list.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-success)', color: 'white', padding: 0 }}>
                  Todo List
                </div>
              </IonCardContent>
            </IonCard>
  
          <IonCard id="card4" style={{ width: '350px' }} color="dark">
          <IonCardContent style={{ height: '70px', fontSize: '30px', display: 'flex', alignItems: 'center', padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '20%', backgroundColor: 'var(--ion-color-light)', padding: 0 }}>
                  {/* <IonIcon icon={pulseOutline} slot="start" /> */}
                  <img alt="" id="blank" src="../src/assets/img/blank2.gif" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px', flex: '80%', backgroundColor: 'var(--ion-color-primary)', color: 'white', padding: 0 }}>
                  Blank
                </div>
              </IonCardContent>
            </IonCard>

        </div>
      </IonContent>
    </IonPage>
  );
  
};

export default Home;
