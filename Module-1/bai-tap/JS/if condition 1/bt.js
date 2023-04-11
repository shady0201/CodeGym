function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    var a = +prompt('Nhap so a');
    var b = +prompt('Nhap so b');

    if(a%b == 0){
        return 'True';
    }
    else{
        return 'False';
    }
}

function bt2(){
    var age = +prompt('Nhap tuoi');

    if(age>15){
        return 'Đủ điều kiện học lớp 10';
    }
    else{
        return 'Chưa đủ điều kiện học lớp 10';
    }
}

function bt3(){
    var num = +prompt('Nhap so nguyen');

    if(num>0){
        console.log('So ' + num + ' lon hon 0');
    }
    else{
        console.log('So ' + num + ' nho hon 0');
    }
}

function bt4(){
    var a = +prompt('Nhap so a');
    var b = +prompt('Nhap so b');
    var c = +prompt('Nhap so c');
    
    if(a > b && a > c){
        console.log('a la so lon nhat');
    }
        else if(b > c){
            console.log('b la so lon nhat');
        }
        else{
            console.log('c la so lon nhat');
        }
}

function bt5(){
    var a = +prompt('Diem kiem tra ');
    var b = +prompt('Diem thi giua ky');
    var c = +prompt('Diem thi cuoi ky');
    
    var trungbinh = (a+b*2+c*3)/6
    console.log(trungbinh);
    
    if(trungbinh >8){
        console.log('Hoc sinh gioi');
    }
        else if(trungbinh >6){
            console.log('Hoc sinh kha');
        }
        else{
            console.log('Hoc sinh trung binh');
        }
}

function bt6(){
    var doanhso = +prompt('Doanh so ban hang $');
    var hoahong;
    
    if(doanhso > 9999){
        hoahong = doanhso * 0.3;
        console.log('hoahong : ' + hoahong);
    }
        else if (doanhso > 1000 && doanhso < 9999){
        hoahong = doanhso * 0.2;  
        console.log('hoahong : ' + hoahong); 
        }
        else{
        hoahong = doanhso * 0.1;
        console.log('hoahong : ' + hoahong);  
        }
}

function bt7(){
    
}


