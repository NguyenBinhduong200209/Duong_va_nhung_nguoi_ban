function checkNumber(n) {
    var flag = true;
    if (n < 2) {
        flag = false
    }
    else if (n == 2){
        return  n;
    }
    else if (n % 2 == 0){
      return false
    }
    else {
        for (var i = 3; i < n - 1; i+=2) {
            if (n % i == 0) {
                flag = false
                break;
            }
        }
    }
    return flag
}

function snt() {
    let list = document.getElementById("myList");
    const a = document.getElementById("st1").value;
    const b = document.getElementById("st2").value;
    var sum = 0;
    for (i = a; i < b; i++) {
        var isSNT = checkNumber(i);
        if (isSNT == true) {
            sum += i;
        }
    } 
    let li = document.createElement("li");
    li.innerText = sum;
    list.appendChild(li);
}