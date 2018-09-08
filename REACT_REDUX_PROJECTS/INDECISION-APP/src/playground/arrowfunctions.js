// const square=function(a){
//     return a*a
// }

// console.log(square(8))

// const sqaureArrow=(a)=>{
//     return a*a
// }
// console.log(sqaureArrow(8))

const getfirstName = (fName)=>{
   const first= fName.split(" ")[0]
    console.log(first)
}
getfirstName('rohan ganguly')
const getFName = (fName)=> fName.split(" ")[0]
console.log(getFName('Felicia Hoffman'))

const multiplier = {
    numbers : [10,3,4,5,6],
    multiplyBy:4,
    multiply(){
        return this.numbers.map((number)=>
            this.multiplyBy*number
            
        )
        
    }
}
console.log(multiplier.multiply())