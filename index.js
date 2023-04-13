let objectList = [ 
    {
        title : 'Caculator',
        desc : 'Mô phỏng ứng dụng Caculator trong máy tính',
        url : '/project/caculator/index.html',
        icon : 'fa-solid fa-calculator icon-wrap'
    },
    
    {
        title : 'If, Else',
        desc : 'Cấu trúc điều kiện',
        url : 'project/if condition 1/index.html',
        icon : 'fa-brands fa-usb icon-wrap'
    },
]

function renderList(){
    let listWrap = document.getElementsByClassName("card-wrap")[0];
    for (let i = 0; i < objectList.length; i++) {
        let { icon, title, desc, url } = objectList[i];
        let cardHtml = 
            `<div class="card">
                <i class="${icon}"></i>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${desc}</p>
                    <a href="${url}" class="btn btn-primary button-test">Xem</a>
                </div>
            </div>`;
        listWrap.innerHTML += cardHtml;
    }
}

renderList();

