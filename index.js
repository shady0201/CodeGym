let projectList = [ 
    {
        title : 'Caculator',
        desc : 'Mô phỏng ứng dụng Caculator trong máy tính',
        url : '/project/caculator/index.html',
        icon : 'fa-solid fa-calculator',
        anim : 'ring',
        id : 1,
    },
    
    {
        title : 'If, Else',
        desc : 'Cấu trúc điều kiện',
        url : 'project/if condition 1/index.html',
        icon : 'fa-brands fa-usb',
        anim : 'beat',
        id : 2,
    },

    {
        title : 'For, While',
        desc : 'Cấu trúc For - While',
        url : '/project/for-while 1/index.html',
        icon : 'fa-solid fa-rotate',
        anim : 'rotate',
        id : 3,
    },
]

function renderItem(){
    let itemWrap = document.getElementsByClassName("card-wrap")[0];
    for (let i = 0; i < projectList.length; i++) {
        let { icon, title, desc, url, anim, id } = projectList[i];
        let cardHtml = 
            `<div id="card-${id}" onmouseenter="cardMouseIn(${id}, '${anim}', true)" onmouseleave="cardMouseIn(${id}, '${anim}', false)" class="card">
                <div class="img-wrap">
                    <i class="${icon}"></i>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${desc}</p>
                    <a href="${url}" class="btn btn-primary button-test">Xem</a>
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

