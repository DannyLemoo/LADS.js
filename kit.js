var templates = ['ad.png', '111.png'];

//Crea una variable llamada src que obtenga una imagen de templates aleatoria
var src = templates[Math.floor(Math.random() * templates.length)];
var adblockText = 'We appreciate you!<br>';
var adblockSub = 'But we need your help to make this <br> site better!';


var ads = {
    'create': function(position, append){
        var anuncio = document.createElement('img');
        anuncio.src = src;

        //add the id ad to the element
        anuncio.id = 'ad';
        //add the class ad to the element
        anuncio.className = 'ad';
        anuncio.style.maxWidth = '400px';
        anuncio.style.maxHeight = '250px';
        src = templates[Math.floor(Math.random() * templates.length)];
        if(position == 'top'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '0';
            anuncio.style.left = '0';
            anuncio.style.right = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'bottom'){
            anuncio.style.position = 'fixed';
            anuncio.style.bottom = '0';
            anuncio.style.left = '0';
            anuncio.style.right = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'left'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '50%';
            anuncio.style.transform = 'translateY(-50%)';
            anuncio.style.left = '0';
            anuncio.style.bottom = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'right'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '50%';
            anuncio.style.transform = 'translateY(-50%)';
            anuncio.style.right = '0';
            anuncio.style.bottom = '0';
            anuncio.style.zIndex = '9999';
        } else if(position == 'top-left'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '0';
            anuncio.style.left = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'top-right'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '0';
            anuncio.style.right = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'bottom-left'){
            anuncio.style.position = 'fixed';
            anuncio.style.bottom = '0';
            anuncio.style.left = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'bottom-right'){
            anuncio.style.position = 'fixed';
            anuncio.style.bottom = '0';
            anuncio.style.right = '0';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'top-center'){
            anuncio.style.position = 'fixed';
            anuncio.style.top = '0';
            anuncio.style.left = '50%';
            anuncio.style.transform = 'translateX(-50%)';
            anuncio.style.zIndex = '9999';
        }
        else if(position == 'bottom-center'){
            anuncio.style.position = 'fixed';
            anuncio.style.bottom = '0';
            anuncio.style.left = '50%';
            anuncio.style.transform = 'translateX(-50%)';
            anuncio.style.zIndex = '9999';
        }
        setTimeout(function(){
            document.body.appendChild(anuncio);
        }, 1)
    },
    'load': function(){
        console.log('Powered by TADS Kit');
    },
    'get': function(){
        //Console.log the number of id's ad
        console.log(document.getElementsByClassName('ad').length);
    },
    'static': function(x, y){
        var anuncio = document.createElement('img');
        anuncio.src = src;

        //add the id ad to the element
        anuncio.id = 'ad';
        //add the class ad to the element
        anuncio.className = 'ad';
        anuncio.style.maxWidth = '400px';
        anuncio.style.maxHeight = '250px';

        anuncio.style.position = 'absolute';
        anuncio.style.top = y + 'px';
        anuncio.style.left = x + 'px';
        anuncio.style.zIndex = '9999';
        setTimeout(function(){
            append.appendChild(anuncio)
        },1)
    },
}
window.onload = ads.load();
