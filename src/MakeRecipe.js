import React, { Component } from 'react'
import { CreateRecipe, RecipeBar } from "./ui-components";
import "./App.css";

class MakeRecipe extends Component {
    render(){
        return (<Put />);
    }
}

  function Put() {
    return (
      <div><header className="App-header">
        <RecipeBar/>
        <CreateRecipe style={{ textAlign: "left"}} />
        </header></div>
      );
    }

export default MakeRecipe