
/**
 * job service
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.saveJob=function(job){
		return $http.post("http://localhost:8080/backend1/savejob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8080/backend1/getalljobs")
	}
	
	jobService.getJobById=function(id){
		return $http.get("http://localhost:8080/backend1/getjobbyid/"+id)
	}
	
	return jobService;
})
