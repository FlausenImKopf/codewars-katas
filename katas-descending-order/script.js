function descendingOrder(n){
    let array = new String(n).split("");
    array = array.sort().reverse();
    let str = array.join("");
    return Number(str);
    }