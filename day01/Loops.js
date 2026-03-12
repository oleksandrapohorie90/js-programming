
for(let i = 0; i< 5; i++){
  console.log("Hello Cydeo");
}

console.log("------------------------");
for(let i=1; i<=10; i++){
    console.log(i);
    if(i === 5){
        break; //break is used to exit the loop when a certain condition is met. In this case, when i is equal to 5, the loop will stop executing and exit.
    }
}

console.log("--------------------");
for(let i=1; i<=10; i++){

    if(i == 3 || i == 7){
        continue; //continue is used to skip the current iteration of the loop when a certain condition is met. In this case, when i is equal to 5, the loop will skip the rest of the code inside the loop for that iteration and move on to the next iteration.
    }
    console.log(i);
}