const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const previousBlockHash = '305035kddfdfdfdfdfdfdfk';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ndndhdhdh*83838',
        recipient: '3935dkskkkdk'
    },
    {
        amount: 103,
        sender: 'ndndhsdhdh*83838',
        recipient: '393d5dkskkkdk'
    },
    {
        amount: 120,
        sender: 'ndndsdhdhdh*83838',
        recipient: '3935ddfkskkkdk'
    }
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 27470))

