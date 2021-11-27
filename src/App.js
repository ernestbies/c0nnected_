import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home/Home";
import ChatRoom from "./pages/ChatRoom/ChatRoom";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/chat-room'} component={ChatRoom}/>
          <Redirect from={'/*'} to={'/'}/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
