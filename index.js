let doglist;

fetch('https://api.thedogapi.com/v1/breeds').then((response) => {
    return response.json();
}).then(data => {
    doglist = data;
    data.map((dog, i) => {
        if (dog.id <=10) {
            add_li(dog);
        }
    });
}).catch((error) => {
    console.log(error);
});

let r1=20;
let r2=10;

$(document).scroll(function () {

    if(($('#list li:last-child').offset().top) - window.scrollY <= (window.outerHeight / 2)) {
        window.scrollTo(0, 0);
        document.getElementById('list').innerHTML = '';
        for (let i=r2; i<r1; i++) {
            add_li(doglist[i]);
        }
        r1+=10;
        r2+=10;
    }

});

const add_li = (dog) => {
    // left section
    let li = document.createElement('li');
    let dleft = document.createElement('div');
    dleft.className = 'left';
    let dimg = document.createElement('img');
    dimg.src = dog.image.url;
    dleft.appendChild(dimg);
    li.appendChild(dleft);

    // Right section
    let text = document.createTextNode(dog.id);
    let dright = document.createElement('div');
    dright.className = 'right';

    let rfield = document.createElement('div');
    rfield.className = 'field';

    let rans = document.createElement('div');
    rans.className = 'ans';
    dright.appendChild(rfield);
    dright.appendChild(rans);

    if (dog.id !== undefined) {
        rfield.appendChild(create_p('ID'));
        rans.appendChild(create_p(dog.id));
    }

    if (dog.name !== undefined) {
        rfield.appendChild(create_p('Name'));
        rans.appendChild(create_p(dog.name));
    }

    if (dog.weight.metric !== undefined) {
        rfield.appendChild(create_p('Weight'));
        rans.appendChild(create_p(dog.weight.metric));
    }

    if (dog.height.metric !== undefined) {
        rfield.appendChild(create_p('Height'));
        rans.appendChild(create_p(dog.height.metric));
    }

    if (dog.country_code !== undefined) {
        rfield.appendChild(create_p('Country Code'));
        rans.appendChild(create_p(dog.country_code));
    }

    if (dog.bred_for !== undefined) {
        rfield.appendChild(create_p('Bred For'));
        rans.appendChild(create_p(dog.bred_for));
    }

    if (dog.breed_group !== undefined) {
        rfield.appendChild(create_p('Breed Group'));
        rans.appendChild(create_p(dog.breed_group));
    }

    if (dog.life_span !== undefined) {
        rfield.appendChild(create_p('Life Span'));
        rans.appendChild(create_p(dog.life_span));
    }

    if (dog.temperament !== undefined) {
        rfield.appendChild(create_p('Temprament'));
        rans.appendChild(create_p(dog.temperament));
    }

    if (dog.origin !== undefined) {
        rfield.appendChild(create_p('Origin'));
        rans.appendChild(create_p(dog.origin));
    }
    li.appendChild(dright);
    document.getElementById('list').appendChild(li);
}

const create_p = (text) => {
    let p = document.createElement('p');
    let ptext = document.createTextNode(text);
    p.appendChild(ptext);
    return p;
}