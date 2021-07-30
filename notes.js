const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log('Note added')
        saveNotes(notes)
    } else {
        console.log('Note Title Taken')
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const present = notes.filter(note => note.title !== title)

    if (present.length === notes.length) {
        console.log(chalk.red(('Note ' + title + ' not present')))
    } else {
        console.log(chalk.green(('Note ' + title + ' removed')))
        saveNotes(present)
    }
}

const readNote = title => {
    const note = loadNotes().find(note => note.title === title)
    if(note) {
        console.log(title)
        console.log(note.body)
    } else {
        console.log(chalk.red('Note not found'))
    }
}

const listNote = () => loadNotes().forEach(note => console.log(chalk.yellow(note.title)))

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNote: listNote
}