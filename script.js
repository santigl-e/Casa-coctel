// Datos de los licores (cada uno con sus cócteles)
const licores = [
  { id: "tequila", nombre: "Tequila", color: "#e8d27a", etiqueta: "#2e7d32", grados: "35% – 40%", abv: 40,
    origen: "México (Jalisco)",
    servir: "Solo en caballito o con limón y sal",
    descripcion: "Destilado de agave azul, típico de la región de Tequila.",
    cocteles: [
      { n: "Margarita", d: "Tequila, triple sec y jugo de limón con borde de sal." },
      { n: "Paloma", d: "Tequila con toronja y soda." },
      { n: "Tequila Sunrise", d: "Tequila, jugo de naranja y granadina." },
      { n: "Batanga", d: "Tequila, limón y cola, con borde de sal." } ] },
  { id: "whisky", nombre: "Whisky", color: "#c9822b", etiqueta: "#f3e9dc", grados: "40% – 46%", abv: 43,
    origen: "Escocia, Irlanda y EE. UU.",
    servir: "Solo, con hielo o con un chorrito de agua",
    descripcion: "Destilado de cereales envejecido en barricas de roble.",
    cocteles: [
      { n: "Old Fashioned", d: "Whisky, azúcar, amargo de angostura y cáscara de naranja." },
      { n: "Whisky Sour", d: "Whisky, limón, azúcar y clara de huevo." },
      { n: "Manhattan", d: "Whisky, vermut rojo y angostura." },
      { n: "Highball", d: "Whisky con soda y mucho hielo." } ] },
  { id: "ron", nombre: "Ron", color: "#8a4b1f", etiqueta: "#e0a030", grados: "37% – 45%", abv: 40,
    origen: "Caribe: Cuba, Jamaica, Puerto Rico, Colombia",
    servir: "Con hielo, con cola o en cócteles tropicales",
    descripcion: "Destilado de caña de azúcar o melaza, muy popular en el trópico.",
    cocteles: [
      { n: "Mojito", d: "Ron blanco, hierbabuena, limón, azúcar y soda." },
      { n: "Piña Colada", d: "Ron, crema de coco y jugo de piña." },
      { n: "Daiquiri", d: "Ron blanco, limón y azúcar." },
      { n: "Cuba Libre", d: "Ron, cola y limón." } ] },
  { id: "vodka", nombre: "Vodka", color: "#cfe8f0", etiqueta: "#1565c0", grados: "37% – 40%", abv: 40,
    origen: "Rusia, Polonia y Suecia",
    servir: "Muy frío, solo o mezclado con jugos",
    descripcion: "Destilado neutro de cereales o papa, de sabor limpio.",
    cocteles: [
      { n: "Moscow Mule", d: "Vodka, ginger beer y limón en taza de cobre." },
      { n: "Bloody Mary", d: "Vodka, jugo de tomate, limón y especias." },
      { n: "Cosmopolitan", d: "Vodka, arándano, triple sec y limón." },
      { n: "Destornillador", d: "Vodka con jugo de naranja." } ] },
  { id: "ginebra", nombre: "Ginebra", color: "#a6d9c3", etiqueta: "#004d40", grados: "37% – 47%", abv: 40,
    origen: "Reino Unido y Países Bajos",
    servir: "Con tónica, hielo y una rodaja de limón",
    descripcion: "Destilado aromatizado con bayas de enebro.",
    cocteles: [
      { n: "Gin Tonic", d: "Ginebra, agua tónica y rodaja de limón." },
      { n: "Negroni", d: "Ginebra, Campari y vermut rojo." },
      { n: "Martini", d: "Ginebra y vermut seco con aceituna." },
      { n: "Tom Collins", d: "Ginebra, limón, azúcar y soda." } ] },
  { id: "aguardiente", nombre: "Aguardiente", color: "#e9f2f5", etiqueta: "#2e7d32", grados: "24% – 29%", abv: 27,
    origen: "Colombia (sabor anisado)",
    servir: "En copita, con amigos y en fiestas",
    descripcion: "Licor anisado de caña, muy típico en fiestas colombianas.",
    cocteles: [
      { n: "Guaro Sour", d: "Aguardiente, limón y azúcar." },
      { n: "Canelazo", d: "Aguardiente caliente con panela y canela." },
      { n: "Aguardiente con lulo", d: "Aguardiente con pulpa de lulo y hielo." },
      { n: "Guaro Tonic", d: "Aguardiente con agua tónica y limón." } ] },
  // Licor nuevo agregado en esta versión
  { id: "mezcal", nombre: "Mezcal", color: "#d9c9a3", etiqueta: "#5d4037", grados: "40% – 50%", abv: 45,
    origen: "México (Oaxaca)",
    servir: "Solo, en copita, con rodajas de naranja",
    descripcion: "Destilado artesanal de agave con un sabor ahumado característico.",
    cocteles: [
      { n: "Mezcal Margarita", d: "Mezcal, triple sec y limón con borde de sal." },
      { n: "Oaxaca Old Fashioned", d: "Mezcal, tequila reposado, agave y amargo de angostura." },
      { n: "Mezcal Mule", d: "Mezcal, ginger beer y limón." },
      { n: "Paloma ahumada", d: "Mezcal con toronja y soda." } ] }
];

// Dibuja una botella en SVG con el color del licor
function botellaSVG(l) {
  return `<svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Botella de ${l.nombre}">
    <rect x="42" y="6" width="16" height="16" rx="3" fill="#d4a24c"/>
    <path d="M44 22h12v30c0 10 24 16 24 42v84a10 10 0 0 1-10 10H30a10 10 0 0 1-10-10V94c0-26 24-32 24-42z"
          fill="${l.color}" stroke="#ffffff55" stroke-width="2"/>
    <rect x="26" y="104" width="48" height="56" rx="6" fill="${l.etiqueta}"/>
    <text x="50" y="130" text-anchor="middle" font-size="9" font-family="Georgia" fill="#111">${l.nombre.split(" ")[0]}</text>
    <text x="50" y="148" text-anchor="middle" font-size="8" font-family="Georgia" fill="#111">${l.abv}%</text>
    <path d="M30 76c0 30-2 56 0 90" stroke="#fff" stroke-opacity=".35" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`;
}

const estante = document.getElementById("estante");
const $ = (id) => document.getElementById(id);

// Crear los botones del estante
licores.forEach((l) => {
  const b = document.createElement("button");
  b.className = "botella";
  b.dataset.id = l.id;
  b.innerHTML = botellaSVG(l) + `<span>${l.nombre}</span>`;
  b.addEventListener("click", () => mostrar(l.id));
  estante.appendChild(b);
});

// Mostrar el licor seleccionado
function mostrar(id) {
  const l = licores.find((x) => x.id === id);
  document.querySelectorAll(".botella").forEach((b) =>
    b.classList.toggle("activa", b.dataset.id === id));

  $("grande").innerHTML = botellaSVG(l);
  $("nombre").textContent = l.nombre;
  $("descripcion").textContent = l.descripcion;
  $("grados").textContent = l.grados;
  $("origen").textContent = l.origen;
  $("servir").textContent = l.servir;

  // Animar la barra de alcohol (escala hasta 60%)
  $("barra").style.width = "0";
  setTimeout(() => ($("barra").style.width = (l.abv / 60) * 100 + "%"), 50);

  // Mostrar los cócteles uno por uno
  const cont = $("cocteles");
  cont.innerHTML = "";
  l.cocteles.forEach((c, i) => {
    const d = document.createElement("div");
    d.className = "coctel";
    d.style.animationDelay = i * 0.12 + "s";
    d.innerHTML = `<h4>${c.n}</h4><p>${c.d}</p>`;
    cont.appendChild(d);
  });
}

mostrar(licores[0].id);
