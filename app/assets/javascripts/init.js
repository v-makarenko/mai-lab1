//
//cellSize = window.height / hTotal,                                 // Размер одной ячейки на карте
//    pic = new Image(),                        // "Создаём" изображение
//    map =                                     // Карта уровня двумерным массивом
//        [
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 1ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 1},
//                {x: 2, y: 1},
//                {x: 3, y: 1},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 2ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 2},
//                {x: 2, y: 2},
//                {x: 3, y: 2},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 3},
//                {x: 1, y: 3}
//            ], // 3ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 3, y: 4},
//                {x: 2, y: 3},
//                {x: 3, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 4ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 3, y: 4},
//                {x: 2, y: 4},
//                {x: 3, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 5ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 6ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 3},
//                {x: 1, y: 3},
//                {x: 1, y: 3},
//                {x: 1, y: 3},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ], // 7ый ряд
//            [
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4},
//                {x: 1, y: 4}
//            ]  // 8ый ряд
//        ]; // Первая и вторая координата (x и y соответственно) задают фрагмент в исходном изображении
//// Размер холста равный 8х8 клеток
//pic.onload = function () {  // Событие onLoad, ждём момента пока загрузится изображение
//    for (var j = 0; j < 8; j++)
//        for (var i = 0; i < 8; i++)
//            // перебираем все значения массива 'карта' и в зависимости от координат вырисовываем нужный нам фрагмент
//            ctx.drawImage(pic, (map[i][j].x - 1) * cellSize, (map[i][j].y - 1) * cellSize, 32, 32, j * cellSize, i * cellSize, 32, 32)
//
//
//}

/**
 * Created by VMakarenko on 2/23/15.
 */

window.onload = function () {
    const wTotal = 8;
    const hTotal = 8;
    var cellSize = 32;
    var picsTotal;
    var currentPic = {
        id: 0,
        h: undefined,
        w: undefined
    }

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
        }
    }
    $.get('http://localhost:3000/api/pic/pic_total',function(result){
        picsTotal = 10
    });

    var getDimensions = function (){

    }

    var getNewImgData = function () {
        picArray[h][w].src = 'http://localhost:3000/api/pic/get_pic?w=' + w + '&h=' + h + '&pic_id=' + currentPic.id;
        picArray[h][w].onload = function () {
            ctx.drawImage(picArray[h][w], w * cellSize, h * cellSize, cellSize, cellSize);
            incPointers();
        }

    }

    var timer = setInterval(getNewImgData, 1000);


}


