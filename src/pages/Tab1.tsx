import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
              <img alt="Silhouette of mountains" src="../src/assets/image/profile.png" />
              <IonCardHeader>
                <IonCardTitle>Student</IonCardTitle>
                <IonCardSubtitle>Angelay Libay</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent> There are always flowers for those who want to see them.</IonCardContent>
        </IonCard>

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
