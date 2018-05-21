const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINA90SDNF90N', '90ANDFS0998N');
bitcoin.createNewBlock(111, 'OINA90SFNF90N', '90ANFS0998N');
bitcoin.createNewBlock(123, 'OINC90SDNF90N', '90ANDFS0998N');

console.log(bitcoin);