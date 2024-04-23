import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonIcon } from '@ionic/react';
import { trashOutline, createOutline } from 'ionicons/icons';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const To_do_list: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          text: newTodoText,
          completed: false
        }
      ]);
      setNewTodoText('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary"> {/* Change the toolbar color */}
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#f0f0f0' }}>
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <h1>Todo List</h1> {/* Add a heading */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonInput
                placeholder="Enter a task"
                value={newTodoText}
                onIonChange={(e) => setNewTodoText(e.detail?.value || '')}
              />
              <IonButton expand="block" color="success" onClick={addTodo}>Add Task</IonButton> {/* Change button color */}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonList>
                {todos.map(todo => (
                  <IonItem key={todo.id}>
                    <IonLabel className={todo.completed ? 'completed' : ''}>{todo.text}</IonLabel> {/* Add class for completed tasks */}
                    <div className="ion-text-end">
                      <IonButton fill="clear" onClick={() => editTodo(todo.id, prompt("Edit task:", todo.text) || todo.text)}>
                        <IonIcon icon={createOutline} />
                      </IonButton>
                      <IonButton fill="clear" onClick={() => deleteTodo(todo.id)}>
                        <IonIcon icon={trashOutline} />
                      </IonButton>
                    </div>
                    <IonCheckbox slot="start" checked={todo.completed} onIonChange={() => toggleTodo(todo.id)} />
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
