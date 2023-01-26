function extractValue(arr,key){
    return arr.reduce(function(accu,next){
        accu.push(next[key]);
        return accu;
    },[]);
}

function vowelCount(str){
    let arr = str.split('');
    return arr.reduce(function(accu,next){
        if(accu[next]) accu[next] += 1;
        accu[next] = 1;
        return accu;
    },{})
}

function addKeyAndValue(arr,key,value){
    return arr.reduce(function(accu,next){
        next[key] = value;
        accu.push(next);
        return accu;
    },[])
}

function partition(arr,callback){
    
    return arr.reduce(function(accu,next){
        if(callback(next)){ 
            accu[0].push(next)
        }
        else {
            accu[1].push(next);
        }
        return accu;
    },[[],[]])

}