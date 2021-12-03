const messagestarsign = {
    start: ['Today you will find ','Next year you will have ','Last year you had ','Tommorow you will '],
starsign: ['cancer','virgo','capricorn','leo'],
emotion: ['happiness','sadness','love','anger','depression','joy','friendship','enemy','comraderie']
} // description of the message

let number1 = Math.floor(Math.random()*messagestarsign.start.length); // this is there to randomize each array
let number2 = Math.floor(Math.random()*messagestarsign.starsign.length); // same as above
let number3 = Math.floor(Math.random()*messagestarsign.emotion.length); // same as above

console.log('If you are ' + messagestarsign.starsign[number2] + ',' + messagestarsign.start[number1] + messagestarsign.emotion[number3])