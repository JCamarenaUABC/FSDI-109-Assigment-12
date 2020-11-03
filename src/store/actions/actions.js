// action: an arrow fn that return an object

//object contains a type (desc) of action, and payload (data)

export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

/*
create Cart component
add route
display h1
*/
