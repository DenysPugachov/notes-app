const fs = require("fs")
const chalk = require("chalk")

const loadNotes = function () {
    try {
        const buffer = fs.readFileSync("notesDB.json")
        const notesObj = JSON.parse(buffer)
        return notesObj
    }
    catch (e) {
        return []
    }
}


const saveNotes = function (notesArr) {
    const notesStr = JSON.stringify(notesArr)
    fs.writeFileSync("notesDB.json", notesStr)
}


const getNote = function () {
    console.log("Showing the note")
}


const addNote = function (title, body) {
    const notesArr = loadNotes()
    //check for duplicate titles in arr
    const duplicateNotesArr = notesArr.filter(n => {
        return n.title === title
    })
    if (duplicateNotesArr.length === 0) {
        //no duplicates
        notesArr.push({ title: title, body: body })
        saveNotes(notesArr)
        console.log(chalk.green("New note with title:", chalk.bgGreen.bold(title), "was successfully added!"))
    } else {
        console.log(chalk.red("Title:", chalk.bgRed.bold(title), `is already taken. Please choose another title.`))
    }
}

const removeNote = function (title) {
    const notesArr = loadNotes()
    const notesToKeep = notesArr.filter(n => {
        return n.title != title
    })
    if (notesToKeep.length < notesArr.length) {
        saveNotes(notesToKeep)
        console.log(chalk.red("Note title:", chalk.bgRed(title), "was removed."))
    } else {
        console.log(chalk.bgRed.bold(`Note with title: "${title}" not exist.`))
    }
}


module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
}

