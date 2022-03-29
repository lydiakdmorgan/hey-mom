let block1 = ['What do ', 'Why do ', 'How do '];

let block2 = ['pokemon ', 'elephants ', 'penguins ', 'flowers ', 'I ', 'we ', 'grandma and grandpa ', 'Teddy and Peter '];

let block3 = ['eat ', 'grow ', 'run ', 'jump ', 'yell ', 'think ', 'poop ', 'pee ', 'chew '];

let block4 = ['so fast', 'so slow', 'so loud', 'so quiet', 'so wiggly', 'so stinky', 'so much'];

function chooseBlock1() {
    let selectionIndex = Math.floor(Math.random() * block1.length);
    let selection = block1[selectionIndex];
    return selection;
}

function chooseBlock2() {
    let selectionIndex = Math.floor(Math.random() * block2.length);
    let selection = block2[selectionIndex];
    return selection;
}

function chooseBlock3() {
    let selectionIndex = Math.floor(Math.random() * block3.length);
    let selection = block3[selectionIndex];
    return selection;
}

function chooseBlock4() {
    let selectionIndex = Math.floor(Math.random() * block4.length)
    let selection = block4[selectionIndex];
    return selection;
}

function assembleOutput() {
    let output = chooseBlock1() + chooseBlock2() + chooseBlock3() + chooseBlock4() + '?';
    return output;
}

console.log(assembleOutput());
