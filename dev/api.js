var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const Blockchain = require ('./blockchain');
const uuid = require('uuid/v1');

const nodeAddress = uuid().split('-').join('');


const bitcoin = new Blockchain();

app.get('/blockchain', function(req, res){
    res.send(bitcoin)
})

app.post('/transaction', function(req, res){
    bitcoin.createNewTransaction(req.body, req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `transacction will be added in block ${blockIndex}.`});
})

app.get('/mine', function(req, res){
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] +1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockhash = bitcoin.previousBlockHash(previousBlockHash, currentBlockData, nonce);
 

    bitcoin.createNewTransaction(12.5, '00', nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockhash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });
})
app.listen(3000, function(){
    console.log('listening on port 3000')
})