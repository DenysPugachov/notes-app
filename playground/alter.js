const fs = require("fs")

const bufferData = fs.readFileSync("./userData.json")
const objData = JSON.parse(bufferData)

objData.name = "Alice"
objData.age = "10"
objData.gender = "f"

const strNewData = JSON.stringify(objData)

fs.writeFileSync("userData.json", strNewData)

console.log('data :>> ', strNewData);