

for(let i = 0 ; i <= 10 ; i++ ){
    if(i%2 == 1){
        continue;
    }
    console.log(`i : ${i}`);
}

for(let i = 0 ; i <= 10 ; i ++){
    if(i > 8){
        break;
    }
    console.log(`i : ${i}`);
}