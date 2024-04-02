// Calculator.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import './Tab3.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleInput = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: 'light' }}>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonInput style={{ fontSize: '50px' }} value={input} readonly={true} className="ion-text-right" />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
              <IonButton id="btns" expand="full" color="light" onClick={handleClear}>C</IonButton>
            </IonCol>
            <IonCol size="6">
              <IonButton id="btns" expand="full" color="light" onClick={handleDelete}>DEL</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('7')}>7</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('8')}>8</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('9')}>9</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('/')}>/</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('4')}>4</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('5')}>5</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('6')}>6</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('*')}>*</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('1')}>1</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('2')}>2</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('3')}>3</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('-')}>-</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('.')}>.</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('0')}>0</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('00')}>00</IonButton>
            </IonCol>
            <IonCol size="3">
              <IonButton id="btns" expand="full" color="light" onClick={() => handleInput('+')}>+</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonButton id="btns" expand="full" color="light" onClick={handleCalculate}>=</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
