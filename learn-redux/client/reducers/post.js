//a reducer takes in two things 
// 1. it takes in an action ( info about what happened)
// 2. a copy of the current state

//every reducer runs when state changed - up to you if it does anything
 function posts(state=[], action) {
     console.log("The post will change");
    console.log(state, action);
    return state;
}

export default posts;