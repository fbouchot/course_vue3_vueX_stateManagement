<template>  
Count: {{ count }}
<button @click="increment">Increment</button>
<br>

<button
v-for="post in posts"
:key="post"
@click="fetchPostData(post.id)">
{{ post.title }}
</button>
<br>
<br>
<div v-if="currentPost">
<h1>{{ currentPost.title }}</h1>
<p>{{ currentPost.content }}</p>
</div>


</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {  
    setup() {
        const store = useStore();

        const fetchPostData = (id) => {
            store.dispatch('posts/fetchDataFromServer', id)
        };

        const increment = () => store.commit('posts/increment', 2);

        const currentPost = computed(() => {
            return store.state.posts.currentPost
        });

        const count = computed(() => {
            return store.state.posts.count
        });
        
        return {
            count,
            currentPost,
            fetchPostData,
            increment,
            posts: [
                {
                    id: 1,
                    title: 'post #1'
                },
                {
                    id: 2,
                    title: 'post #2'
                }
            ]
        }
    }
}
</script>
