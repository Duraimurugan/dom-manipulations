

// document.addEventListener('load', append);
window.onload = loadData;

function loadData() {
  const docBody = document.getElementsByTagName('body')[0];
  console.log(docBody);
  const h1Tag = document.createElement('h1');
  h1Tag.textContent = 'test';
  docBody.appendChild(h1Tag);
  const data = getData();
  console.log(data);
}

function getData() {
  return [
    {
      "name": "Lindy",
      "breed": "Cymric",
      "color": "white",
      "kittens": [
        {
          "name": "Percy",
          "gender": "m"
        },
        {
          "name": "Thea",
          "gender": "f"
        },
        {
          "name": "Annis",
          "gender": "f"
        }
      ]
    },
    {
      "name": "Mina",
      "breed": "Aphrodite Giant",
      "color": "ginger",
      "kittens": [
        {
          "name": "Doris",
          "gender": "f"
        },
        {
          "name": "Pickle",
          "gender": "f"
        },
        {
          "name": "Max",
          "gender": "m"
        }
      ]
    },
    {
      "name": "Antonia",
      "breed": "Ocicat",
      "color": "leopard spotted",
      "kittens": [
        {
          "name": "Bridget",
          "gender": "f"
        },
        {
          "name": "Randolph",
          "gender": "m"
        }
      ]
    }
  ];
}