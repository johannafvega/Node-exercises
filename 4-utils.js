// Exporting a function and using the 'require' module

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}
// export default
module.exports = sayHi 