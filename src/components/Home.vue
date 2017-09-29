<template>
    <section class="post-list">
        <div class="container">

            <div class="jumbotron" v-for="post in posts">
                <div class="row">
                    <div class="col-sm-3">
                        <router-link :to="{ name: 'post-index', params: {id: post._id} }" class="thumbnail post-thumbnail">
                            <img src="http://placebeard.it/g/300/220" width="" height="">
                        </router-link>
                    </div>
                    <div class="col-sm-9 hidden-xs">
                        <div class="descr">
                            <h2>{{ post.title }}</h2>
                            <p class="post-list-body">{{ post.body }}</p>
                        </div>                        
                        <router-link :to="{ name: 'post-index', params: {id: post._id} }" class="preview">
                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </router-link>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>

const { HTTP } = require('./../services/http')

export default {
  name: 'home',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    HTTP.get('/post')
    .then((res) => { this.posts = res.data })
    .catch(function (err) {
      console.log(err)
    })
  }
}
</script>

