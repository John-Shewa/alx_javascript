#!/usr/bin/node

function createClassRoom(numbersOfStudents){
    function studentseat(seat){
        return () => seat;
        }
        const students = [];
        for (let i = 0; i <= numbersOfStudents; i++) {
            students.push(studentseat(i + 1));
        }
        return students;
    }
    classRoom = createClassRoom(10);