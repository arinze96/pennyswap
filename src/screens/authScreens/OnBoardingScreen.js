
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

export default function OnBoardingScreen() {
    const [isSelected, setSelected] = useState(false);
    return (
   <CheckBox
     title = "i accept the terms and conditions"
     checkedIcon="check"
     uncheckedColor="square-o"
     checkedColor="green"
     uncheckedColor="red"
     checked={isSelected}
     onPress={() => {
         setSelected(!isSelected)
     }}
   />
    );
  }

