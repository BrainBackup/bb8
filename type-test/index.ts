import { mlqa, Question } from '@brain-backup/types/index';

const q: Question = {
    a: 'what is the time',
    q: ' dont know',
    date: new Date()
}
console.log(mlqa(q));