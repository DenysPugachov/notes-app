const chalk = require("chalk")
const yargs = require("yargs")
const { getNote } = require("./notes.js")

yargs.command({
    command: "add",
    describe: "Add new note",
    handler: function () {
        console.log("Adding a new note.")
    }
})

yargs.command({
    command: "remove",
    describe: "Remove the note",
    handler: function () {
        console.log("Removing the note.")
    }
})

yargs.command({
    command: "list",
    describe: "Listing the notes",
    handler: function () {
        console.log("Listing out all your notes.")
    }
})

yargs.command({
    command: "read",
    describe: "Read the note",
    handler: function () {
        console.log("Reading a note.")
    }
})

getNote()
