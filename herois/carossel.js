var balls = document.querySelector('.balls');
    var quant = document.querySelectorAll('.slides .item');
    var atual = 0;
    var imagem = document.getElementById('atual');
    var next = document.getElementById('next');
    var voltar = document.getElementById('volt');
    var back = document.getElementById('fundo')

    for (let i = 0; i < quant.length; i++) {
        var div = document.createElement('div');
        div.id = i;
        balls.appendChild(div);
    }

    document.getElementById('0').classList.add('imgAtual');

    var pos = document.querySelectorAll('.balls div');

    for (let i = 0; i < pos.length; i++) {
        pos[i].addEventListener('click', () => {
            atual = pos[i].id;
            slide();
        });
    }

    voltar.addEventListener('click', () => {
        atual--;
        slide();
    });

    next.addEventListener('click', () => {
        atual++;
        slide();
    });

    document.querySelector('#desa').addEventListener('click', (e)=>{
        document.querySelector('header nav').classList.add('desaparecido');
        document.getElementById('apar').classList.remove('desaparecido')
        e.currentTarget.classList.add('desaparecido');
    });

    document.querySelector('#apar').addEventListener('click', (e)=>{
        document.querySelector('header nav').classList.remove('desaparecido');
        document.getElementById('desa').classList.remove('desaparecido')
        e.currentTarget.classList.add('desaparecido');
    });

    function slide() {
    if (atual >= quant.length) {
            atual = 0;
        } else if (atual < 0) {
            atual = quant.length - 1;
        }

        document.querySelector('.imgAtual').classList.remove('imgAtual');
        imagem.style.marginLeft = -10 * atual + 'vw';
        document.getElementById(atual).classList.add('imgAtual');
    
    }

    slide();