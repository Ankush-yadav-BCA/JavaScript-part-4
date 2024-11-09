let arr = [1,2,3,4,55,4,3,2,3];
/*---------------------- for Question no. 1 ---------------------- */
function deleteAllElement(elValue,array){
    let idx = array.indexOf(elValue);
    while(idx != -1){
        array.splice(idx,1);
        idx = array.indexOf(elValue);
    }
    return array;
}
console.log(`After deleteing element 3 from ${JSON.stringify(arr)} result is ${JSON.stringify(deleteAllElement(3,arr))}`);

/*---------------------- for Question no. 2 ---------------------- */
function numOfDigits(n){
    let count=0;
    while(n!=0){
        n = Math.floor(n/10);
        count+=1;
    }
    return count
}
console.log(`The number of digits for n is : ${numOfDigits(123456)}`);

/*---------------------- for Question no. 3 ---------------------- */
function sumOfDigits(n){
    let sum=0;
    while(n!=0){
        let rem = n%10;
        sum = sum + rem;
        n = Math.floor(n/10);
    }
    return sum
}

/*---------------------- for Question no. 4 ---------------------- */
function factorialOf(n){
    let facto = 1;
    if(n==0){
        return 1
    }else{
        for(let i=1; i<=n; i++){
            facto *= i;
        }
        return facto
    }
    
}
/*---------------------- for Question no. 5 ---------------------- */
function getLargest(array){
    if(array.length==0){
        return null
    }
    let largest = array[0];
    for(let i=0; i<array.length; i++){
        if(array[i] >= largest){
            largest = array[i];
        }
    }
    return largest
}