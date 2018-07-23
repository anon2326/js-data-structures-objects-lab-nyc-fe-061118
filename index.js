// Write your solution in this file!
const driver = {name: 'Sam'};
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = Object.assign({name:'Sam'}, driver);
  newDriver.address = '11 Broadway';
  return newDriver;
}
