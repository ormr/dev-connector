import mongoose, { Model, model, Schema, Document } from 'mongoose';

export interface IPost extends Document {
  user?: string;
  text: string;
  name: string;
  avatar?: string;
  likes?: {
    user?: string;
  }[];
  comments?: {
    user?: string;
    text: string;
    avatar?: string;
    date?: Date;
  }[];
  date?: Date
}

const PostSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Post: Model<IPost> = model<IPost>('post', PostSchema);

export {
  Post
};