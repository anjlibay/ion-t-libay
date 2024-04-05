import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from '@ionic/react';
import { camera, videocam, albums, notifications, chatbox, person } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr></hr>
        <IonToolbar>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={chatbox} />
          </IonButton>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={notifications} />
          </IonButton>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={person} />
            {/* <img src="../src/assets/img/profile" id="profile" alt="profile" /> */}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Post Section */}
        <IonList>
          {/* Post Status */}
          <IonItem>
            <IonAvatar slot="start">
              <img src="../src/assets/img/home-page-png.jpg" alt="profile" />
            </IonAvatar>
            <IonTextarea auto-grow placeholder="What's on your mind?" />
          </IonItem>
          {/* End Post Status */}

          {/* Add more posts here */}

        </IonList>

        {/* Photos, Videos, and Reels Section */}
        <IonFooter>
          <IonToolbar>
            <IonButton color="danger" slot="start">
              <IonIcon icon={camera} />
              <IonText>Photos</IonText>
            </IonButton>
            <IonButton color="primary" slot="start">
              <IonIcon icon={videocam} />
              <IonText>Videos</IonText>
            </IonButton>
            <IonButton color="primary" slot="start">
              <IonIcon icon={albums} />
              <IonText>Reels</IonText>
            </IonButton>
          </IonToolbar>

          <IonToolbar color="light">
            <img src="../src/assets/img/PROFILE_PIC.png" alt="profile" />
            <IonText style={{ textAlign: 'center' }}>
            Welcome to Gelay's property😊❤️
            </IonText>

          </IonToolbar>

        </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;