class Drops extends BaseClass{
    constructor(x,y){
    
    }
    var maxDrops=100;
    for(var i = 0; i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }
}