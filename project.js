
const lastChoice=[];
const pick1=[];
const pick2=[];
const random=['red','blue','plum', 'salmon', 'blue', 'yellow','purple','green', 'green','orange','red','yellow', 'orange', 'purple', 'plum', 'salmon'];


let turn = 0;
const red = [];
const blue = [];
// var index = document.getElementsByClassName('gallery__item js-gallery-item').selectedIndex;
const wrapper = document.querySelector('.wrapper');
const one = document.querySelector('.one')
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const ten = document.querySelector('.ten');
const eleven = document.querySelector('.eleven');
const twelve = document.querySelector('.twelve');
const thirteen = document.querySelector('.thirteen');
const fourteen = document.querySelector('.fourteen');
const fifteen = document.querySelector('.fifteen');
const sixteen = document.querySelector('.sixteen');
const startGame = document.querySelector('#learBoard');
const clearBoard1 = document.querySelector('#clearBoard')


clearBoard1.addEventListener("click", function()  {
    console.log('new game');
    console.log('pick1 ' + pick1);
    console.log('pcik2 ' +pick2); 
    pick1.splice(0, pick1.length)
    pick2.splice(0, pick2.length)
    console.log('pick1 ' + pick1);
    console.log('pcik2 ' +pick2);  
    one.classList.remove('red'), one.classList.add('lightgrey');
    two.classList.remove('blue'), two.classList.add('lightgrey');
    three.classList.remove('plum'), three.classList.add('lightgrey');
    four.classList.remove('salmon'), four.classList.add('lightgrey');
    five.classList.remove('blue'), five.classList.add('lightgrey');
    six.classList.remove('yellow'), six.classList.add('lightgrey');
    seven.classList.remove('purple'), seven.classList.add('lightgrey');
    eight.classList.remove('green'), eight.classList.add('lightgrey');
    nine.classList.remove('green'), nine.classList.add('lightgrey');
    ten.classList.remove('orange'), ten.classList.add('lightgrey');
    eleven.classList.remove('red'), eleven.classList.add('lightgrey');
    twelve.classList.remove('yellow'), twelve.classList.add('lightgrey');
    thirteen.classList.remove('orange'), thirteen.classList.add('lightgrey');
    fourteen.classList.remove('purple'), fourteen.classList.add('lightgrey');
    fifteen.classList.remove('plum'), fifteen.classList.add('lightgrey');
    sixteen.classList.remove('salmon'), sixteen.classList.add('lightgrey');

});





one.addEventListener("click", function() { 
    if (pick1.length == pick2.length) {
          one.classList.remove('lightgrey');
          one.classList.add('red');
          pick1.push('red');
          console.log('1 pick1 ' + pick1);
          console.log('1 pcik2 ' + pick2);
    } 
      else if (pick1.length != pick2.length) {
      one.classList.remove('lightgrey');  
      one.classList.add('red');
      pick2.push('red');
      if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
        return;
    } else {
        pick1.pop();
        pick2.pop();
        setTimeout(() => {
        // cleanUp(() => {
            one.classList.remove('red');
            one.classList.add('lightgrey');
            console.log('2 wrong pick1 ' + pick1);
            console.log('2 wrong pick2 ' + pick2);
         }, 500);
        
        
        return;
        
        //change square background back to white.
        }
    }
  });
  two.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        two.classList.add('blue');
        pick1.push('blue');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length !== pick2.length) {
    two.classList.add('blue');
    pick2.push('blue');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      two.classList.remove('blue');
      two.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
      }, 500);
      //change square background back to white.
  }
  }
  });
  three.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        three.classList.add('plum');
        pick1.push('plum');
        console.log('1 pic); ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    three.classList.add('plum');
    pick2.push('plum');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      three.classList.remove('plum');
      three.classList.add('lightgrey');
          console.log('2 wrong pick1 ' + pick1);
          console.log('2 wrong pick2 ' + pick2);
        }, 500);
      //change square background back to white.
  }
  }
  });
  four.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        four.classList.add('salmon');
        pick1.push('salmon');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    four.classList.add('salmon');
    pick2.push('salmon');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      four.classList.remove('blue');
      four.classList.add('lightgrey');
      console.log('2 wrong pick1 ' + pick1);
      console.log('2 wrong pick2 ' + pick2);
          }, 500);
      //change square background back to white.
  }
  }
  });
  five.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        five.classList.add('blue');
        pick1.push('blue');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    five.classList.add('blue');
    pick2.push('blue');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
        five.classList.remove('blue');
        five.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
            }, 500);
      
      //change square background back to white.
  }
  }
  });
  six.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        six.classList.add('yellow');
        pick1.push('yellow');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    six.classList.add('yellow');
    pick2.push('yellow');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      six.classList.remove('yellow');
      six.classList.add('lightgrey');
      console.log('2 wrong pick1 ' + pick1);
      console.log('2 wrong pick2 ' + pick2);
            }, 500);

      //change square background back to white.
  }
  }
  });
  seven.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        seven.classList.add('purple');
        pick1.push('purple');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    seven.classList.add('purple');
    pick2.push('purple');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      seven.classList.remove('purple');
      seven.classList.add('lightgrey');
      console.log('2 wrong pick1 ' + pick1);
      console.log('2 wrong pick2 ' + pick2);
              }, 500);
      //change square background back to white.
  }
  }
  });
  eight.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        eight.classList.add('green');
        pick1.push('green');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    eight.classList.add('green');
    pick2.push('green');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      eight.classList.remove('green');
      eight.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                }, 500);
      //change square background back to white.
  }
  }
  });
  nine.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        nine.classList.add('green');
        pick1.push('green');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    nine.classList.add('green');
    pick2.push('green');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      nine.classList.remove('green');
      nine.classList.add('lightgrey');
      console.log('2 wrong pick1 ' + pick1);
      console.log('2 wrong pick2 ' + pick2);
                  }, 500);

      //change square background back to white.
  }
  }
  });
  ten.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        ten.classList.add('orange');
        pick1.push('orange');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    ten.classList.add('orange');
    pick2.push('orange');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      ten.classList.remove('orange');
      ten.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);

      //change square background back to white.
  }
  }
  });
  eleven.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        eleven.classList.add('red');
        pick1.push('red');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    eleven.classList.add('red');
    pick2.push('red');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);

      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      eleven.classList.remove('red');
      eleven.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      //change square background back to white.
  }
  }
  });
  twelve.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        twelve.classList.add('yellow');
        pick1.push('yellow');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    twelve.classList.add('yellow');
    pick2.push('yellow');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      twelve.classList.remove('yellow');
      twelve.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      //change square background back to white.
  }
  }
  });
  thirteen.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        thirteen.classList.add('orange');
        pick1.push('orange');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    thirteen.classList.add('orange');
    pick2.push('orange');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      thirteen.classList.remove('orange');
      thirteen.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      //change square background back to white.
  }
  }
  });
  fourteen.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        fourteen.classList.add('purple');
        pick1.push('purple');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    fourteen.classList.add('purple');
    pick2.push('purple');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      fourteen.classList.remove('purple');
      fourteen.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      //change square background back to white.
  }
  }
  });
  fifteen.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        fifteen.classList.add('plum');
        pick1.push('plum');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    fifteen.classList.add('plum');
    pick2.push('plum');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      fifteen.classList.remove('plum');
      fifteen.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      //change square background back to white.
  }
  }
  });
  sixteen.addEventListener("click", function() {
    if (pick1.length == pick2.length) {
        sixteen.classList.add('salmon');
        pick1.push('salmon');
        console.log('1 pick1 ' + pick1);
        console.log('1 pcik2 ' + pick2);
    } 
     else if (pick1.length != pick2.length) {
    sixteen.classList.add('salmon');
    pick2.push('salmon');
    if (JSON.stringify(pick1) === JSON.stringify(pick2)) {
        console.log('same pick1 ' + pick1);
        console.log('same pick2 ' + pick2);
      return;
  } else {
      pick1.pop();
      pick2.pop();
      setTimeout(() => {
      sixteen.classList.remove('salmon');
      sixteen.classList.add('lightgrey');
        console.log('2 wrong pick1 ' + pick1);
        console.log('2 wrong pick2 ' + pick2);
                    }, 500);
      sixteen.classList.add('lightgrey');
      console.log('2 wrong pick1 ' + pick1);
      console.log('2 wrong pick2 ' + pick2);
      //change square background back to white.
  }
  }
  });





























































































































































































































































































