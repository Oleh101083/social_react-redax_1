import React from 'react'
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'
import {upPostDialogCreator,
  upNewPostDialogCreator} from '../../redux/dialogsReducer'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {

let messageData = props.dialogsPage.posts.map(el=>(
            <MessageItem message={el.message}
              id={el.id} 
              countLike={el.countLike}
              key={el.toString()}
              />
))

let dialogData =  props.dialogsPage.messages.map(el=>(
                <DialogItem name={el.name}
                key={el.toString()}         
                id={el.id}
                />
))

let newPostElement = React.createRef()

let addPost = () => props.dispatch(upPostDialogCreator())
let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = upNewPostDialogCreator(text);
  props.dispatch(action);
}

    return (
        <div className={classes.wrapper}>
          
          <div className={classes.dialog}>
            { dialogData }
          </div>

          <div className={classes.messages}>
          <textarea 
          ref={ newPostElement } 
          value={props.dialogsPage.newPostText}
          onChange={onPostChange}
          ></textarea>
          <button onClick={ addPost }>Add post</button>
            { messageData }
          </div> 
        </div>
    )
}

export default Dialogs
