let offset = 0;
const sliderLine = document.getElementById('slider-line');

document.getElementById('next_slide').addEventListener('click', function(){
    offset = offset + 1130;
    if (offset > 2260) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.getElementById('previous_slide').addEventListener('click', function () {
    offset = offset - 1130;
    if (offset < 0) {
        offset = 2260;
    }
    sliderLine.style.left = -offset + 'px';
});


let offsett = 0;
const sliderLines = document.getElementById('photos_lines');

document.getElementById('next_photo').addEventListener('click', function(){
    offsett = offsett + 1536;
    if (offsett > 9216) {
        offsett = 0;
    }
    sliderLines.style.left = -offsett + 'px';
});

document.getElementById('previous_photo').addEventListener('click', function () {
    offsett = offsett - 1536;
    if (offsett < 0) {
        offsett = 9216;
    }
    sliderLines.style.left = -offsett + 'px';
});