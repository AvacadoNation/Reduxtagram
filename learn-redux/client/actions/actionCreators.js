//increment
//action is an object with information about...
//think of actions as just regular js events that get fired off
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment(postId, author, comment) {
    return { 
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
//i = what comment to remove
export function removeComment(postId, i) {
return{
    type: 'REMOVE_COMMENT',
    i, postId
}
 }