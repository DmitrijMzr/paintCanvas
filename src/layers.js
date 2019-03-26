// function Layer (){
//
// }
let nLayer = 0;

const divWrapperLayers = document.getElementById('idWrapperLayers');
const divWrapperCanvas = document.getElementById('idWrapperCanvas');
const buttonAddLayer = document.getElementById('idAddLayer');
let arrCanvasLayer = [];

let arrButtonLayer = [];

buttonAddLayer.addEventListener('click', createLayer);

function createLayer() {
    const divLayer = document.createElement('div');
    divWrapperLayers.appendChild(divLayer);

    objLayer = {buttonLayer: null, buttonDeleteLayer: null};
    objLayer.buttonLayer = document.createElement('button');
    objLayer.buttonLayer.className = 'button__layers_add';
    objLayer.buttonLayer.id = 'idButtonLayer' + nLayer;
    objLayer.buttonLayer.innerHTML = 'layer ' + nLayer;

    divLayer.appendChild(objLayer.buttonLayer);

    objLayer.buttonDeleteLayer = document.createElement('button');
    objLayer.buttonDeleteLayer.className = 'button__layers_delete';
    objLayer.buttonDeleteLayer.id = 'idButtonDeleteLayer' + nLayer;
    objLayer.buttonDeleteLayer.innerHTML = '&times;';

    divLayer.appendChild(objLayer.buttonDeleteLayer);
    arrButtonLayer[nLayer] = divLayer;

    arrCanvasLayer[nLayer] = document.createElement('canvas');
    arrCanvasLayer[nLayer].className = 'canvas__layers';
    arrCanvasLayer[nLayer].id = 'idCanvas' + nLayer;
    arrCanvasLayer[nLayer].style = 'z-index:' + nLayer;

    divWrapperCanvas.appendChild(arrCanvasLayer[nLayer]);

    const cn = new CanvasPainter(arrCanvasLayer[nLayer].id);

    objLayer.buttonLayer.addEventListener('click', switchLayer);
    objLayer.buttonDeleteLayer.addEventListener('click', deleteLayer);

    nLayer++;
}

function switchLayer() {

    const n = this.id[this.id.length - 1];
const z =  arrCanvasLayer[n].style ['z-index'];
    for (i = 0; i < arrCanvasLayer.length; i++) {
        if (arrCanvasLayer[i].style ['z-index'] === '' + (arrCanvasLayer.length - 1)) {
            arrCanvasLayer[i].style ['z-index'] = z;
        }
    }
    arrCanvasLayer[n].style = 'z-index:' + (arrCanvasLayer.length - 1);
}

function deleteLayer() {
    const n = this.id[this.id.length - 1];
    divWrapperCanvas.removeChild(arrCanvasLayer[n]);
    divWrapperLayers.removeChild(arrButtonLayer[n]);

}

function resize() {
    for (let i = 0; i < arrCanvasLayer.length; i++) {
        const displayWidth = arrCanvasLayer[i].clientWidth;
        const displayHeight = arrCanvasLayer[i].clientHeight;

        // проверяем, отличается ли размер canvas
        if (arrCanvasLayer[i].width !== displayWidth ||
            arrCanvasLayer[i].height !== displayHeight) {

            // подгоняем размер буфера отрисовки под размер HTML-элемента
            arrCanvasLayer[i].width = displayWidth;
            arrCanvasLayer[i].height = displayHeight;
        }
    }
}

window.addEventListener('resize', resize);
