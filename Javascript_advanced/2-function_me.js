#!/usr/bin/node

function welcomeMessage(FullName) {
    alert(`${'Welcome' + ' ' + FullName}`);
}
const guillaume = () => welcomeMessage('Guillaume');
const alex = () => welcomeMessage('Alex');
const fred = () => welcomeMessage('Fred');
