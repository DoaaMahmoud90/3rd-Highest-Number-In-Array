function thirdHighest(a){
  if(a[0] < a[1]){
    temp = a[0];
    a[0] = a[1];
    a[1] = temp;
  }
  if(a[0]<a[2]){
    temp = a[0];
    a[0] = a[2];
    a[2] = temp
  }
  if(a[1]< a[2]){
    temp = a [1];
    a[1] = a[2];
    a[2] = temp;
}
for(let i= 2; i< a.length; i++){
  if(a[i]> a[0]){
    a[2] = a[1];
    a[1]= a[0];
    a[0] = a[i]
  }
  else if(a[i]> a[1]){
    a[2] = a[1];
    a[1] = a[i];
  }
  else if (a[i]> a[2]){
    a[2] = a[i];
  }
}
return a[2];
}

let arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
console.log(thirdHighest(arr));
let arr2 = [10, 3, 7, -20, 78, 30, 25];
console.log(thirdHighest(arr2))