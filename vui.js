var app = new Vue({
  el: '#app',
  data: {
    info : null,
    isLoading : true,
    isError : false,
    selectedUser : '',
    postData : null,
    isLoadingPosts : true,
    commentData : null,
  },
  watch : {
  selectedUser : function () {
  axios
  .get('https://jsonplaceholder.typicode.com/posts?userId=' + this.selectedUser.id)
  .then(response => (this.postData =response.data))
  .catch(error=> {console.log(error)})
  .finally(() => this.isLoadingPosts = false)
   }
  },
  methods : {
  getComments : function (id){
  	axios
    	.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then(response => (this.commentData =response.data))
  }
  },
  mounted () {
  axios
  	.get('https://jsonplaceholder.typicode.com/users')
    .then(response => (this.info = response.data))
    .catch(error => {console.log(error);this.isError = true})
    .finally(() => this.isLoading = false)
  }
})