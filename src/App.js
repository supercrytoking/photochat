import React, {useEffect} from 'react';
import './App.css';
import WebCamCapture from "./WebCamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import {selectUser} from "./features/appSlice";
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      
    })
  },[])

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <div className="app__body">
            <Switch>
              <Route path="/chats/view"> 
                <ChatView />
              </Route>
              <Route path="/chats"> 
                <Chats />
              </Route>
              <Route path="/preview"> 
                <Preview />
              </Route>
              <Route exact path="/"> 
                <WebCamCapture />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
