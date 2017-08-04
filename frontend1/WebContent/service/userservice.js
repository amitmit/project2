app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8080/backend1/registration",user)
		
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8080/backend1/login",user)
		
	}
	
	userService.logout=function(){
		return $http.get("http://localhost:8080/backend1/logout")
	}
	
	userService.getUserByUsername=function(){
		return $http.get("http://localhost:8080/backend1/getuserdetails")
	}
	
	userService.updateUserProfile=function(user){
		return $http.put("http://localhost:8080/backend1/updateprofile",user)
	}
	
	
	
	return userService;
	
})