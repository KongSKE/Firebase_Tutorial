
// App.js
import React, { Component } from 'react';
import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var firebaseConfig = {
    apiKey: "AIzaSyAafvChcmtB_NiNvzK5mJp6uVpuTVI9Mjk",
    authDomain: "fir-realtimeweb-69681.firebaseapp.com",
    databaseURL: "https://fir-realtimeweb-69681.firebaseio.com",
    projectId: "fir-realtimeweb-69681",
    storageBucket: "",
    messagingSenderId: "651691851291",
    appId: "1:651691851291:web:50b4e0bf554e0888"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
render() {
  return (
    <div className="container">
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;