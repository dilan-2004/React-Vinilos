const arrayproductos = [
  {
    id: 1,
    nombre: "Vinilo Queen II 1974 (Queen)",
    descripcion: "Queen II es el segundo álbum de estudio de la banda de rock Queen, lanzado al mercado el 8 de marzo de 1974 por EMI Records en el Reino Unido y por Elektra Records en los Estados Unidos",
    precio: 20000,
    autor: "Queen",
    lista: `
      <li><strong>Artista:</strong> Queen</li>
      <li><strong>Género:</strong> Rock</li>
      <li><strong>Año de lanzamiento:</strong> 1974</li>
      <li><strong>Duración:</strong> 40:42</li>
      <li><strong>Productor:</strong> Roy Thomas Baker, Queen</li>
      <li><strong>Discográfica:</strong> EMI (Reino Unido), Elektra (EE.UU.)</li>
    `,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEokdCgBjUFyNA74oibQnXYA3dahRiIg6-Ytl0rDCLmm3Tx1gOMvNZXCm5ErZZWJNkChKXvpw2R7RstCmqn_6Lf3J97ZkoOAZOfiysI8hmcZ5Fk3sFmb3Cynlpkax9wosrbd-GonX-Kw1YRRCRs0wTdp_JBAToKarAIiemb3Y3BF4Ssdn79rLD5NPIlw/s590/5_queen-ii.png"
  },
  {
    id: 2,
    nombre: "Minecraft - Volume Alpha 2011 (C418)",
    descripcion: "Minecraft – Volume Alpha es el primer álbum de banda sonora del músico electrónico alemán Daniel Rosenfeld, más conocido como C418. Fue creado para el videojuego Minecraft de 2011",
    precio: 20000,
    autor: "C418",
    lista: `
      <li><strong>Artista:</strong> C418</li>
      <li><strong>Género:</strong>Ambient, Música electrónica</li>
      <li><strong>Año de lanzamiento:</strong> 2011</li>
      <li><strong>Duración:</strong> 58:59</li>
      <li><strong>Productor:</strong> C418</li>
      <li><strong>Discográfica:</strong> Independiente</li>
    `,
    img: "https://images.stockx.com/images/Minecraft-C412-Volume-Alpha-Green-LP-Vinyl-Green.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1627495667"
  },
  {
    id: 3,
    nombre: "Corazones - 1982 (Los Prisioneros)",
    descripcion: "Corazones Solitarios es el segundo álbum de estudio de la banda chilena Los Prisioneros, lanzado en 1982.",
    precio: 20000,
    autor: "Los Prisioneros",
    lista: `
      <li><strong>Artista:</strong> Los Prisioneros</li>
      <li><strong>Género:</strong> Rock</li>
      <li><strong>Año de lanzamiento:</strong> 1989</li>
      <li><strong>Duración:</strong> 45:19</li>
      <li><strong>Productor:</strong> Los Prisioneros</li>
      <li><strong>Discográfica:</strong> Independiente</li>
    `,
    img: "https://puntomusical.cl/wp-content/uploads/2022/11/CORA.jpg"
  },
  {
    id: 4,
    nombre: "Romance - 1991 (Luis Miguel)",
    descripcion: "Romance es el octavo álbum de estudio del cantante mexicano Luis Miguel . Fue lanzado por WEA Latina el 19 de noviembre de 1991",
    precio: 20000,
    autor: "Luis Miguel",
    lista: `
      <li><strong>Artista:</strong> Luis Miguel</li>
      <li><strong>Género:</strong>Bolero</li>
      <li><strong>Año de lanzamiento:</strong> 1991</li>
      <li><strong>Duración:</strong> 44:02</li>
      <li><strong>Productor:</strong> Luis Miguel | Armando Manzanero</li>
      <li><strong>Discográfica:</strong> Ocean Way (Hollywood)</li>
    `,
    img: "https://http2.mlstatic.com/D_NQ_NP_811135-MLU72035539853_092023-O.webp"
  },
  {
    id: 5,
    nombre: "The Marshall Mather LP - 2000 (Eminem)",
    descripcion: "The Marshall Mathers LP es el tercer álbum de estudio del rapero estadounidense Eminem, editado el 23 de mayo de 2000 por Aftermath e Interscope Records, y producido por el rapero",
    precio: 20000,
    autor: "Eminem",
    lista: `
      <li><strong>Artista:</strong> Eminem</li>
      <li><strong>Género:</strong> Hip hop</li>
      <li><strong>Año de lanzamiento:</strong> 2000</li>
      <li><strong>Duración:</strong> 72:14</li>
      <li><strong>Productor:</strong> Dr. Dre | Eminem</li>
      <li><strong>Discográfica:</strong> Aftermath | Interscope</li>
    `,
    img: "https://cdn-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/0x1900-000000-80-0-0.jpg"
  },
  {
    id: 6,
    nombre: "Scaled And Icy - 2021 (Twenty Øne Pilots)",
    descripcion: "Scaled And Icy es el sexto álbum de larga duración y cuarto álbum de estudio del dúo estadounidense Twenty One Pilots publicado el 21 de mayo de 2021 a través de Fueled by Ramen y Elektra.​​",
    precio: 16900,
    autor: "Twenty Øne Pilots",
    lista: `
      <li><strong>Artista:</strong> Twenty Øne Pilots</li>
      <li><strong>Género:</strong> Rock Alternativo</li>
      <li><strong>Año de lanzamiento:</strong> 2021</li>
      <li><strong>Duración:</strong> 37:42</li>
      <li><strong>Productor:</strong> Tyler Joseph</li>
      <li><strong>Discográfica:</strong> Fueled by Ramen</li>
    `,
    img: "https://www.obivinilos.cl/wp-content/uploads/2022/09/Twenty-One-Pilots-Scaled-And-Icy-1.jpeg"
  },
  {
    id: 7,
    nombre: "CHROMAKOPIA - 2024 (Tyler, The Creator)",
    descripcion: "Chromakopia es el octavo álbum de estudio del rapero estadounidense Tyler, the Creator. Fue lanzado el 28 de octubre de 2024 por Columbia Records, como continuación de su disco anterior Call Me If You Get Lost.​​",
    precio: 16900,
    autor: "Tyler, the Creator",
    lista: `
      <li><strong>Artista:</strong> Tyler, the Creator</li>
      <li><strong>Género:</strong> Hip hop | R&B | Neo soul</li>
      <li><strong>Año de lanzamiento:</strong> 2024</li>
      <li><strong>Duración:</strong> 52:54</li>
      <li><strong>Productor:</strong> Tyler, the Creator</li>
      <li><strong>Discográfica:</strong> Columbia</li>
    `,
    img: "https://i.redd.it/chromakopia-vinyl-concept-v0-ct01vjy1bqvd1.png?width=3000&format=png&auto=webp&s=6a3dc08e8f685e936709b3ff9770e4da09945119"
  }
];

export default arrayproductos;