// Validaciones para Formulario registro de cuenta cliente

window.onload = alIniciar;
nombres.addEventListener("focus", function( event ) {
    event.target.classList.remove('error');
    errorNombres.style.display="none"
}, true);
identificacion.addEventListener("focus", function( event ) {
    event.target.classList.remove('error');
    errorIdentificación.style.display="none"
}, true);
correo.addEventListener("focus", function( event ) {
    event.target.classList.remove('error');
    errorCorreo.style.display="none"
}, true);
telefono.addEventListener("focus", function( event ) {
    event.target.classList.remove('error');
    errorTelefono.style.display="none"
    errorNumTelefono.style.display="none"
}, true);
Fpago.addEventListener("focus", function( event ) {
    event.target.classList.remove('error');
    errorFormaPago.style.display="none"
}, true);
let hasError = false;
function alIniciar(){
    enviar.addEventListener('click',validar,false);
}//end function

function validaNombres(){
    let errorNombres = document.getElementById("errorNombres")
    const pa = new RegExp('^[A-Z]+$', 'i');
    limpiarError(nombres);
    if(nombres.value == ''){
        error(nombres, errorNombres);
        return false;
    }//end if
    else{
        if(!pa.test(nombres.value)){
            error(nombres, errorNombres);
        return false;
        }else{
            return true;
        }
    }
}//end function

function validaIdentificacion(){
    let errorIdentificación = document.getElementById("errorIdentificación")
    limpiarError(identificacion);
    var numero = /^\d{10}$/;
    var letraM = '^[A-Z]+$';
    var letram = '^[a-z]+$';
    if(identificacion.value == ''){
        error(identificacion, errorIdentificación);
        return false;
    }//end if
    if(identificacion.value.match(letraM)|| identificacion.value.match(letram) ) {
        error(identificacion, errorIdentificación);
        return false;
    }
    if(identificacion.value.match(numero)) {
        return true;
    }
}//end function

function validaCorreo(){
    let errorCorreo = document.getElementById("errorCorreo")
    limpiarError(correo);
    console.log(!(correo.value).includes('@'));
    if(correo.value == ''){
        error(correo, errorCorreo);
        return false;
    }
    if(!(correo.value).includes('@') || !(correo.value).includes('.')){
        error(correo, errorCorreo);
        return false;
    }
    return true;
}
function validaTelefono(){
    let errorTelefono = document.getElementById("errorTelefono")
    let errorNumTelefono = document.getElementById("errorNumTelefono")
    limpiarError(telefono);
    var cell = /^\d{7}$/;
    var letraM = '^[A-Z]+$';
    var letram = '^[a-z]+$';

    if(telefono.value == ''){
        error(telefono, errorTelefono);
        return false;
    }//end if
    if(telefono.value.match(letraM)|| telefono.value.match(letram) ) {
        error(telefono, errorNumTelefono);
        return false;
    }
    return true
}
function validaFormaPago(){
    let errorFormaPago = document.getElementById("errorFormaPago")
    let isSelected = document.getElementById('Fpago');
    if(isSelected.value==''){
        error(isSelected, errorFormaPago );
        hasError = true;
        return false;
    }
    return true;
}
function validar(e){
    validaNombres()
    validaIdentificacion()
    validaCorreo()
    validaTelefono()
    validaFormaPago()
    if (validaNombres() && validaIdentificacion() && validaCorreo() && validaTelefono() && validaFormaPago() && confirm('De clic en Aceptar si quiere enviar Formulario')){
        enviado.setAttribute("href", "enviado.html")
        return true
    }else{
        e.preventDefault();
        return false;
    }
}//end function

function error(elemento,smsError){
    elemento.classList.add('error')
    smsError.style.display="block"
}

function limpiarError(elemento){
    elemento.className = '';
}