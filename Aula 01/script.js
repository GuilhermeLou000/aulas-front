// const $nome = document.querySelectorAll("div");
// const $nome = document.querySelector("#nomeAluno");

const $calcular = document.getElementById('calcular');
const $exibir = document.querySelector('.exibir');
const $ocultar = document.getElementById('ocultar');
const $conteiner = document.querySelector('.conteiner');

console.log($exibir)

const calcularMedia = (n1, n2) => (parseInt(n1) + parseInt(n2))/2;

const verifivarSituacao = (media) => media >= 5 ? "Aprovado" : "Reprovado"   

const exibirMedia = () => {
    const $nome = document.getElementById('nomeAluno');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    console.log($media.value);
    const media = calcularMedia(nota1,nota2);

    $situacao.value = verifivarSituacao(media);

    $media.value= media;


    // if($media.value > 0 && $media.value < 3){
    //     $conceito.value = 'E';
    // } else if ($media.value >= 3 && $media.value < 5) {
    //     $conceito.value = 'D';
    // } else if ($media.value >= 5 && $media.value < 8) {
    //     $conceito.value = 'C';
    // } else if ($media.value >= 8 && $media.value < 10) {
    //     $conceito.value = 'B';
    // } else if ($media.value == 10) {
    //     $conceito.value = 'A';
    // } else if ($media.value >= 11 && $media.value < 30){
    //     $conceito.value = 'S';
    // } else if ($media.value >= 30 && $media.value < 60){
    //     $conceito.value = 'SS';
    // } else if ($media.value >= 60 && $media.value < 90) {
    //     $conceito.value = 'SSS';
    // } else if ($media.value >= 90 && $media.value <= 100) {
    //     $conceito.value = 'SSS+';
    // }
}


const defineConceito = () => {
    const media = document.getElementById('media').value 
    const $conceito = document.getElementById('conceito');

    if(media > 0 && media < 3){
        $conceito.value = 'E';
    } else if (media >= 3 && media < 5) {
        $conceito.value = 'D';
    } else if (media >= 5 && media < 8) {
        $conceito.value = 'C';
    } else if (media >= 8 && media < 10) {
        $conceito.value = 'B';
    } else if (media == 10) {
        $conceito.value = 'A';
    }else if (media >= 11 && media < 30){
         $conceito.value = 'S';
    } else if (media >= 30 && media < 60){
         $conceito.value = 'SS';
    } else if (media >= 60 && media < 90) {
          $conceito.value = 'SSS';
    } else if (media >= 90 && media <= 100) {
         $conceito.value = 'SSS+';
    }

}

//função normal
function exibirResultado(){
    exibirMedia();
    defineConceito();
}

// //Função anonima
// const calcular2 = function (){
//     calcularMedia();
//     calcularConceito();
// }

// //Arrow function
// const calcualr3 = () => {
//     calcularMedia();
//     calcularConceito();
// }

const exibir = ( el ) => {
    el.classList.add ('exibir');
}

const ocultar = ( el ) => {
    el.classList.remove ('exibir');
}

$exibir.addEventListener('click',() => exibir ($conteiner));
$ocultar.addEventListener('click',() => ocultar ($conteiner));
$calcular.addEventListener('click',exibirResultado);
