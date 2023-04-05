const imagenes = [
    "https://professor-falken.com/wp-content/uploads/2017/07/Como-redirigir-o-redireccionar-a-otra-pagina-web-en-HTML-professor-falken.com_.jpg",
    "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png",
    "https://programacion.net/files/article/20160727120738_javascript.png",
    "https://cdn-images-1.medium.com/max/640/1*XaGxIa_JuHc8YTR5Znv6tg.png",
    "https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2019/09/Captura-de-pantalla-de-2019-09-07-04-06-35.png?fit=983%2C633&ssl=1"
];

var slider = document.getElementById("slider");
var contador = 0;

function mover(x) {
    contador += x;
    if (contador < 0) {
        contador = imagenes.length - 1;
        slider.src = imagenes[contador];
    } else if (contador >= imagenes.length) {
        contador = 0;
        slider.src = imagenes[contador];
    } else {
        slider.src = imagenes[contador];
    }

}