import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Routes, Route } from 'react-router-dom'
import MakeRecipe from './MakeRecipe'
import EditRecipe from './EditRecipe'
import { 
  RecipeCollection,
  RecipeBar,
  Recipe
} from './ui-components';

class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Routes>
        <Route exact path='/' element={<div><RecipeBar/></div>} />
        <Route exact path='/list' element={<RecipeCollection/>}/>
        <Route exact path='/new' element={<MakeRecipe/>} />
        <Route exact path='/edit/:cid' element={<EditRecipe/>} />
      </Routes>
      </header></div>
    );
}
}

// function App({ signOut }) { 
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button onClick={signOut}>Logout</button>
//       </header>
//     </div>
//   );
// }

export default withAuthenticator(App);