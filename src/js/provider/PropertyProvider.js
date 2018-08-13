import React from 'react';

const Properties = [
  {"Default Title 1" : "Aaron's test case 1"}
]

export const PropertyContext = React.createContext({
  properties: Properties,
  title: "Homepage"
});


