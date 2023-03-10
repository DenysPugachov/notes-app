const fs = require("fs")
const chalk = require("chalk")

const loadNotes = () => {
    
    debugger 

    try {
        const buffer = fs.readFileSync("notesDB.json")
        const notesObj = JSON.parse(buffer)
        return notesObj
    }
    catch (e) {
        return []
    }
}


const saveNotes = notesArr => {
    const notesStr = JSON.stringify(notesArr)
    fs.writeFileSync("notesDB.json", notesStr)
}

const listAllNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(chalk.magenta("There is not notes to display.")); return
    }
    notes.forEach(n => {
        console.log(`${chalk.bold.underline(n.title)}: \n ${chalk.magenta.italic(n.body)} \n`)
    })
}


const addNote = (title, body) => {
    const notesArr = loadNotes()
    //check for duplicate titles in arr
    const duplicateNote = notesArr.find(n => n.title === title)

    // duplicates not found === undefined
    if (!duplicateNote) {
        notesArr.push({
            title: title,
            body: body
        })
        saveNotes(notesArr)
        console.log("New note with title:", chalk.bgGreen.bold(title), chalk.green("was successfully added!"))
    } else {
        console.log(chalk.red("Title:", chalk.bgRed.bold(title), `is already taken. Please choose another title.`))
    }
}

const removeNote = title => {
    const notesArr = loadNotes()
    const notesToKeep = notesArr.filter(n => n.title != title)
    if (notesToKeep.length < notesArr.length) {
        saveNotes(notesToKeep)
        console.log("Note title:", chalk.bgRed(title), chalk.red("was removed."))
    } else {
        console.log(chalk.bgRed.bold(`Note with title: "${title}" not exist.`))
    }
}

const readNote = title => {
    const notesArr = loadNotes()
    const note = notesArr.find(n => n.title === title)

    if (note) {
        console.log(`${chalk.bold.underline(note.title)}: \n ${chalk.magenta.italic(note.body)} \n`)
    } else {
        console.log(chalk.bgRed.bold(`Note with title: "${title}" not exist.`))
    }
}
   
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote,
}

