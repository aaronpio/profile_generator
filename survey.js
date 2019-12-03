const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ansArr = [];

const q1 = () => {
  rl.question("What's your name? Nicknames are also acceptable:  ", answer => {
    ansArr.push(answer);
    q2();
  });
};

const q2 = () => {
  rl.question("What's an activity you like doing?: ", answer => {
    ansArr.push(answer);
    q3();
  });
};

const q3 = () => {
  rl.question("What do you listen to while doing that?: ", answer => {
    ansArr.push(answer);
    q4();
  });
};

const q4 = () => {
  rl.question(
    "Which meal is your favourite (eg: dinner, brunch, etc.): ",
    answer => {
      ansArr.push(answer);
      q5();
    }
  );
};

const q5 = () => {
  rl.question("What's your favourite thing to eat for that meal?: ", answer => {
    ansArr.push(answer);
    q6();
  });
};

const q6 = () => {
  rl.question("Which sport is your absolute favourite?: ", answer => {
    ansArr.push(answer);
    q7();
  });
};

const q7 = () => {
  rl.question("What's your super power?: ", answer => {
    ansArr.push(answer);
    console.log(
      `\nMy name is ${ansArr[0]}, I like doing ${ansArr[1]} while listening to ${ansArr[2]} and eating ${ansArr[4]} for ${ansArr[3]}. I like to watch ${ansArr[5]} and my superpower is ${ansArr[6]}.`
    );
    rl.close();
  });
};

q1();
