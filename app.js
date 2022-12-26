
const { string } = require('yargs')
const yargs = require('yargs')
const notes = require("./notes.js")

yargs
    .command({
        command: "add",
        describe: "Add new note",
        builder: {
            title: {
                describe: "Note title",
                alias: "-t",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "Note body",
                alias: "-b",
                demandOption: true,
                type: "string",
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })

yargs
    .command({
        command: "remove",
        describe: "Remove the note",
        bundler: {
            title: {
                describe: "Title of the note to delete.",
                demandOption: true,
                type: "string",
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })

yargs
    .command({
        command: "list",
        describe: "Listing the notes",
        handler() {
            notes.listAllNotes()
        }
    })

yargs
    .command({
        command: "read",
        describe: "Read the note",
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: string,
            }
        },
        handler(argv) {
            notes.readNote(argv.title)
        }
    })

//need call to get yarn.command work
yargs.parse()

