// const chalk = require("chalk")
// const yargs = require("yargs")
const yargs = require('yargs')
const { getNote } = require("./notes.js")



yargs
.command({
    command: "add",
    describe: "Add new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        }
    },
    handler: function (argv) {
        console.log("Title:", argv.title, "\nBody:", argv.body)
    }
})

yargs
.command({
    command: "remove",
    describe: "Remove the note",
    handler: function () {
        console.log("Removing the note.")
    }
})

yargs
.command({
    command: "list",
    describe: "Listing the notes",
    handler: function () {
        console.log("Listing out all your notes.")
    }
})

yargs
.command({
    command: "read",
    describe: "Read the note",
    handler: function () {
        console.log("Reading a note.")
    }
})

//need call to get yarn.command work
yargs.parse()
