const baseDatos = {
  "leche orgánica": {
    nombre: "Leche Orgánica",
    huella: "1.2 kg CO₂e por litro",
    impacto: "Impacto medio. Producción sostenible pero transporte genera emisiones."
  },
  "parque central": {
    nombre: "Parque Central",
    huella: "0.1 kg CO₂e por visita",
    impacto: "Bajo impacto. Espacio verde que absorbe CO₂."
  },
  "hamburguesa de res": {
    nombre: "Hamburguesa de Res",
    huella: "5.0 kg CO₂e por unidad",
    impacto: "Alto impacto. Ganadería y transporte contribuyen fuertemente al CO₂."
  }
};

function escanear() {
  const input = document.getElementById("scanInput").value.toLowerCase().trim();
  const resultado = baseDatos[input];

  const resultadoDiv = document.getElementById("resultado");
  const nombreEl = document.querySelector(".nombre");
  const huellaEl = document.querySelector(".huella");
  const impactoEl = document.querySelector(".impacto");

  if (resultado) {
    nombreEl.textContent = `📦 Producto/Lugar: ${resultado.nombre}`;
    huellaEl.textContent = `🌍 Huella de Carbono: ${resultado.huella}`;
    impactoEl.textContent = `📊 Impacto Ambiental: ${resultado.impacto}`;
  } else {
    nombreEl.textContent = `No se encontró información sobre "${input}".`;
    huellaEl.textContent = "";
    impactoEl.textContent = "Intenta con otro producto o lugar.";
  }

  resultadoDiv.classList.remove("oculto");
}

function resetear() {
  document.getElementById("scanInput").value = "";
  document.getElementById("resultado").classList.add("oculto");
}
