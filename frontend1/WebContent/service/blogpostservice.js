/**
 *blogpostservice
 */

app.factory('BlogPostService',function($http){
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8080/backend1/saveblogpost",blogPost)
	}
	
	blogPostService.blogsApproved=function(){
		return $http.get("http://localhost:8080/backend1/listofblogs/"+1)
	}
	
	blogPostService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8080/backend1/listofblogs/"+0)
	}
	
	blogPostService.getBlogPost=function(id){
		return $http.get("http://localhost:8080/backend1/getblogpost/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogpost){
		return $http.put("http://localhost:8080/backend1/updateblogpost",blogpost)
	}
	
	blogPostService.addComment=function(blogComment){
		return $http.post("http://localhost:8080/backend1/addblogcomment",blogComment)
	}
	
	blogPostService.getBlogComments=function(blogId){
		return $http.get("http://localhost:8080/backend1/getblogcomments/"+blogId)
	}
	return blogPostService;
})
