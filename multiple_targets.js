var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});



        //COMMON STUFF FOR ALL LABS

		var imgLogo = new AR.ImageResource("assets/visualize.com.png");

		var LogoButton = new AR.ImageDrawable(imgLogo, 0.12, {
                      enabled: true,
                      clicked: false,
                      zOrder: 2,
                      onClick: function LogoButtonClicked() {
                           LSSLVideo.pause();
                           LogoButton.clicked = true;
                           AR.context.openInBrowser("http://visualizeua.wixsite.com/website");
                           return true;
                      },
        			offsetX: 0.32,
        			offsetY: -0.23,
        			zOrder: 1
        });


		var imgTeamPic = new AR.ImageResource("assets/teamPic.JPG");

        var TeamPicOverlay = new AR.ImageDrawable(imgTeamPic, .203, {
            offsetX: 0,
            offsetY: -0.4,
        });



        //LSSL STUFF

        var LSSLVideo = new AR.VideoDrawable("assets/LSSLwikitude.mp4", 0.95, {
			offsetX: -0.15,
			offsetY: +0.25,
			isTransparent: true,
			zOrder: 1,
			onClick: function LSSLVideoClicked() {
                if (LSSLVideo.playing) {
            		LSSLVideo.pause();
            		LSSLVideo.playing = false;
            	} else {
            		LSSLVideo.resume();
            		LSSLVideo.playing = true;
            	}
            return true;
            }
		});
	    LSSLVideo.playing = true;


		var playButtonImgLSSL = new AR.ImageResource("assets/LSSLvidStill.png");

		var playButtonLSSL = new AR.ImageDrawable(playButtonImgLSSL, 0.17, {
			enabled: true,
			clicked: false,
			zOrder: 2,
			onClick: function playButtonLSSLClicked() {
                LSSLVideo.pause();
				playButtonLSSL.clicked = true;
    			AR.context.openInBrowser("https://www.youtube.com/watch?v=E2mYDaLCyv8");
    			return true;
    		},
			offsetY: -0.05,
			offsetX: +0.23
		});


        var pageOne = new AR.Trackable2DObject(this.tracker, "LSSLTarget", {
			drawables: {
				cam: [TeamPicOverlay, LogoButton, LSSLVideo, playButtonLSSL]
			},
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
				LSSLVideo.resume();
				LSSLVideo.playing = true;
			},
			onExitFieldOfVision: function onExitFieldOfVisionFn() {
				LSSLVideo.pause();
				LSSLVideo.playing = false;
			}
		});



        //ECL STUFF

        var ECLVideo = new AR.VideoDrawable("assets/ECLwikitudeTommy.mp4", 0.95, {
			offsetX: -0.15,
			offsetY: +0.25,
			isTransparent: true,
			zOrder: 1,
			onClick: function ECLVideoClicked() {
                if (ECLVideo.playing) {
            		ECLVideo.pause();
            		ECLVideo.playing = false;
            	} else {
            		ECLVideo.resume();
            		ECLVideo.playing = true;
            	}
            return true;
            }
		});
	    ECLVideo.playing = true;


		var playButtonImgECL = new AR.ImageResource("assets/ECLvidStill.png");

		var playButtonECL = new AR.ImageDrawable(playButtonImgECL, 0.17, {
			enabled: true,
			clicked: false,
			zOrder: 2,
			onClick: function playButtonECLClicked() {
                ECLVideo.pause();
				playButtonECL.clicked = true;
    			AR.context.openInBrowser("https://youtu.be/P-XGwjT6Z6k");
    			return true;
    		},
			offsetY: -0.05,
			offsetX: +0.23
		});


        var pageTwo = new AR.Trackable2DObject(this.tracker, "ECLTracker", {
			drawables: {
				cam: [TeamPicOverlay, LogoButton, ECLVideo, playButtonECL]
			},
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
				MFFVideo.resume();
				MFFVideo.playing = true;
			},
			onExitFieldOfVision: function onExitFieldOfVisionFn() {
				MFFVideo.pause();
				MFFVideo.playing = false;
			}
		});



        //MFF STUFF

        var MFFVideo = new AR.VideoDrawable("assets/MFFwikitudeTommy.mp4", 0.95, {
			offsetX: -0.15,
			offsetY: +0.25,
			isTransparent: true,
			zOrder: 1,
			onClick: function MFFVideoClicked() {
                if (MFFVideo.playing) {
            		MFFVideo.pause();
            		MFFVideo.playing = false;
            	} else {
            		MFFVideo.resume();
            		MFFVideo.playing = true;
            	}
            return true;
            }
		});
	    MFFVideo.playing = true;


        var pageThree = new AR.Trackable2DObject(this.tracker, "MFFTracker", {
			drawables: {
				cam: [TeamPicOverlay, LogoButton, MFFVideo]
			},
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
				MFFVideo.resume();
				MFFVideo.playing = true;
			},
			onExitFieldOfVision: function onExitFieldOfVisionFn() {
				MFFVideo.pause();
				MFFVideo.playing = false;
			}
		});




	},


	worldLoaded: function worldLoadedFn() {
		var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivLeft + ">Scan Target &#35;1 (LSSL Poster):</div>" +
			"<div" + cssDivRight + "><img src='assets/LSSLmini.png'></img></div>";

		// Remove Scan target message after 10 sec.
		setTimeout(function() {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
		}, 10000);
	}
};

World.init();
