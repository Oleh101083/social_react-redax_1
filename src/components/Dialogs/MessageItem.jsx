import React from 'react'

const MessageItem = props =>{
  return <div>
              {props.id}.&emsp;
              {props.message}
              <span>{props.countLike}&nbsp;likes</span>
          </div>
}

export default MessageItem
