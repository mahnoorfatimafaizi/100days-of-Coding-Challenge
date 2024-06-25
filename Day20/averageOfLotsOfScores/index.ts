function scoreAverage (...scores: number[]): number{
    
   let totalsum = scores.reduce((sum,score) => sum + score, 0);

   let average = totalsum / scores.length;

   return average;
}

let results = scoreAverage(15,10,50,45,20,37);
console.log(results);
