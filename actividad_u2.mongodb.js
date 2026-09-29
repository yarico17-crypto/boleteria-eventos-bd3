// 1. Seleccionar la base de datos
use('boleteria_db');

// Limpiar la colección por si tenías datos de prueba viejos
db.eventos.drop();

// ==========================================
// 2. INSERTAR LOS 10 DOCUMENTOS DE PRUEBA
// ==========================================
db.eventos.insertMany([
  {
    titulo: "Festival Estéreo Picnic 2026",
    categoria: "Concierto",
    artistas: ["Morat", "Feid", "Bomba Estéreo"],
    lugar: "Parque Simón Bolívar",
    ciudad: "Bogotá",
    precio_base: 350000,
    boletas_disponibles: 1500,
    es_destacado: true,
    organizacion: { empresa: "Páramo Presenta", contacto: "info@paramo.co" }
  },
  {
    titulo: "Obra de Teatro El Reencuentro",
    categoria: "Teatro",
    artistas: ["Robinson Díaz", "César Mora"],
    lugar: "Teatro Nacional",
    ciudad: "Bogotá",
    precio_base: 80000,
    boletas_disponibles: 120,
    es_destacado: false,
    organizacion: { empresa: "Teatro Nacional", contacto: "boletas@teatronacional.co" }
  },
  {
    titulo: "Feria del Libro FilBo",
    categoria: "Feria",
    artistas: ["Mario Mendoza", "Piedad Bonnett"],
    lugar: "Corferias",
    ciudad: "Bogotá",
    precio_base: 15000,
    boletas_disponibles: 5000,
    es_destacado: true,
    organizacion: { empresa: "Corferias SA", contacto: "filbo@corferias.com" }
  },
  {
    titulo: "Concierto de Salsa al Parque",
    categoria: "Concierto",
    artistas: ["Grupo Niche", "Guayacán"],
    lugar: "Parque Simón Bolívar",
    ciudad: "Bogotá",
    precio_base: 0,
    boletas_disponibles: 10000,
    es_destacado: true,
    organizacion: { empresa: "Idartes", contacto: "contacto@idartes.gov.co" }
  },
  {
    titulo: "Stand Up Comedy - La Pelota",
    categoria: "Teatro",
    artistas: ["Alejandro Riaño"],
    lugar: "Teatro Águila Descalza",
    ciudad: "Medellín",
    precio_base: 95000,
    boletas_disponibles: 0,
    es_destacado: false,
    organizacion: { empresa: "Riaño Producciones", contacto: "ventas@riano.co" }
  },
  {
    titulo: "Feria Gastronómica Sabor Barranquilla",
    categoria: "Feria",
    artistas: ["Chef Jorge Rausch", "Chef Leonor Espinosa"],
    lugar: "Puerta de Oro",
    ciudad: "Barranquilla",
    precio_base: 25000,
    boletas_disponibles: 800,
    es_destacado: true,
    organizacion: { empresa: "Fenalco Atlántico", contacto: "info@saborbaq.com" }
  },
  {
    titulo: "Concierto Rock en el Parque",
    categoria: "Concierto",
    artistas: ["Kraken", "Aterciopelados"],
    lugar: "Parque Metropolitano",
    ciudad: "Medellín",
    precio_base: 120000,
    boletas_disponibles: 450,
    es_destacado: false,
    organizacion: { empresa: "Medellín Music", contacto: "rock@medellin.gov.co" }
  },
  {
    titulo: "Obra de Danza Contemporánea",
    categoria: "Danza",
    artistas: ["Ballet Nacional de Colombia"],
    lugar: "Teatro Enrique Buenaventura",
    ciudad: "Cali",
    precio_base: 60000,
    boletas_disponibles: 200,
    es_destacado: false,
    organizacion: { empresa: "Cali Cultura", contacto: "danza@cali.gov.co" }
  },
  {
    titulo: "Exposición de Arte Moderno",
    categoria: "Exposición",
    artistas: ["Beatriz González"],
    lugar: "MAMBO",
    ciudad: "Bogotá",
    precio_base: 18000,
    boletas_disponibles: 300,
    es_destacado: false,
    organizacion: { empresa: "MAMBO", contacto: "mambo@mambogota.org" }
  },
  {
    titulo: "Festival de Jazz en la Montaña",
    categoria: "Concierto",
    artistas: ["Edmar Castañeda", "Puerto Candelaria"],
    lugar: "Jardín Botánico",
    ciudad: "Medellín",
    precio_base: 180000,
    boletas_disponibles: 150,
    es_destacado: true,
    organizacion: { empresa: "Jazz Corp", contacto: "admin@jazzcorp.com" }
  }
]);

// ==========================================
// 3. CONSULTAS (FIND)
// ==========================================

// Consulta 1: Igualdad - Eventos de categoría 'Concierto'
db.eventos.find({ categoria: "Concierto" });

// Consulta 2: Comparación - Eventos con precio_base mayor a 100000
db.eventos.find({ precio_base: { $gt: 100000 } });

// Consulta 3: Lista - Eventos en 'Medellín' o 'Cali'
db.eventos.find({ ciudad: { $in: ["Medellín", "Cali"] } });

// Consulta 4: Arreglo - Eventos donde se presenta 'Morat'
db.eventos.find({ artistas: "Morat" });

// ==========================================
// 4. MODIFICACIONES (UPDATE)
// ==========================================

// Update 1: Agotar boletas de la Obra de Teatro El Reencuentro
db.eventos.updateOne(
  { titulo: "Obra de Teatro El Reencuentro" },
  { $set: { boletas_disponibles: 0 } }
);

// Update 2: Cambiar correo de la organización 'Idartes'
db.eventos.updateMany(
  { "organizacion.empresa": "Idartes" },
  { $set: { "organizacion.contacto": "atencion@idartes.gov.co" } }
);

// ==========================================
// 5. ELIMINACIÓN (DELETE)
// ==========================================

// Delete 1: Eliminar la Exposición de Arte Moderno
db.eventos.deleteOne({ titulo: "Exposición de Arte Moderno" });