import React, {Component} from "react";
import { Title, TitleSmall } from "./styles";

class App extends Component {
  render(){
    return (
      <div>
        <Title fontSize={80}>Hello
        <span>Texto Menor</span>
        </Title>

        <TitleSmall>Menor</TitleSmall>
      </div>
    );
  }
}

export default App;
