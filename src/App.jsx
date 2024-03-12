import React, { useState } from 'react';
import Header from './Component/Header';
import Container from './Component/Container';
import Display from './Component/Display';
import ButtonContainer from './Component/ButtonContainer';
import { Button } from './Component/Button';

function App() {
  const [disValue, setDisValue] = useState("");

  const onclickTextValues = (buttonLabel) => {
    if(buttonLabel==="="){
      String = eval(disValue);
      setDisValue(String);
    }
    else if(buttonLabel==='C')
    {
      setDisValue("");
    }
   else{
    console.log(buttonLabel); // Log the button label, not the event
    setDisValue(disValue + buttonLabel);
   }

  };
  
  return (
    <>
      <Header />
      <Container>
        <Display displayValue={disValue} />
        <ButtonContainer>
          <Button onClickTextValues={onclickTextValues} />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default App;
