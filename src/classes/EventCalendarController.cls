public class EventCalendarController {

    @AuraEnabled
    public static list<event> getEvents(string eventType){
        if (eventType == null){
            return [select Id, ActivityDate, Subject, Description from Event where ActivityDate != null order By ActivityDate ASC];
        }        
        return [select Id, ActivityDate, Subject, Description from Event where ActivityDate != null order By ActivityDate ASC];
    }
}