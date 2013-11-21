window.addEventListener('load', function (e) {
	var map = new GMaps({
		div: '#map',
		lat: -12.043333,
        lng: -77.028333
	})

	GMaps.geolocate({
		success: function(position){
			map.setCenter(position.coords.latitude, position.coords.longitude)
		},
		error: function(error){
			console.warn('Geolocation failed: '+error.message)
		},
		not_supported: function(){
			alert("Your browser does not support geolocation")
		}
	})

    // Check for the various File API support.
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      // Great success! All the File APIs are supported.
      alert('Though shalt not pass !!  (Seriously, get a real browser)')
      throw 'up'
    }

    function handleFileSelect(evt) {
    	evt.stopPropagation()
    	evt.preventDefault()

	    var files = evt.dataTransfer.files

	    var l = files.length
	    for (var i = 0; i < l; i++) {
	    	file = files[i]

	    	if (!file.type.match('image')) {
	    		continue
	    	}

	    	var fr = new FileReader()

	    	fr.onload = function (e) {
	    		var exif = new ExifReader();

	    		try {
		    		exif.load(e.target.result);
		    		console.group(file.name);
		    		console.log(exif.getAllTags());
		    		console.groupEnd(file.name);

		    		var lat = exif.getTagDescription('GPSLatitude'),
		    			lng = exif.getTagDescription('GPSLongitude')

		    		if (lat && lng) {
			    		map.addMarker({
			    			lat : lat,
			    			lng : lng,
			    			title : file.name,
			    		})
			    		map.fitZoom()
		    		} else {
		    			console.warn("Can't add image ", file.name, " we don't have data", { 'lat' : lat, 'lng' : lng })
		    		}
	    		} catch (err) {
	    			console.error(err.message)
	    		}
	    	}

	    	fr.readAsArrayBuffer(file)
	    }
	}

	function handleDragOver(evt) {
		evt.stopPropagation()
		evt.preventDefault()
	    evt.dataTransfer.dropEffect = 'copy' // Explicitly show this is a copy.
	}

    var $ = document.querySelector.bind(document),
        $$ = document.querySelectorAll.bind(document)

    var dz = $(".dropzone")
	dz.addEventListener('dragover', handleDragOver, false)
	dz.addEventListener('drop', handleFileSelect, false)
});