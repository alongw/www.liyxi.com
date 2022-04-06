/*
 * @Author: litfa
 * @Date: 2022-04-05 16:42:30
 * @LastEditTime: 2022-04-06 17:53:33
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /blog/src/components/Comments/CommentChildItem/props.ts
 * 
 */
export default {
  id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  parent: {
    type: Number
  },
  father: {
    type: Number
  },
  parentUsername: {
    type: String
  },
  children: {
    type: Array
  }
}