document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
      { name: 'Mc ig', image: './img/artista-mcigg.jpg' },
      { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
      { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
      { name: 'Mc Cebezinho', image: './img/artista-cebezinho.jpg' },
      { name: 'Turma do Pagode', image: './img/artista-turma do pagode.jpg' },
      { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
  ];

  const albumsData = [
      { name: 'MODO MC IG NINGUÉM TA PURO', artist: 'MC IG', image: './img/album-mcig.jpg'},
      { name: 'A NATA DE TUDO - A OVELHA NEGRA', artist: 'MC NEGÃO ORIGINAL', image: './img/album-negao-original.jpg' },
      { name: 'PAGODE DO PERICÃO II, PT.1 (AO VIVO)', artist: 'Péricles', image: './img/album-pericles.jpg' },
      { name: 'VOU QUERER DE NOVO (AO VIVO)', artist: 'THIAGUINHO', image: './img/album-thiaguinho.jpg' },
      { name: 'VEM NA LEVADA', artist: 'MC TUTO', image: './img/album-tuto.jpg' },
      
  ]

  const artistsGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');

  // Renderizando os artistas
  artistsData.forEach(artist => {
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');

      artistCard.innerHTML = `
          <img src="${artist.image}" alt="Imagem do ${artist.name}">
          <h3>${artist.name}</h3>
          <p>Artista</p>
      `;

      artistsGrid.appendChild(artistCard);
  });

  // Renderizando os álbuns
  albumsData.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.classList.add('album-card');

      albumCard.innerHTML = `
          <img src="${album.image}" alt="Capa do álbum ${album.name}">
          <h3>${album.name}</h3>
          <p>${album.artist}</p>
      `;

      albumsGrid.appendChild(albumCard);
  });
});



