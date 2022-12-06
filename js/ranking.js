let ranking = []

let xhttp;

function createRequest() {
  xhttp = new XMLHttpRequest();
  if (!xhttp) {
    createSnackBar("Não foi possível criar um objeto XMLHttpRequest!", "error");
  }

  xhttp.onreadystatechange = getDados;
  xhttp.open('GET', 'operations/get_ranking.php', true);
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhttp.send();
}

async function getDados() {
  try {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        ranking = JSON.parse(xhttp.responseText);
        render();
      }
      else {
        createSnackBar("Um problema ocorreu!", "error");
      }
    }
  }
  catch (e) {
    createSnackBar("Ocorreu uma exceção: " + e, "error");
  }
}

var tr;
var td;
const tbody = document.getElementById('tbody');

function createTr() {
  const element = document.createElement('tr');
  element.className = "line-table";
  return element;
}

function createTd(text) {
  const element = document.createElement('td');
  element.className = "cell content";
  element.textContent = text;
  return element;
}

function createImageElement(url) {
  const image = document.createElement('img');
  image.src = url;
  return image;
}

function createSpanElement(text, tag) {
  const element = document.createElement('span');
  if (tag == 'desceu') {
    element.className = "rotate";
  }
  element.textContent = text;
  return element;
}

function render() {
  for (i = 0; i < ranking.length; i++) {
    tr = createTr();
    for (j = 0; j < ranking[i].length; j++) {
      if (j == 1) {
        tag = ranking[i][j] == 'none' ? ' - ' : ' ^ '
        span1 = createSpanElement(tag, ranking[i][j]);
        span2 = createSpanElement(tag, ranking[i][j]);
        td = createTd();
        td.classList.add('change')
        td.appendChild(span1);
        td.appendChild(span2);
      }
      else if (j == 3) {
        td = createTd(ranking[i][j] == 0 ? 'Clássico' : 'Contra o tempo');
      }
      else if (j == 7) {
        image = ranking[i][j] == 1 ? createImageElement('./img/thumbUp.svg') : createImageElement('./img/thumbDown.svg');
        td = createTd();
        td.classList.add('color');
        td.append(image);
      } else {
        td = createTd(ranking[i][j]);
        if (j == 0) {
          td.classList.add('color');
        }
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

createRequest();
