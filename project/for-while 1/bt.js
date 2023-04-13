function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    for (let i = 1; i <= 100; i++) {
        if (i === 100) {
           return 'Đã hoàn thành, kiểm tra Console nhé!';
        }
        console.log (i);
      }
}

function bt2(){
    let nhietDo = +prompt('Nhiệt độ bằng ℃');

    if (nhietDo >= 100) {
        return 'Nhiệt độ quá cao, yêu cầu giảm!';
    }
    else if (nhietDo > 20) {
        return 'Nhiệt độ bình thường';
    }
    else{
        return 'Nhiệt độ quá thấp, yêu cầu tăng!';
    }
}

function bt3(){
    let n = 20;
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}

