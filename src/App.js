import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Feed from './components/Feed/Feed';
import Profile from './components/Feed/profile/Profile'
import Sidebar from './components/sidebar/Sidebar';
import Widget from './components/rightsidebar/Widget';
import MobileNav from './components/sidebar/MobileNav/MobileNav'

// function PrevRefs(val){
//   const refVal = useRef()
//   useEffect(() => {
//     refVal.current = val
//   })
//   return refVal.current
// }

function App(props) {
  
  return (
    <div className="app">
      {/* sidebar */}
      <div className="sidebar_section">
        <Sidebar />
      </div>

      {/* feed */}
      <div className="mid_feed_section" >
        <Switch>
          <Route exact path='/' render={() => <Feed /> } />
          <Route exact path='/profile' render={() => <Profile />} />
        </Switch>
      </div>

      {/* widgets */}
      <div className="widget_section">
        <Widget />
      </div>

      {/* mobile view bar */}
      <div className="mobile_nav_section">
        <MobileNav />
      </div>
    </div>
  );
}

export default App;
