import React, { useState, useEffect, useRef } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider
} from '@ionic/react';
//Ionicons
import { trashOutline,pencilOutline} from 'ionicons/icons';

import './To_do_list.css';

const To_do_list: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLIonInputElement>(null);

  // Add a new to-do when the "Add" button is clicked
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        const newTodos = [...todos];
        newTodos[editIndex] = newTodo;
        setTodos(newTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };

  
  // Clear the input field
  const clearInput = () => {
    setNewTodo('');
    if (inputRef.current) {
      inputRef.current.setFocus();
    }
  };

  // Remove a to-do when the delete button is clicked
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Set the input field for editing when a todo item is clicked
  const editTodo = (index: number) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
    if (inputRef.current) {
      inputRef.current.setFocus();
    }
  };

  // Focus on the new to-do input when the component mounts or after editing
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIndex]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
      </IonButtons>
          <IonTitle>To Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img className="To_do_list-img-header" alt="Silhouette of mountains" src="./src/assets/img/Todolist.jpeg" />
        <IonGrid>
          <IonRow>
            <IonCol>

             {/*Todo list output*/}
             <IonInput
             placeholder="Type task description here"
                  className='To_do_list-form'
                  id="custom-input"
                  label="Add task here..."
                  labelPlacement="floating"
                  counter={true}
                  maxlength={200}
                  counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} / ${maxLength} characters remaining`}
                  value={newTodo}
                  onIonInput={(e) => setNewTodo(e.detail.value!)}
                  ref={inputRef}
              ></IonInput>
              <IonRow>
                  <IonCol>
                  <IonButton expand="block" onClick={addTodo} > {editIndex !== null ? 'Update' : 'Add'}</IonButton>
                  </IonCol>
                  <IonCol> 
                  <IonButton  expand="block"fill="clear"  onClick={clearInput} >Clear</IonButton>
                  </IonCol>      
              </IonRow>    

              {/*Todo list output*/}
              <br></br>
              <IonItemDivider color="light">
                <IonLabel>The stuff you need to do</IonLabel>
              </IonItemDivider>
              <IonList>
                    {todos.map((todo, index) => (
                      <IonItem className="To_do_list-result" key={index}>
                        <IonInput
                          disabled={editIndex !== index}
                          value={todo}
                          onIonChange={(e) => setNewTodo(e.detail.value!)}
                        ></IonInput>
                        {editIndex === index ? (
                          <IonButton onClick={() => addTodo()}>
                            Done
                          </IonButton>
                        ) : (
                          <>
                            <IonButton onClick={() => editTodo(index)}>
                              <IonIcon icon={pencilOutline} />
                            </IonButton>
                            <IonButton onClick={() => removeTodo(index)}>
                              <IonIcon icon={trashOutline} />
                            </IonButton>
                          </>
                        )}
                      </IonItem>
                    ))}
              </IonList>
            
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default To_do_list;