let modoJogo = '';
let tamanhoTabuleiro = 0;
let firstCard = '';
let secondCard = '';
let selectCards = [];
let qtdCards = 0;

const startGameButton = document.getElementById('startGame');
const modal = document.getElementById('modal')
const cards = document.querySelector('.cards');
const cardImages = ['qat', 'ecu', 'sen', 'ned', 'eng', 'irn', 'usa', 'wal', 'arg',
  'ksa', 'mex', 'pol', 'fra', 'aus', 'den', 'tun', 'esp', 'crc', 'ger', 'jpn', 'bel',
  'can', 'mar', 'cro', 'bra', 'srb', 'sui', 'cmr', 'por', 'gha', 'uru', 'kor'];

const render = (event) => {
  if (modoJogo === '') {
    alert('Selecione o modo de jogo para prosseguir!');
    return;
  }
  if (tamanhoTabuleiro === 0) {
    alert('Selecione o tamanho do tabuleiro para prosseguir!');
    return;
  }
  modal.style.display = 'none';
  qtdCards = tamanhoTabuleiro * tamanhoTabuleiro / 2;
  selectCards = cardImages.slice(0, qtdCards);
  loadGame();
}

startGameButton.addEventListener('click', render);


// function render() {
//   if (modojogo != '' && tamanhoTabuleiro != '') {
//     document.getElementById('modal').style.display = 'none';
//     for (let i = 0; i < tamanhoTabuleiro; i++) {
//       // alert(document.getElementById('cards').style.gridTemplateColumns);
//       document.getElementById('cards').style.gridTemplateColumns = 'repeat(' + tamanhoTabuleiro + ' ,1fr)';
//       let str = '';
//       // str += '<div class="linha ' + i + '">';
//       for (let j = 0; j < tamanhoTabuleiro; j++) {
//         str += '<div class="card column"> <div class="contorno"> <img src="../img/miniLogo.png"> <img src="../img/bandeiras/Brasil.png"> </div> </div>'
//         // str += '<div class="card column"> <div class="contorno"> <img src="../img/bandeiras/Brasil.png"> </div> </div>'
//       }
//       // str += '</div>';
//       document.getElementById('cards').innerHTML += str;
//     }
//   }
//   else {
//     alert('oidforufjrwç');
//   }
//   //(tamanhoTabuleiro != 8 ? tamanhoTabuleiro : tamanhoTabuleiro - 4)

// }

function getValueModoJogo(modoJogoSelect) {
  if (modoJogo != '') {
    var optionModoJogoDeactivate = document.getElementById(modoJogo);
    optionModoJogoDeactivate.classList.remove("activate");
  }
  modoJogo = modoJogoSelect;
  var optionModoJogoActivate = document.getElementById(modoJogoSelect);
  optionModoJogoActivate.classList.add("activate");
}

function getValueTamanhoTabuleiro(tamanhoTabuleiroSelect) {
  if (tamanhoTabuleiro != 0) {
    var optionTabuleiroDeactivate = document.getElementById(tamanhoTabuleiro);
    optionTabuleiroDeactivate.classList.remove("activate");
  }
  tamanhoTabuleiro = tamanhoTabuleiroSelect;
  var optionTabuleiroActivate = document.getElementById(tamanhoTabuleiroSelect);
  optionTabuleiroActivate.classList.add("activate");
}

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createImageElement = (url) => {
  const image = document.createElement('img');
  image.src = url;
  return image;
}

const checkEndGame = () => {
  const disableCards = document.querySelectorAll('.got-right');
  if (disableCards.length === qtdCards * 2) {
    alert('Parabéns você conseguiu!');
  }
}

const checkCards = () => {
  firstImage = firstCard.getAttribute('data-image');
  secondImage = secondCard.getAttribute('data-image');
  if (firstImage === secondImage) {
    firstCard.firstChild.classList.add('got-right');
    secondCard.firstChild.classList.add('got-right');

    firstCard = '';
    secondCard = '';

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('showCard');
      secondCard.classList.remove('showCard');

      firstCard = '';
      secondCard = '';
    }, 500);
  }
}

const showCard = ({ target }) => {
  if (target.parentNode.className.includes('showCard')) {
    return;
  }

  if (firstCard === '') {
    target.parentNode.classList.add('showCard');
    firstCard = target.parentNode;
  } else if (secondCard === '') {
    target.parentNode.classList.add('showCard');
    secondCard = target.parentNode;

    checkCards();
  }
}

const createCard = (cardImage) => {
  cards.style.gridTemplateColumns = 'repeat(' + tamanhoTabuleiro + ' ,1fr)';

  const card = createElement('div', 'card')
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  const frontImg = createImageElement(`../img/bandeiras/${cardImage}.png`);
  front.appendChild(frontImg);

  const backImg = createImageElement(`../img/miniLogo.png`);
  back.appendChild(backImg);

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', showCard);
  card.setAttribute('data-image', cardImage);

  return card
}

const loadGame = () => {
  const duplicateImages = [...selectCards, ...selectCards];
  const sortDuplicateImages = duplicateImages.sort(() => Math.random() - 0.5);
  sortDuplicateImages.forEach((cardImage) => {
    const card = createCard(cardImage);
    cards.appendChild(card);
  })
}