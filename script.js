let arr = [
    {
      producer: "Bouquet of flowers",
      model: '№ 574',
      description: 'The best flowers in the world',
      imgSrc: "https://florika.lt/wp-content/uploads/2020/06/3-247x296.jpg"
    },
    {
      producer: "Bouquet of flowers",
      model: '№ 118',
      description: 'The best flowers in the world',
      imgSrc: "https://florika.lt/wp-content/uploads/2020/06/8-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 05',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2020/06/1-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 111',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2020/06/2-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 785',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2020/06/5-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 41',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2020/06/6-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 554',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2019/03/11-247x296.png"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 12',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2019/03/ok1-1-247x296.jpg"
    },
    {
        producer: "Bouquet of flowers",
        model: '№ 98',
        description: 'The best flowers in the world',
        imgSrc: "https://florika.lt/wp-content/uploads/2019/11/Burlesque-247x296.jpeg"
    }
  ]


  let wrapper = document.querySelector('.wrapper');

  function createCard(parent, cardObject) {
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
      <div class="picture">
        <img src='${cardObject.imgSrc}' alt="picture">
      </div>
      <div class="heading">
        <h3>${cardObject.producer}</h3>
      </div>

      <div class="heading">
        <h5>${cardObject.model}</h5>
      </div>
  
      <div class="desc-block">
        ${cardObject.description}
      </div>
  
      <div class="action-block">
        <div class="cart">
          Add To Cart
        </div>
  
      </div>`
    ;
  
    parent.append(card)
  }


arr.forEach(function(card) {
    createCard(wrapper, card)
});