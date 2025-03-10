document.addEventListener('DOMContentLoaded', () => {
     
    const artistsData = [
        { name: 'Henrique & Juliano', image: 'img/album-mcig.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpeg' },
        {name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpeg' },
        {name: 'Mc Cebezinho', image: './img/artista-cebezinho.jpeg' },
        { name: 'Turma do Pagode', image: './img/artista-turma do pagode.jpeg'},
        {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpeg' },
        ];
        
        const albumsData = [
            { name: 'MODO MC IG NINGUÉM TA PURO', artist: 'MC IG', image: './img/album-mcig.jpeg'},
            { name: 'A NATA DE TUDO - A OVELHA NEGRA', artist: 'MC NEGÃO ORIGINAL', image: './img/album-mcig.jpeg'},
            {name: 'PAGODE DO PERICÃO II,, PT.1 (AO VIVO)', artist: 'Péricles', image: './img/album-pericles.jpg'},
            {name: 'VOU QUERER DE NOVO (AO VIVO)', artist: 'THIAGUINHO', image: './img/album-thiaguinho.jpeg'},
            { name: 'VEM NA LEVADA', artist: 'MC TUTO', image: './img/album-tuto.jpeg'},
            { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpeg' }
          ];


          const artisGrid = document.querySelector('.artists-grid')
          const albumsGrid = document.querySelector('.albums-grid')

          artistsData.forEach(artist => {
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')

            artistCard.innerHTML = `
             <img src=${artist.image}" alt=image do ${artist.name}">
             <h3>${artist.name}</h3>
             <p>artista</p>

            `

            artisGrid.appendChild(artistCard)
            
        
            
          })
})


