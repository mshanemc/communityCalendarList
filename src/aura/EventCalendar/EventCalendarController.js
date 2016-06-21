({
	doInit : function(component) {
        console.log("doing init");
		var action = component.get("c.getEvents");
        
        action.setParams({
            "eventType" : component.get("v.eventType")          
        });
        
        action.setCallback(this, function(a){
           console.log(a.getReturnValue());
           component.set("v.results", a.getReturnValue()); 
        });
	
        $A.enqueueAction(action);
	}
})