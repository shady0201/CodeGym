function bt1(){

    var doC = +prompt('Nhap do C');
    var doF; 

    if(doC < 0){
        console.log('Nhiet do khong hop le');
    }
    else{
    doF = doC * 1.5 + 32;
    console.log('Nhiet do F la : ' + doF);
}

}

function bt2(){
    ft =m * 3.2808

    var m = +prompt('Nhap so met');
    var ft;

    if(m < 0){
        console.log('So met khong hop le');
    }
    else{
        ft = m * 3.2808;
        console.log('So ft la : ' + ft);
    }
}

function bt3(){
    var a = +prompt('Nhap canh a');
    var S;

    if( a < 0 ){
        console.log('So canh khong hop le');
    }
    else{
        S = a*a;
        console.log('Dien tich hinh vuong = ' + S);
    }
}

function bt4(){
    var a = +prompt('Nhap chieu dai');
    var b = +prompt('Nhap chieu rong');
    var S;

    if (a > 0 && b > 0){
        S = a * b;
        console.log('Dien tich hinh chu nhat la : ' + S);
    }
        else if (b < 0 & a > 0){
        console.log('Chieu rong khong hop le');
        }
        else if (a < 0 & b > 0){
            console.log('Chieu dai khong hop le');
        }
        else{
            console.log('Chieu dai va chieu rong khong hop le');
        }   
}

function bt5(){
   
}

function bt6(){
    function giaiPTBac1(a,b){
            if(a === 0)
        {
            if (b === 0)
        {
        return "Phuong trinh co vo so nghiem";
        }
            else 
            {
            return "Phuong trinh vo nghiem";
            }
        }
        else {
            var x = -b/a;
            return "Nghiệm của phương trình là x = " + x;
        }
    }
    var a = +prompt('Nhap a');
    var b = +prompt('Nhap b'); 
    console.log(giaiPTBac1(a, b));
}

function bt7(){
    function giaiPTBac2(a, b, c) {
        let delta = b * b - 4 * a * c;
      
        if (delta < 0) {
          return "Phương trình vô nghiệm";
        } else if (delta == 0) {
          let x = -b / (2 * a);
          return `Phương trình có nghiệm kép x = ${x}`;
        } else {
          let x1 = (-b + Math.sqrt(delta)) / (2 * a);
          let x2 = (-b - Math.sqrt(delta)) / (2 * a);
          return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
        }
      }
    
    var a = +prompt('Nhap a');
    var b = +prompt('Nhap b'); 
    var c = +prompt('Nhap c');
    console.log(giaiPTBac2(a, b, c));
}

function bt8(){
    function age(a){
        if (0 < a < 120){
            return `Tuoi cua nguoi do la ${a}`;
        }
        else{
            return 'Tuoi khong hop le';
        }
    }
    
    var a = +prompt('Nhap tuoi');
    console.log(age(a));

}

function bt9(){

}

function bt10(){

}

function bt11(){

}

function bt12(){

}


