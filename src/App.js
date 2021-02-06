import React from 'react'
import './App.css';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import FIleview from './components/fileview/Fileview'

const App = ()=>{
    return(
        <div className="App">
            {/* auth */}
                <Header profilePhoto="jununu" />

               <div className="app__main">
                   <Sidebar profilePhoto="okijuh"/>
                   <FIleview />
               </div>
            {/* no auth */}
            
        </div>
    );
}

export default App;


