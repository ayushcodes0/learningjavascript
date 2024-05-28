
const names = ['Ayush','Utkarsh','james','shivam'];

const myForEach = (arr,cb) => {
  for(let i = 0;i<arr.length; i++){
    cb(arr[i]);
  }
}

myForEach(names, (name) => {
  console.log(name);
})



