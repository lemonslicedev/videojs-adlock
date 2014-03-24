(function(vjs) {
	/*
	Needs to accept an ad tag as a parameter.
	*/

	'use strict';

	var clicked = false;

	var adlock = function() {
		var player = this;
		var el = this.el();

	var adlockContainer = document.createElement('div');
		adlockContainer.id = 'adlockContainer';
		adlockContainer.innerHTML = '<p>Ad script goes here</p>';
		adlockContainer.style.display = 'none';
		adlockContainer.style.position = 'absolute';
		adlockContainer.style.width = '300px';
		adlockContainer.style.height= '300px';

		el.appendChild(adlockContainer);

		player.on('playing', function() {
			if (!clicked) {
				adlockContainer.style.display = 'block';
			}
		});

		player.on('ended', function() {
			adlockContainer.style.display = 'none';
		});

		adlockContainer.addEventListener('click', function() {
			clicked = true;
			adlockContainer.style.display = 'none';
		});
	};

	vjs.plugin('adlock', adlock);

})(window.videojs);
