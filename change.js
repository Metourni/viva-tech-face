'use strict';


jQuery(document).ready(function () {

    const faces = {
        like: `<div class="emoji  emoji--like">
                    <div class="emoji__hand">
                        <div class="emoji__thumb"></div>
                    </div>
                </div>`,

        love: `<div class="emoji  emoji--love">
                    <div class="emoji__heart"></div>
                </div>`,

        haha: `
                    <div class="emoji  emoji--haha">
                      <div class="emoji__face">
                        <div class="emoji__eyes"></div>
                        <div class="emoji__mouth">
                          <div class="emoji__tongue">           
                          </div>
                        </div>
                      </div>  
                    </div>`,

        angry:
            `
                        <div class="emoji  emoji--angry">
                            <div class="emoji__face">
                                <div class="emoji__eyebrows"></div>
                                <div class="emoji__eyes"></div>
                                <div class="emoji__mouth"></div>
                            </div>
                        </div>`,

        sad:
            `
                    <div class="emoji  emoji--sad">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__eyes"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`,

        wow:
            `
                    <div class="emoji  emoji--wow">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__eyes"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`,

        yay:
            `<div class="emoji  emoji--yay">
                        <div class="emoji__face">
                            <div class="emoji__eyebrows"></div>
                            <div class="emoji__mouth"></div>
                        </div>
                    </div>`,

    };

    let changeFace = function (face) {
        let face_x = faces[face];
        let container = $('#face_container');
        container.html(face_x);
    };

    let changeFaceOnServer = function (face_name) {
        $.ajax({
            method: "POST",
            url: "/changeFace.php",
            data: {face: face_name}
        }).done(function (response) {
            console.log('done');
            console.log(response);
            changeFace(response);
        }).fail(function (response) {
            console.log('fail');
            console.log(response);
        })
    };

    $(".change-face").on('click', function () {
        let face_name = $(this).data('face');
        //
        changeFaceOnServer(face_name);
    });


});