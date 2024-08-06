curMode = 1;

function modeSelect(mode){
    if (mode==1){
        curMode = 1;
        clearModes()
        document.querySelector('.combined').style.background = 'var(--primary-color)'
    } else if (mode==2){
        curMode = 2;
        clearModes()
        document.querySelector('.addition').style.background = 'var(--primary-color)'
    } else if (mode==3){
        curMode = 3;
        clearModes()
        document.querySelector('.subtraction').style.background = 'var(--primary-color)'
    } else if (mode==4){
        curMode = 4;
        clearModes()
        document.querySelector('.multiplication').style.background = 'var(--primary-color)'
    } else{
        curMode = 5;
        clearModes()
        document.querySelector('.division').style.background = 'var(--primary-color)'
    }
}

function clearModes(){
    document.querySelector('.combined').style.background = 'var(--dark-color)'
    document.querySelector('.addition').style.background = 'var(--dark-color)'
    document.querySelector('.subtraction').style.background = 'var(--dark-color)'
    document.querySelector('.multiplication').style.background = 'var(--dark-color)'
    document.querySelector('.division').style.background = 'var(--dark-color)'
}