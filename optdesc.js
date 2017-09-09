var _optdesc = document.getElementsByClassName('optdesc');

for (var c = 0; c < _optdesc.length; c++) {
    var bloco = _optdesc[c];
    console.log(bloco.children);
    var d = document.createElement('div');
    d.className = 'mostrardescricao';
    d.dataset.secao = bloco.dataset.secao;
    d.innerHTML = '<div><span class="mais"></span><i class="fa fa-angle-down fa-2x imais" aria-hidden="true"></i></div>';

    bloco.children[0].id = bloco.dataset.secao;
    
    d.addEventListener('click', function(e){
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

    bloco.appendChild(d);
}