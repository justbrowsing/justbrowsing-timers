AudioAlert
==========

HTML5 audio alert library with flash-fallback.

To sound an alert call:

    var audioalert = new AudioAlert({ogg:'alert.ogg', mp3:'alert.mp3'});
    audioalert.play();

The demo.html demonstrates usage of the supported event types, 'loadeddata', 'ended', and 'error'. A live demo is available at [thrysoee.dk/audioalert](http://thrysoee.dk/audioalert).


API
==========

    var audioalert = new AudioAlert({
       ogg: 'alert.ogg',                                // required
       mp3: 'alert.mp3',                                // required
       sfw: 'alertnative/path/to/audioalert-x.y.swf',   // optional
       error: function (e) {                            // optional
          // error event handler
       },
       ended: function () {                             // optional
          // playback ended event handler
       },
       loadeddata: function () {                        // optional
          // media loadeddata event handler
       }
    });

    // bind 'error', 'loadeddata', or 'ended' event handler
    // after creation, e.g.
    audioalert.bind('error', function (e) {
       // error event handler
    });

    // sound alert
    audioalert.play();


Note: To support all browsers, audio in both Ogg and mp3 format is required. [Online converters](http://audio.online-convert.com) exist to easily convert between formats.


