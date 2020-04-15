var btnRegra = document.querySelector('#btnRegra');
btnRegra.addEventListener('click', function(){
    alert('Clique na tela para jogar e movimente o personagen com as teclas direcionais do teclado.')
})

// função executada quando a página carregar. todo o jogo ira rodar dentro desta função
window.onload = function(){

    var stage = document.querySelector("#stage");
    //dentro do context que sera criado a parte visual do jogo
    var ctx = stage.getContext("2d");
    
    
    //evento que dirpara a função da movimentação do jogador
    this.document.addEventListener("keydown", keyPush);

    setInterval(game, 120);

    //variaveis de velocidade de movimentação do personagem
    const velocidade = 1;
    var velocidadeX = 0;
    var velocidadeY = 0;
    //variaveis de ponto x e y. ponto de inicio do personagem.
    var px = 10;
    var py = 10;
    //variaveil para definir o tamando do quadrado(peça, fruta);
    var tp = 20;
    //variavel para definir a quantidade de peças terão na tela
    var qp = 20;
    //definir a posição inicial da fruta.
    var FruitX = 15;
    var fruitY = 15;



    //definir o rastro da cobra
    var trail = [];
    tail = 5    

    //definindo a função game
    function game(){
        //comportamento da cobra caso ela ultrapasse o limite da area do jogo
        px += velocidadeX;
        py += velocidadeY;
        if (px < 0){
            px = qp-1;
        };
        if (px > qp-1){
            px = 0;
        };
        if (py < 0){
            py = qp-1;
        };
        if (py > qp-1){
            py = 0;
        };

        //pintando a area do jogo, desde o ponto 0,0 até toda area do jogo
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);
        //pintando os elementos do game(personagem e fruta)
        ctx.fillStyle = "red";
        ctx.fillRect(FruitX*tp, fruitY*tp, tp,tp);
        ctx.fillStyle = "gray";
        for(var i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
            //definindo gameover caso tenha uma colisão
            if(trail[i].x == px && trail[i].y == py){
                velocidadeX = 0;
                velocidadeY = 0;
                tail = 5;
                
                
            };
        };

        //movimentação do personagem
        trail.push({x:px,y:py});
        while(trail.length > tail){
            trail.shift();
        };
        //aumentando a cauda do personagem
        if(FruitX == px && fruitY == py){
            tail++;
            //atualizando a fruta em uma posição nova
            FruitX = Math.floor(Math.random()*qp);
            fruitY = Math.floor(Math.random()*qp);;
            pontis.value++
        };
    };

    //controlando a movimentação do personagem
    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left
                velocidadeX = -velocidade;
                velocidadeY = 0;
                break;
            case 38: // up
                velocidadeX = 0;
                velocidadeY = -velocidade;
                break;
            case 39: // right
                velocidadeX = velocidade;
                velocidadeY = 0;
                break;
            case 40: // down
                velocidadeX = 0;
                velocidadeY = velocidade;
                break;         
            default:
               
                break;
        };
    }
};

