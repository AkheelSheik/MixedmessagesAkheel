const messagestarsign = {
    start: ['Today you will find ','Next year you will have ','Last year you had ','Tommorow you will '],
starsign: ['cancer','virgo','capricorn','leo'],
emotion: ['happiness','sadness','love','anger','depression','joy','friendship','enemy','comraderie']
}

let number1 = Math.floor(Math.random()*messagestarsign.start.length);
let number2 = Math.floor(Math.random()*messagestarsign.starsign.length);
let number3 = Math.floor(Math.random()*messagestarsign.emotion.length);

console.log('If you are ' + messagestarsign.starsign[number2] + ',' + messagestarsign.start[number1] + messagestarsign.emotion[number3])