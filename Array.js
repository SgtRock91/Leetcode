const sandbox = () =>{
    const array = [];

    array.shift();//removes first item from array and returns it. e.g. FIFO Queue
    array.push();//adds to end of the array
    array.pop();//removes last items and returns it

    array.sort((a,b) => a-b);// ascending 1,2,3
    array.sort((a,b) => b-a);// descending 3,2,1
};