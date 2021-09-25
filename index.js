let doglist;

fetch('https://api.thedogapi.com/v1/breeds').then((response) => {
    return response.json();
}).then(data => {
    doglist = data;
    data.map(dog => {
        if (dog.id <=10) {
            add_li(dog);
        }
    });
}).catch((error) => {
    console.log(error);
});

let r1=20;
let r2=10;


const next_list = () => {
    document.getElementById('list').innerHTML = '';

    for (let i=r2; i<r1; i++) {
        add_li(doglist[i]);
    }
    r1+=10;
    r2+=10;
}


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

    rfield.appendChild(create_p('ID'));
    rfield.appendChild(create_p('Name'));
    rfield.appendChild(create_p('Weight'));
    rfield.appendChild(create_p('Height'));
    rfield.appendChild(create_p('Country Code'));
    rfield.appendChild(create_p('Bred For'));
    rfield.appendChild(create_p('Breed Group'));
    rfield.appendChild(create_p('Life Span'));
    rfield.appendChild(create_p('Temprament'));

    li.appendChild(dright);

    rans.appendChild(create_p(dog.id));
    rans.appendChild(create_p(dog.name));
    rans.appendChild(create_p(dog.weight.metric));
    rans.appendChild(create_p(dog.height.metric));
    rans.appendChild(create_p(dog.country_code));
    rans.appendChild(create_p(dog.bred_for));
    rans.appendChild(create_p(dog.breed_group));
    rans.appendChild(create_p(dog.life_span));
    rans.appendChild(create_p(dog.temperament));

    document.getElementById('list').appendChild(li);
}

const create_p = (text) => {
    let p = document.createElement('p');
    let ptext = document.createTextNode(text);
    p.appendChild(ptext);
    return p;
}