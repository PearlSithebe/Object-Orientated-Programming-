class DiceFactory {
    constructor(sides) {
        this.sides = sides;
  }

makeDice(){
    let arr = Math.floor(Math.random()*this.sides) 
    if (arr.length == this. sides) {
         return true;
    } else {

        return false;
    }
   
}}
class DiceTester {
    constructor(sides) {
        this.sides = sides;
    }
    dieTest (){
    
    var sortedArray;
    var SortedArray2 = [];
    if (this.sides === 6){
        var array =[];
    for( let i=1; i <= this.sides; i++) {
        array.push(Math.floor(Math.random()*this.sides)+1)
    
    }
    
    sortedArray =  array.sort();
    var counts = {};
    for (var i = 0; i < sortedArray.length; i++) {
        var num = sortedArray[i];
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        
      }
      let countArray = [counts[1],counts[2],counts[3],counts[4],counts[5],counts[6]]
      for(let k = 0; k < countArray.length; k++){
          if(typeof(countArray[k])=== "number"){
              SortedArray2.push(countArray[k])
             
             
          }
      
    SortedArray2.sort();
    
}    

    let x = Math.round(0.5 * this.sides)
    console.log(x);
    if(SortedArray2 [SortedArray2.length -1] < x){
               return true;
    } else {
      return false;
}}
}}
