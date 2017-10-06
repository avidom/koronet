var admixAPIGlobal;

window.requireModules = [];
admixRequire(['html5api_0.0.1'], function(admixAPI){
	function prevent(_event) {
		if (_event) {
			_event.returnValue = false;
			_event.cancelBubble = true;
			if (_event.preventDefault) {
				_event.preventDefault();
			}
			if (_event.stopPropagation) {
				_event.stopPropagation();
			}
		}
	}
	admixAPI.init({
		'initial' : {
			'width' : '240px',
			'height' : '400px'
		},
		'expanded' : {
			'width' : '640px',
			'height' : '400px',
			'overlay' : {
				'left' : '400px',
				'bottom' : '0px'
			},
			'time' : 1
		}
	});
	
	admixAPIGlobal=admixAPI;

});