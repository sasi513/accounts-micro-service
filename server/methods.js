Meteor.methods({
	
	getUserEmailFromId: function( id ){
		check(id, String);
	}
});