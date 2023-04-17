function run(tenbt){ 
   let data = eval(tenbt + '()'); 
   let result = document.getElementById(tenbt);
    
   result.innerHTML = data;
}

function bt1(){
    let n = 20;
    let a = 0, b = 1;
    let i = 0;
    while (i < n){ 
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
        i++;
    }
    return 'Kiểm tra Console nhé!';
}

function bt2(){
    function calculateFactorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
          result *= i;
        }
        return result;
      }
      let n = document.getElementById('soND').value
      let factorial = calculateFactorial(n);
      console.log(factorial);  
      return 'Kiểm tra Console nhé!';
}

function bt3(){
    
    let size = document.getElementById("triangle_size").value;
    let direct = document.getElementById("triangle_direct").value;
    let mark = document.getElementById("triangle_mark").value;

    size = parseInt(size);
    if(isNaN(size)){
        return "Input nhập vào không hợp lệ";
    }
    
    let triangle = generate_triangle(direct,size,mark);
    document.getElementById("tamGiac").innerHTML = triangle;

    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         document.getElementById("tamGiac1").innerHTML += star;
    //     }
    //     document.getElementById("tamGiac1").innerHTML += '<br>'
    // }
   
    // for (let i = 5; i > 0; i--) { 
    //     for (let j = 1; j <= i; j++) {
    //         document.getElementById("tamGiac2").innerHTML += star;
    //     }
    //     document.getElementById("tamGiac2").innerHTML +='<br>'
    // }   

    // for (let i = 5; i > 0; i--) { 
    //     for (let j = 1; j <= i; j++)  {
    //         document.getElementById("tamGiac3").innerHTML += space;
    //     }
    //     for (let j = 0; j <= 5-i; j++) {
    //         document.getElementById("tamGiac3").innerHTML += star
    //     }
    //     document.getElementById("tamGiac3").innerHTML += '<br>'
    // }    

    // for (let i = 1; i <= 5; i++) { 
    //     for (let j = 1; j <= i; j++) {
    //         document.getElementById("tamGiac4").innerHTML += space;
    //     }
    //     for (let j = 0; j <= 5-i; j++) {
    //         document.getElementById("tamGiac4").innerHTML += star
    //     }
    //     document.getElementById("tamGiac4").innerHTML += '<br>'
    // }

    return `<p style="font-style: italic">4 tam giác vuông:</p>`;
}

function generate_triangle(direct,size,mark_char){
    let space_char = `<span style="opacity:0">${mark_char}</span>`;
    let result = "";
    let draw_space = direct == "III" || direct == "IV";

    for (let i = 0; i < size ; i++) {
        let line = [];

        if(draw_space){
            if(direct == "III"){
                for (let index = 1; index < size - i; index++) {
                    line.push(space_char);
                }
            }else{

            }
        }
        
        if(direct == "I" || direct == "III"){
            for (let index = 0; index <= i; index++) {
                line.push(mark_char);
            }
        }else{
            for (let index = 0; index < size - i; index++) {
                line.push(mark_char);
            }
        }

        result += line.join('') + '<br>';
    }

    return result;
}

function bt4(){
    document.getElementById("hinhCn").innerHTML = "";
    let star = "*";
    for (let i = 1; i < 8; i++) {
        for (let j = 1; j < 30; j++) {
            if (i == 1 || i == 7) {
                document.getElementById("hinhCn").innerHTML += star

            } else if (j == 1 || j == 21) {
                document.getElementById("hinhCn").innerHTML += star
            } else {
                document.getElementById("hinhCn").innerHTML += ('&nbsp;&nbsp')
            }
        }
        document.getElementById("hinhCn").innerHTML += ('<br>');
    }
    return `<p style="font-style: italic">Hình chữ nhật:</p>`;
}

function renderListSymbol(){
    let list = ['○','●','☺','☻','♥','♡','♦','♣','♠','★','✮','✪','✤','✿','❆','💀','♚'];
    list.forEach(symbol=>{
        let item = `<span onclick="selectSymbol('${symbol}')" style="border: 1px solid #b9b9b9;border-radius: 4px;padding: 5px 9px;background: #f3f3f3;color: #020202;cursor: pointer;">${symbol}</span>`;
        document.getElementById("symbol_list").innerHTML += item;
    })
}
function selectSymbol(symbol){
    document.getElementById("triangle_mark").value = symbol;
    run('bt3');
}
renderListSymbol();
