import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonList, IonItem, IonLabel, IonCheckbox, IonInput, IonIcon, IonAlert } from '@ionic/react';
import { trashOutline, createOutline } from 'ionicons/icons';

const To_do_list: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editTodoText, setEditTodoText] = useState<string>('');
  const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
  const [deleteTodoId, setDeleteTodoId] = useState<number | null>(null);

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

  const deleteTodo = () => {
    if (deleteTodoId !== null) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== deleteTodoId));
    }
    setShowDeleteAlert(false);
  };

  const handleEditTodo = (id: number, text: string) => {
    setEditTodoId(id);
    setEditTodoText(text);
  };

  const saveEditedTodo = () => {
    if (editTodoId !== null && editTodoText.trim() !== '') {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
        )
      );
    }
    setEditTodoId(null);
    setEditTodoText('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="12" className="ion-text-center">
              <h1>Todo List</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonInput
                placeholder="Enter a task"
                value={newTodoText}
                onIonChange={(e) => setNewTodoText(e.detail.value!)}
              />
              <IonButton expand="block" onClick={addTodo}>Add Task</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="12">
              <IonList>
                {todos.map(todo => (
                  <IonItem key={todo.id}>
                    {editTodoId === todo.id ? (
                      <IonInput
                        value={editTodoText}
                        onIonChange={(e) => setEditTodoText(e.detail.value!)}
                        onBlur={saveEditedTodo}
                        autoFocus
                      />
                    ) : (
                      <>
                        <IonLabel
                          style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            flex: 1
                          }}
                          onClick={() => handleEditTodo(todo.id, todo.text)}
                        >
                          {todo.text}
                        </IonLabel>
                        <div className="ion-text-end">
                          <IonButton fill="clear" onClick={() => handleEditTodo(todo.id, todo.text)}>
                            <IonIcon icon={createOutline} />
                          </IonButton>
                          <IonButton fill="clear" onClick={() => {
                            setDeleteTodoId(todo.id);
                            setShowDeleteAlert(true);
                          }}>
                            <IonIcon icon={trashOutline} />
                          </IonButton>
                        </div>
                      </>
                    )}
                    <IonCheckbox
                      slot="start"
                      checked={todo.completed}
                      onIonChange={() => toggleTodo(todo.id)}
                    />
                  </IonItem>
                ))}
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonAlert
          isOpen={showDeleteAlert}
          onDidDismiss={() => setShowDeleteAlert(false)}
          header={'Confirm Deletion'}
          message={'Are you sure you want to delete this task?'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                setDeleteTodoId(null);
              }
            },
            {
              text: 'Delete',
              handler: deleteTodo
            }
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default To_do_list;
