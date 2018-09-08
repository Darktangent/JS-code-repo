//write a fn called same, which accepts two arrays. The fn should return true if every value in the the array
//has corresponding value squared in the second array. the frequency of the values ust be same
//anagram
function same(arr1,arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    const lookupObj={}
    for (let i=0; i<arr1.length;i++){
        let char= arr1[i]
        lookupObj[char] ? lookupObj[char] +=1 : lookupObj[char]=1
    }
    console.log(lookupObj)
    for (let i=0; i<arr2.length; i++){
        let char=arr2[i]
        if(!lookupObj[char]){
            return false
        }else{
            lookupObj[char]-=1
        }
    }
    return true
}