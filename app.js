const command = process.argv[2]


if (command === "add") {
    console.log("Add note")
} else if (command === "remove"){
    console.log("Remove note")
} else {
    console.error("Wrong command")
}

