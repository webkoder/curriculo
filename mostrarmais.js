var btnsmostrar = document.getElementsByClassName('mostrardescricao');

for (var i = 0; i < btnsmostrar.length; i++) {
    var btn = btnsmostrar[i];

    btn.addEventListener('click', function(e){
        var secao = this.dataset.secao;
        if(this.children[0].children[0].className == 'menos'){
            document.getElementById(secao).className= '';
            this.children[0].children[0].className = 'mais';
            this.children[0].children[1].className = 'fa fa-angle-down fa-2x imais';
        }else{
            document.getElementById(secao).className= 'selecionado';
            this.children[0].children[0].className = 'menos';
            this.children[0].children[1].className = 'fa fa-angle-down fa-2x imenos';
        }

    });
    
}