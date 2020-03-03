import React from 'react';


export default function Blank(props) {
  let display;
  if (props.showMe){
    display = props.secret
  } else {
    display = "_"
  }

  return (
    <h1>{display}</h1>
  )
}

//TODO create underline blankspace that knows the secret letter based on the props
