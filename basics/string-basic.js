const name="saksham"
const repoCount=50

//console.log(name + repoCount + "value")// outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('Saksham-10-2001') // run in console
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)


const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newString1="    Saksham    "
console.log(newString1.trim())


const url="https://saksham.com/saksham%20awasthi"
console.log(url.replace('%20','_'))

console.log(gameName.split('-'))