'use strict';


jQuery(document).ready(function () {

    let currntFace = "haha";
    const faces = {
        like: {
            sound: '',
            html: `<div class="emoji  emoji--like">
                    <div class="emoji__hand">
                        <div class="emoji__thumb"></div>
                    </div>
                </div>`
        },

        love: {
            sound: '',
            html: `<div class="emoji  emoji--love">
                    <div class="emoji__heart"></div>
                </div>`
        },

        haha: {
            sound: '',
            html: `
                    <div class="emoji  emoji--haha">
                      <div class="emoji__face">
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth">
                          <div class="emoji__tongue">           
                          </div>
                        </div>
                      </div>  
                    </div>`
        },

        angry: {
            sound: '',
            html:
                `
                        <div class="emoji  emoji--angry">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__eyes"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>`
        },

        sad: {
            sound: '',
            html:
                `
                    <div class="emoji  emoji--sad">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__eyes"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`
        },

        wow: {
            sound: '',
            html:
                `
                    <div class="emoji  emoji--wow">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__eyes"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`
        },

        yay: {
            sound: '',
            html:
                `<div class="emoji  emoji--yay">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`
        },

    };

    let changeFace = function (face) {
        let face_x = faces[face].html;
        let container = $('#face_container');
        container.html(face_x);
        currntFace = face;

        playSound();
    };

    let getCurrentFaceFromServer = function () {
        $.ajax({
            method: "GET",
            url: "/currentFace.php",
        }).done(function (response) {
            if (response !== currntFace) {
                changeFace(response);
            }
        }).fail(function (response) {
            console.log("fail");
            console.log(response);
            return null;
        })
    };

    let playSound = function () {
        let obj = document.createElement("audio");
        obj.src = "/sound.wav";
        obj.volume = 0.1;
        obj.autoPlay = false;
        obj.preLoad = true;
        obj.controls = true;

        obj.play();
    };

    setInterval(function () {
        let serverFace = getCurrentFaceFromServer();
    }, 1000);

});