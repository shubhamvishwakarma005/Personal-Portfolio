
const num = [2,5,6,9,7,3,4,8];

let target = 15;

function twosum(num , target){

    for(let i=0; i<num.length; i++){

    for(let j=i; j<num.length; j++){

        if( num[i] + num[j] === target){

             console.log(num[i] + " + " + num[j] + " = 15 : ✔");

        }
         else{
            console.log(num[i] + " + " + num[j] ,'not matched ! : ❌');
        }
        
    }
}

}





