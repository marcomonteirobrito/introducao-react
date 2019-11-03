import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
    state = {
        posts: [
            {
              id: 1,
              author: {
                name: "Marco Antonio",
                avatar: 'https://i.pravatar.cc/150?img=8'
              },
              date: "02/11/2019",
              content: "Oque irei aprender com o bootcamp da Rocketseat?",
              comments: [
                {
                  id: 2,
                  author: {
                    name: "Diego Fernandes",
                    avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                  },
                  content: "Você irá aprender NodeJS, ReactJS e React Native"
                }
              ]
            },
            {
                id: 2,
                author: {
                  name: "Marco Antonio",
                  avatar: 'https://i.pravatar.cc/150?img=8'
                },
                date: "03/11/2019",
                content: "Qual framework usaremos nos estudos de NodeJS?",
                comments: [
                  {
                    id: 3,
                    author: {
                      name: "Diego Fernandes",
                      avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
                    },
                    content: "Usaremos o Express.JS como framework"
                  }
                ]
              }
        ]
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="postlist">
                {posts.map(post => (<PostItem key={post.id} {...post} />))}
            </div>
        );
    }
}

export default PostList;