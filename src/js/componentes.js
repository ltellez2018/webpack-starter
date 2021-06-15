import '../css/components.css';
import webpacklogo from  '../assets/images/webpack-logo.png';

export const saludar =  (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola , ${nombre}`;
    document.body.append(h1);


    //IMG
    /*console.log(webpacklogo);
    const ing = document.createElement('img');
    ing.src = webpacklogo;
    document.body.append(ing);*/
};
