define(['utils/communicator'],
function(Communicator){
    'use strict';
	return Backbone.Model.extend({
		initialize: function() {
			console.log('initialize a <%= viewModelName %> model');
		},
		defaults: {}
	});
});
