var World = {
loaded: false,
    
init: function initFn() {
    this.createOverlays();
},
    
createOverlays: function createOverlaysFn() {
    
    this.targetCollectionResource = new AR.TargetCollectionResource("http://www.visualizeua.com/appAssets/common/trackermspaint.wtc", {
                                                                    });
    this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
                                       onTargetsLoaded: this.worldLoaded
                                       });
    
    //COMMON STUFF FOR ALL LABS
    {
        var imgLogo = new AR.ImageResource("http://www.visualizeua.com/appAssets/common/visualize.com.png");
        
        var LogoButton = new AR.ImageDrawable(imgLogo, 0.12, {
                                              enabled: true,
                                              clicked: false,
                                              zOrder: 2,
                                              onClick: function LogoButtonClicked() {
                                              LSSLVideo.pause();
                                              LogoButton.clicked = true;
                                              AR.context.openInBrowser("http://visualizeua.com/",true);
                                              return true;
                                              },
                                              offsetX: 0.32,
                                              offsetY: -0.23,
                                              zOrder: 1
                                              });
        
        
        var imgTeamPic = new AR.ImageResource("http://www.visualizeua.com/appAssets/common/teamPic.JPG");
        
        var TeamPicOverlay = new AR.ImageDrawable(imgTeamPic, .203, {
                                                  offsetX: 0,
                                                  offsetY: -0.4,
                                                  });
    }
    
    
    //LSSL STUFF
    {
        var LSSLVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/LSSL/LSSLgreenscreen.mp4", 0.95, {
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
        
        
        var playButtonImgLSSL = new AR.ImageResource("http://www.visualizeua.com/appAssets/LSSL/LSSLvidStill.png");
        
        var playButtonLSSL = new AR.ImageDrawable(playButtonImgLSSL, 0.17, {
                                                  enabled: true,
                                                  clicked: false,
                                                  zOrder: 3,
                                                  onClick: function playButtonLSSLClicked() {
                                                  LSSLVideo.pause();
                                                  playButtonLSSL.clicked = true;
                                                  AR.context.openInBrowser("https://www.youtube.com/watch?v=E2mYDaLCyv8",true);
                                                  return true;
                                                  },
                                                  offsetY: -0.05,
                                                  offsetX: +0.23
                                                  });
        
        
        var pageOne = new AR.ImageTrackable(this.tracker, "LSSLTarget", {
                                            drawables: {
                                            cam: [TeamPicOverlay, LogoButton, LSSLVideo, playButtonLSSL]
                                            },
                                            onImageRecognized: function onEnterFieldOfVisionFn() {
                                            LSSLVideo.resume();
                                            LSSLVideo.playing = true;
                                            },
                                            onImageLost: function onExitFieldOfVisionFn() {
                                            LSSLVideo.pause();
                                            LSSLVideo.playing = false;
                                            }
                                            });
    }
    
    
    //ECL STUFF
    {
        var ECLVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/ECL/ECLgreenscreen.mp4", .95, {
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
        
        
        var playButtonImgECL = new AR.ImageResource("http://www.visualizeua.com/appAssets/ECL/ECLvidStill.png");
        
        var playButtonECL = new AR.ImageDrawable(playButtonImgECL, 0.17, {
                                                 enabled: true,
                                                 clicked: false,
                                                 zOrder: 3,
                                                 onClick: function playButtonECLClicked() {
                                                 ECLVideo.pause();
                                                 playButtonECL.clicked = true;
                                                 AR.context.openInBrowser("https://youtu.be/P-XGwjT6Z6k",true);
                                                 return true;
                                                 },
                                                 offsetY: -0.05,
                                                 offsetX: +0.23
                                                 });
        
        
        var pageTwo = new AR.ImageTrackable(this.tracker, "ECLTarget", {
                                            drawables: {
                                            cam: [TeamPicOverlay, LogoButton, ECLVideo, playButtonECL]
                                            },
                                            onImageRecognized: function onEnterFieldOfVisionFn() {
                                            ECLVideo.resume();
                                            ECLVideo.playing = true;
                                            },
                                            onImageLost: function onExitFieldOfVisionFn() {
                                            ECLVideo.pause();
                                            ECLVideo.playing = false;
                                            }
                                            });
    }
    
    
    //MFF STUFF
    {
        var MFFVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/MFF/MFFgreenscreen.mp4", 0.95, {
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
        
        
        var playButtonImgMFF = new AR.ImageResource("http://www.visualizeua.com/appAssets/MFF/MFFvidStill.png");
        
        var playButtonMFF = new AR.ImageDrawable(playButtonImgMFF, 0.17, {
                                                 enabled: true,
                                                 clicked: false,
                                                 zOrder: 3,
                                                 onClick: function playButtonMFFClicked() {
                                                 MFFVideo.pause();
                                                 playButtonMFF.clicked = true;
                                                 AR.context.openInBrowser("https://www.youtube.com/watch?v=zUDjzsqMaWs",true);
                                                 return true;
                                                 },
                                                 offsetY: -0.05,
                                                 offsetX: +0.23
                                                 });
        
        
        var pageThree = new AR.ImageTrackable(this.tracker, "MFFTarget2", {
                                              drawables: {
                                              cam: [TeamPicOverlay, LogoButton, MFFVideo, playButtonMFF]
                                              },
                                              onImageRecognized: function onEnterFieldOfVisionFn() {
                                              MFFVideo.resume();
                                              MFFVideo.playing = true;
                                              },
                                              onImageLost: function onExitFieldOfVisionFn() {
                                              MFFVideo.pause();
                                              MFFVideo.playing = false;
                                              }
                                              });
    }
    
    
    //LS Wind Tunnel STUFF
    {
        var LSWindTunnelVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/LSWindTunnel/lowSpeedgreenscreen.mp4", 0.95, {
                                                     offsetX: -0.15,
                                                     offsetY: +0.25,
                                                     isTransparent: true,
                                                     zOrder: 1,
                                                     onClick: function LSWindTunnelVideoClicked() {
                                                     if (LSWindTunnelVideo.playing) {
                                                     LSWindTunnelVideo.pause();
                                                     LSWindTunnelVideo.playing = false;
                                                     } else {
                                                     LSWindTunnelVideo.resume();
                                                     LSWindTunnelVideo.playing = true;
                                                     }
                                                     return true;
                                                     }
                                                     });
        LSWindTunnelVideo.playing = true;
        
        
        var playButtonImgLSWindTunnel = new AR.ImageResource("http://www.visualizeua.com/appAssets/LSWindTunnel/LSvidStill.png");
        
        var playButtonLSWindTunnel = new AR.ImageDrawable(playButtonImgLSWindTunnel, 0.17, {
                                                          enabled: true,
                                                          clicked: false,
                                                          zOrder: 3,
                                                          onClick: function playButtonLSWindTunnelClicked() {
                                                          LSWindTunnelVideo.pause();
                                                          playButtonLSWindTunnel.clicked = true;
                                                          AR.context.openInBrowser("https://www.youtube.com/watch?v=hPzU3HFEZdw",true);
                                                          return true;
                                                          },
                                                          offsetY: -0.05,
                                                          offsetX: +0.23
                                                          });
        
        
        var pageFour = new AR.ImageTrackable(this.tracker, "LSWindTunnelTarget", {
                                             drawables: {
                                             cam: [TeamPicOverlay, LogoButton, LSWindTunnelVideo, playButtonLSWindTunnel]
                                             },
                                             onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                             LSWindTunnelVideo.resume();
                                             LSWindTunnelVideo.playing = true;
                                             },
                                             onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                             LSWindTunnelVideo.pause();
                                             LSWindTunnelVideo.playing = false;
                                             }
                                             });
    }
    
    
    //theCube STUFF
    {
        var CubeVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/theCube/Cubegreenscreen.mp4", .95, {
                                             offsetX: -0.15,
                                             offsetY: +0.25,
                                             isTransparent: true,
                                             zOrder: 1,
                                             onClick: function CubeVideoClicked() {
                                             if (CubeVideo.playing) {
                                             CubeVideo.pause();
                                             CubeVideo.playing = false;
                                             } else {
                                             CubeVideo.resume();
                                             CubeVideo.playing = true;
                                             }
                                             return true;
                                             }
                                             });
        CubeVideo.playing = true;
        
        
        var playButtonImgCube = new AR.ImageResource("http://www.visualizeua.com/appAssets/theCube/CubevidStill.png");
        
        var playButtonCube = new AR.ImageDrawable(playButtonImgCube, 0.17, {
                                                  enabled: true,
                                                  clicked: false,
                                                  zOrder: 3,
                                                  onClick: function playButtonCubeClicked() {
                                                  CubeVideo.pause();
                                                  playButtonCube.clicked = true;
                                                  AR.context.openInBrowser("https://www.youtube.com/watch?v=TjWCpzexCBI",true);
                                                  return true;
                                                  },
                                                  offsetY: -0.05,
                                                  offsetX: +0.23
                                                  });
        
        
        var pageFive = new AR.ImageTrackable(this.tracker, "CubeTarget", {
                                             drawables: {
                                             cam: [TeamPicOverlay, LogoButton, CubeVideo, playButtonCube]
                                             },
                                             onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                             CubeVideo.resume();
                                             CubeVideo.playing = true;
                                             },
                                             onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                             CubeVideo.pause();
                                             CubeVideo.playing = false;
                                             }
                                             });
    }
    
    
    //Fenrir STUFF
    {
        var FenrirVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/Fenrir/Fenrirgreenscreen.mp4", 0.95, {
                                               offsetX: -0.15,
                                               offsetY: +0.25,
                                               isTransparent: true,
                                               zOrder: 1,
                                               onClick: function FenrirVideoClicked() {
                                               if (FenrirVideo.playing) {
                                               FenrirVideo.pause();
                                               FenrirVideo.playing = false;
                                               } else {
                                               FenrirVideo.resume();
                                               FenrirVideo.playing = true;
                                               }
                                               return true;
                                               }
                                               });
        FenrirVideo.playing = true;
        
        
        var pageSix = new AR.ImageTrackable(this.tracker, "FenrirTarget", {
                                            drawables: {
                                            cam: [TeamPicOverlay, LogoButton, FenrirVideo]
                                            },
                                            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                            FenrirVideo.resume();
                                            FenrirVideo.playing = true;
                                            },
                                            onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                            FenrirVideo.pause();
                                            FenrirVideo.playing = false;
                                            }
                                            });
    }
    
    //SPOT STUFF
    {
        var SPOTVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/SPOT/SPOTgreenscreen.mp4", .95, {
                                             offsetX: -0.15,
                                             offsetY: +0.25,
                                             isTransparent: true,
                                             zOrder: 1,
                                             onClick: function SPOTVideoClicked() {
                                             if (SPOTVideo.playing) {
                                             SPOTVideo.pause();
                                             SPOTVideo.playing = false;
                                             } else {
                                             SPOTVideo.resume();
                                             SPOTVideo.playing = true;
                                             }
                                             return true;
                                             }
                                             });
        SPOTVideo.playing = true;
        
        
        var playButtonImgSPOT = new AR.ImageResource("http://www.visualizeua.com/appAssets/SPOT/SPOTvidStill.png");
        
        var playButtonSPOT = new AR.ImageDrawable(playButtonImgSPOT, 0.17, {
                                                  enabled: true,
                                                  clicked: false,
                                                  zOrder: 3,
                                                  onClick: function playButtonSPOTClicked() {
                                                  SPOTVideo.pause();
                                                  playButtonSPOT.clicked = true;
                                                  AR.context.openInBrowser("https://www.youtube.com/watch?v=AmTCndvdvrU",true);
                                                  return true;
                                                  },
                                                  offsetY: -0.05,
                                                  offsetX: +0.23
                                                  });
        
        
        var pageSeven = new AR.ImageTrackable(this.tracker, "SPOTTarget", {
                                              drawables: {
                                              cam: [TeamPicOverlay, LogoButton, SPOTVideo, playButtonSPOT]
                                              },
                                              onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                              SPOTVideo.resume();
                                              SPOTVideo.playing = true;
                                              },
                                              onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                              SPOTVideo.pause();
                                              SPOTVideo.playing = false;
                                              }
                                              });
    }
    
    
    //Astrobotics STUFF
    {
        var AstroboticsVideo = new AR.VideoDrawable("http://visualizeua.com/appAssets/Astrobotics/Astroboticsgreenscreen.mp4", .95, {
                                                    offsetX: -0.15,
                                                    offsetY: +0.25,
                                                    isTransparent: true,
                                                    zOrder: 1,
                                                    onClick: function AstroboticsVideoClicked() {
                                                    if (AstroboticsVideo.playing) {
                                                    AstroboticsVideo.pause();
                                                    AstroboticsVideo.playing = false;
                                                    } else {
                                                    AstroboticsVideo.resume();
                                                    AstroboticsVideo.playing = true;
                                                    }
                                                    return true;
                                                    }
                                                    });
        AstroboticsVideo.playing = true;
        
        
        var playButtonImgAstrobotics = new AR.ImageResource("http://www.visualizeua.com/appAssets/Astrobotics/AstroboticsvidStill.png");
        
        var playButtonAstrobotics = new AR.ImageDrawable(playButtonImgAstrobotics, 0.17, {
                                                         enabled: true,
                                                         clicked: false,
                                                         zOrder: 3,
                                                         onClick: function playButtonAstroboticsClicked() {
                                                         AstroboticsVideo.pause();
                                                         playButtonAstrobotics.clicked = true;
                                                         AR.context.openInBrowser("https://www.youtube.com/watch?v=26I-o7i66Fo",true);
                                                         return true;
                                                         },
                                                         offsetY: -0.05,
                                                         offsetX: +0.23
                                                         });
        
        
        var pageEight = new AR.ImageTrackable(this.tracker, "AstroboticsTarget", {
                                              drawables: {
                                              cam: [TeamPicOverlay, LogoButton, AstroboticsVideo, playButtonAstrobotics]
                                              },
                                              onImageRecognized: function onEnterFieldOfVisionFn() {
                                              AstroboticsVideo.resume();
                                              AstroboticsVideo.playing = true;
                                              },
                                              onImageLost: function onExitFieldOfVisionFn() {
                                              AstroboticsVideo.pause();
                                              AstroboticsVideo.playing = false;
                                              }
                                              });
    }
    
    
    //Firefly STUFF
    {
        var FireflyVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/Firefly/Fireflygreenscreen.mp4", .95, {
                                                offsetX: -0.15,
                                                offsetY: +0.25,
                                                isTransparent: true,
                                                zOrder: 1,
                                                onClick: function FireflyVideoClicked() {
                                                if (FireflyVideo.playing) {
                                                FireflyVideo.pause();
                                                FireflyVideo.playing = false;
                                                } else {
                                                FireflyVideo.resume();
                                                FireflyVideo.playing = true;
                                                }
                                                return true;
                                                }
                                                });
        FireflyVideo.playing = true;
        
        
        var pageNine = new AR.ImageTrackable(this.tracker, "FireflyTarget", {
                                             drawables: {
                                             cam: [TeamPicOverlay, LogoButton, FireflyVideo]
                                             },
                                             onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                             FireflyVideo.resume();
                                             FireflyVideo.playing = true;
                                             },
                                             onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                             FireflyVideo.pause();
                                             FireflyVideo.playing = false;
                                             }
                                             });
    }
    
    
    //BamaRacing STUFF
    {
        var BamaRacingVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/BamaRacing/BamaRacinggreenscreen.mp4", .95, {
                                                   offsetX: -0.15,
                                                   offsetY: +0.25,
                                                   isTransparent: true,
                                                   zOrder: 1,
                                                   onClick: function BamaRacingVideoClicked() {
                                                   if (BamaRacingVideo.playing) {
                                                   BamaRacingVideo.pause();
                                                   BamaRacingVideo.playing = false;
                                                   } else {
                                                   BamaRacingVideo.resume();
                                                   BamaRacingVideo.playing = true;
                                                   }
                                                   return true;
                                                   }
                                                   });
        BamaRacingVideo.playing = true;
        
        
        var playButtonImgBamaRacing = new AR.ImageResource("http://visualizeua.com/appAssets/BamaRacing/BamaRacingvidStill.png");
        
        var playButtonBamaRacing = new AR.ImageDrawable(playButtonImgBamaRacing, 0.17, {
                                                        enabled: true,
                                                        clicked: false,
                                                        zOrder: 3,
                                                        onClick: function playButtonBamaRacingClicked() {
                                                        BamaRacingVideo.pause();
                                                        playButtonBamaRacing.clicked = true;
                                                        AR.context.openInBrowser("https://www.youtube.com/watch?v=5wWb4450kZU",true);
                                                        return true;
                                                        },
                                                        offsetY: -0.05,
                                                        offsetX: +0.23
                                                        });
        
        
        var pageTen = new AR.ImageTrackable(this.tracker, "BamaRacingTarget", {
                                            drawables: {
                                            cam: [TeamPicOverlay, LogoButton, BamaRacingVideo, playButtonBamaRacing]
                                            },
                                            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                            BamaRacingVideo.resume();
                                            BamaRacingVideo.playing = true;
                                            },
                                            onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                            BamaRacingVideo.pause();
                                            BamaRacingVideo.playing = false;
                                            }
                                            });
    }
    
    
    //CrimsonRacing STUFF
    {
        var CrimsonRacingVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/CrimsonRacing/CrimsonRacinggreenscreen.mp4", .95, {
                                                      offsetX: -0.15,
                                                      offsetY: +0.25,
                                                      isTransparent: true,
                                                      zOrder: 1,
                                                      onClick: function CrimsonRacingVideoClicked() {
                                                      if (CrimsonRacingVideo.playing) {
                                                      CrimsonRacingVideo.pause();
                                                      CrimsonRacingVideo.playing = false;
                                                      } else {
                                                      CrimsonRacingVideo.resume();
                                                      CrimsonRacingVideo.playing = true;
                                                      }
                                                      return true;
                                                      }
                                                      });
        CrimsonRacingVideo.playing = true;
        
        
        var playButtonImgCrimsonRacing = new AR.ImageResource("http://www.visualizeua.com/appAssets/CrimsonRacing/CrimsonRacingvidStill.png");
        
        var playButtonCrimsonRacing = new AR.ImageDrawable(playButtonImgCrimsonRacing, 0.17, {
                                                           enabled: true,
                                                           clicked: false,
                                                           zOrder: 3,
                                                           onClick: function playButtonCrimsonRacingClicked() {
                                                           CrimsonRacingVideo.pause();
                                                           playButtonCrimsonRacing.clicked = true;
                                                           AR.context.openInBrowser("https://www.youtube.com/watch?v=D9DyjrPqrX0",true);
                                                           return true;
                                                           },
                                                           offsetY: -0.05,
                                                           offsetX: +0.23
                                                           });
        
        
        var pageEleven = new AR.ImageTrackable(this.tracker, "CrimsonRacingTarget", {
                                               drawables: {
                                               cam: [TeamPicOverlay, LogoButton, CrimsonRacingVideo, playButtonCrimsonRacing]
                                               },
                                               onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                               CrimsonRacingVideo.resume();
                                               CrimsonRacingVideo.playing = true;
                                               },
                                               onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                               CrimsonRacingVideo.pause();
                                               CrimsonRacingVideo.playing = false;
                                               }
                                               });
    }
    
    
    //EcoCar STUFF
    {
        var EcoCarVideo = new AR.VideoDrawable("http://www.visualizeua.com/appAssets/EcoCar/EcoCargreenscreen.mp4", .95, {
                                               offsetX: -0.15,
                                               offsetY: +0.25,
                                               isTransparent: true,
                                               zOrder: 1,
                                               onClick: function EcoCarVideoClicked() {
                                               if (EcoCarVideo.playing) {
                                               EcoCarVideo.pause();
                                               EcoCarVideo.playing = false;
                                               } else {
                                               EcoCarVideo.resume();
                                               EcoCarVideo.playing = true;
                                               }
                                               return true;
                                               }
                                               });
        EcoCarVideo.playing = true;
        
        
        var pageTwelve = new AR.ImageTrackable(this.tracker, "EcoCarTarget", {
                                               drawables: {
                                               cam: [TeamPicOverlay, LogoButton, EcoCarVideo]
                                               },
                                               onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                                               EcoCarVideo.resume();
                                               EcoCarVideo.playing = true;
                                               },
                                               onExitFieldOfVision: function onExitFieldOfVisionFn() {
                                               EcoCarVideo.pause();
                                               EcoCarVideo.playing = false;
                                               }
                                               });
    }
    //TornadoGun STUFF
    
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
