const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const { listNote, readNote, addNote, removeNote } = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Removes a title',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => removeNote(argv.title)
})

yargs.command({
    command: 'read',
    describe: 'Reads a note if present',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => readNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'Lists all the titles of the notes',
    handler: () => listNote()
})

yargs.parse()