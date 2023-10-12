async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0x48B7f39AD8740b0D4098CC2721AbA3CE423D6645
  
  ///hash of your transaction is:0x5940b3451b6a8a301dd9897ca2c0bb0f6ce108fd0920098f70fde0e233b84a55 serach eterscan
  ////token no 4

  // hash of your transaction is:  0xef655f76fe69ed446afb42ce9544bb643531561e09f9799cac7beeb87a4924a2 
///token no 5 



///0x1d279bd17011C0c0080D37aD79d090a89A617DD3

//The hash of your transaction is:  0xca749ce3f6afb5881997719fec6c52d59760a4e71b6ec809db857eae58899d76 






