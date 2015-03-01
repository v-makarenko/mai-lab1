/**
 * Created by VMakarenko on 2/23/15.
 */

window.onload = function () {
    const wTotal = 20;
    const hTotal = 20;
    var cellSize = 40;
    var pause = 25;
    var currentPicId = 0;

    var picArray = _.range(hTotal).map(function () {
        return _.range(wTotal).map(function () {
            return new Image();
        });
    });

    var example = document.getElementById('example');
    var ctx = example.getContext('2d');

    var w = 0, h = 0;

    var incPointers = function () {
        w += 1;
        if (w >= wTotal) {
            w = 0;
            h += 1;
        }
        if (h >= hTotal) {
            h = 0;
            currentPicId++;
        }
    }


    var getNewImgData = function () {
        picArray[h][w].src = 'http://localhost:3000/api/pic/get_pic?w=' + w + '&h=' + h + '&pic_id=' + currentPicId;
        picArray[h][w].onload = function () {
            ctx.drawImage(picArray[h][w], w * cellSize, h * cellSize, cellSize, cellSize);
            incPointers();
        }

    }

    var timer = setInterval(getNewImgData, pause);


}


