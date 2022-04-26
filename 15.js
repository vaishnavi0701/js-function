// function perfect(num){
//     sum=0
//     for(var i=1;i{   
//         if(num%i === 0){
//             sum+=i
//         }
//     }
//     if(sum === num){
//         console.log(num," is a perfect number");
//     }
//     else{
//         console.log(num," is not a perfect number");
//     }
//  }
// }
//  perfect(6);

function perfect(num){
    sum=0
    while(i<num.length){
        if(num%i===0){
            sum=sum+i
        }
    if(sum==num){
        console.log(num,"perfect")
    }
    else{
        console.log(num,"not perfect")
    }
    }
}
perfect(6)