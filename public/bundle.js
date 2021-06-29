const contractABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        }
      ],
      "name": "getItem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        }
      ],
      "name": "vote",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const contractAddress = '0x80b96647dE2164d0b97DAB314Ba72D6C7Dad1E2A';
let web3 = new Web3('http://192.168.0.125:9545');
let moc = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
  refresh();
  if (web3) {
    document.getElementById('landing').style.display = 'flex';
    document.getElementById('cover').style.display = 'none';
  }
});

const refresh = () => {
  for (let idx = 0; idx < 3; idx++) {
    moc.methods.getItem(idx).call()
      .then(result => {
        document.getElementById(`v${idx}`).innerHTML = result;
      });
  }
}

const vote = (e) => {
  let index = e.id[4];
  console.log(index);
  moc.methods.vote(index).send({
    from: '0xd3f092e83cc9be6e82eba1021cf8eeeddf163ebf'
  }).then(result => {
    console.log(result);
    refresh();
  });
}