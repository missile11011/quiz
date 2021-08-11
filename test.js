

function rand(){
    let arr = [0,1,5,4,9,8,3,7]
    
    for (let i = 0; i < 7; i++) {
        x = Math.floor(Math.random()*arr.length);
        let output = arr[x]
        arr.splice(x,1)
        
        console.log(arr)
        console.log(output)
        
    }
}
rand();