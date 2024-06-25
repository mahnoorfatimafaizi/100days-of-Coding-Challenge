"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grades = [85, 62, 54, 73, 46, 56, 66];
let totalSum = grades.reduce((sum, grades) => sum + grades, 0);
let averageGrade = totalSum / grades.length;
console.log(`The average grade is ${averageGrade}`);
