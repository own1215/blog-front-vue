<template>
    <div class="container">
        <b-button @click="showEditModal">
            Edit Post
        </b-button>

        <b-button @click="showRemoveModal">
            Remove
        </b-button>
    
        <div class="row" v-if="post">
            <div class="col-xs-12 text-center">
                <h1>{{ post.title }}</h1>
            </div>
            <div class="col-xs-3">
                <div class="thumbnail post-thumbnail">
                    <img src="http://placebeard.it/g/300/220" width="" height="">
                </div>
            </div>
            <div class="col-xs-6">{{ post.body }}</div>
        </div>

        <b-modal ref="editUserModal" 
            title="Post Edit"
            @ok="editUser"
            size="lg"
            v-if="post"
            >
            <form @submit.stop.prevent="handleSubmit">
                <div class="form-group">
                    <label for="post-title-modal" class="form-control-label">Title:</label>
                    <b-form-input
                            id="post-title-modal" 
                            type="text"
                            placeholder="Enter post title"
                            v-model="post.title">
                    </b-form-input>
                </div>
                
                <div class="form-group">
                    <label for="post-body-modal" class="form-control-label">Content:</label>
                    <b-form-textarea id="post-body-modal"
                        v-model="post.body"
                        placeholder="Enter post body"
                        :rows="10"
                        :max-rows="12">
                    </b-form-textarea>
                </div>
            </form>
        </b-modal>

        <b-modal ref="removeModal" hide-footer title="Remove Post">
            <div class="d-block text-center">
                <h3>Remove</h3>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="removePost">Ok</b-btn>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideRemoveModal">Cancel</b-btn>            
        </b-modal>

    </div>
</template>

<script>
const { HTTP } = require('./../../services/http')

export default {
  name: 'PostIndex',
  data () {
    return {
      post: null
    }
  },
  mounted () {
    HTTP.get('post/' + this.$route.params.id)
    .then((res) => {
      this.post = res.data[0]
    })
    .catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    showEditModal () {
      this.$refs.editUserModal.show()
    },
    hideModal () {
      this.$refs.editUserModal.hide()
    },
    editUser () {
      HTTP.put('/post/' + this.$route.params.id, this.post)
      .then((res) => {
        this.post = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    },
    showRemoveModal () {
      this.$refs.removeModal.show()
    },
    hideRemoveModal () {
      this.$refs.removeModal.hide()
    }
  }
}
</script>
