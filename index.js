let projectList = [ 
    {
        title : 'Caculator',
        desc : 'Mô phỏng ứng dụng Caculator trong máy tính',
        url : '/project/caculator/index.html',
        icon : 'fa-solid fa-calculator',
        anim : 'ring',
        id : 1,
        background:"#7842ddc4"
    },
    
    {
        title : 'If, Else',
        desc : 'Cấu trúc điều kiện',
        url : 'project/if condition 1/index.html',
        icon : 'fa-brands fa-usb',
        anim : 'beat',
        id : 2,
        background:"#dd5b42c4"
    },

    {
        title : 'For, While',
        desc : 'Cấu trúc For - While',
        url : '/project/for-while 1/index.html',
        icon : 'fa-solid fa-rotate',
        anim : 'rotate',
        id : 3,
        background:"#dd4270c4"
    },

    {
        title : 'Animation',
        desc : 'Chỉnh Animation',
        url : '/project/anim/animBall.html',
        icon : 'fa-solid fa-people-pulling',
        anim : 'bounce',
        id : 4,
        background:"#42dd76c4"
    },


    {   
        title : 'Facebook',
        desc : 'My Facebook',
        url : 'https://www.facebook.com/truonghoanganh.810/',
        icon : 'fa-brands fa-facebook',
        anim : 'pulse',
        id : 5,
        background:"#dddc42c4"
    },

    {   
        title : 'Multiplication Table',
        desc : 'Bảng cửu chương',
        url : '/project/multiplication-table/index.html',
        icon : 'fa-solid fa-table-cells',
        anim : 'ring',
        id : 6,
        background:"#42dddac4"
    },

]

function renderItem(){
    let itemWrap = document.getElementsByClassName("card-wrap")[0];
    for (let i = 0; i < projectList.length; i++) {
        let { icon, title, desc, url, anim, id ,background} = projectList[i];
        let cardHtml = 
            `<div id="card-${id}" onmouseenter="cardMouseIn(${id}, '${anim}', true)" onmouseleave="cardMouseIn(${id}, '${anim}', false)" class="card">
                <div class="img-wrap" style="background-color:${background}" >
                    <i class="${icon}"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${desc}</p>
                    <a href="${url}" class="btn btn-primary button-test" style="width: 100%;">Đi đến</a>
                </div>
            </div>`;
        itemWrap.innerHTML += cardHtml;
    }
}

function cardMouseIn(id, animName, active){
    let card = document.querySelector('#card-' + id);
    let icon = card.querySelector('i');
    icon.classList.toggle(animName, active);
}

// for (const item of projectList) {
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    // }

    // projectList.forEach(item => {
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    // });

    // let index = 0;
    // while (index < projectList.length) {
    //     let item = projectList[index];
    //     itemWrap.innerHTML += `
    //         <div class="card">
    //             <div class="img-wrap">
    //                 <i class="${item.icon}"></i>
    //             </div>
    //             <div class="card-body">
    //                 <h5 class="card-title">${item.title}</h5>
    //                 <p class="card-text">${item.desc}</p>
    //                 <a href="${item.url}" class="btn btn-primary">Xem</a>
    //             </div>
    //         </div>
    //     `
    //     index++;     
    // }

renderItem();

