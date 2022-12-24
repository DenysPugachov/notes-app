const { notStrictEqual } = require("assert")
const fs = require("fs")

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
        console.log(`New note with title: "${title}" was successfully added!`)
    } else {
        console.log(`"${title}" is already taken. Please choose another title.`)
    }
}


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
    // console.log('Form save notest notesArr :>> ', notesArr);
}


module.exports = {
    getNote: getNote,
    addNote: addNote
}

