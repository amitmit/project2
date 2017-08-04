/**
 * FriendService
 */

app.factory('FriendService',function($http){
	var friendService={};
	
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:8080/backend1/suggesteduserslist")
	}
	
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:8080/backend1/friendrequest/"+toUsername);
	}
	
	friendService.pendingRequests=function(){
		return $http.get("http://localhost:8080/backend1/pendingrequests");
	}
	
	friendService.updatePendingRequest=function(fromId,status){
		return $http.put("http://localhost:8080/backend1/updatependingrequest/"+fromId+"/"+status);
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8080/backend1/listoffriends");
	}
	
	return friendService;
})
