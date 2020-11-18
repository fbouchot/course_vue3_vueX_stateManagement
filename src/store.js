import { createStore } from 'vuex'
import { testPosts } from './testPosts.js'

const delay = () => new Promise(res => 
    setTimeout(res, 1000));

const posts = {
    namespaced: true,
    state() {
        return {
            count: 0,
            currentPostId: null,
            currentPost: null
        }
    },
    mutations: {
        setPostId(state, id){
            state.currentPostId = id
        },
        setPost(state, post) {
            state.currentPost = post

        },
        increment(state, number) {
            state.count += number;
        }
    },
    actions: {
        async fetchDataFromServer(context, id) {            
            await delay();

            const post = testPosts.find(post => post.id === id);

            context.commit('setPostId', id);
            context.commit('setPost', post);
            
        }
    }
};

export const store = createStore({
    modules: {
        posts
    }
});