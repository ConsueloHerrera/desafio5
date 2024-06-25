const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",

    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Loft elegante en el centro histórico",
    src: "/assets/img/foto5.png",
    descripcion:
      "Espacioso loft con diseño elegante en el corazón del centro histórico.",
    ubicacion: "789 Historic Street, Old Town, CA 67890",
    habitaciones: 1,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa rural con vistas panorámicas",
    src: "/assets/img/foto6.png",
    descripcion:
      "Encantadora casa rural con vistas panorámicas a las montañas circundantes.",
    ubicacion: "123 Countryside Road, Tranquil Valley, CA 34567",
    habitaciones: 3,
    banos: 2,
    costo: 1800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento estudio en zona universitaria",
    src: "/assets/img/foto7.png",
    descripcion:
      "Acogedor apartamento estudio ideal para estudiantes en zona universitaria.",
    ubicacion: "567 University Avenue, Campus Heights, CA 89012",
    habitaciones: 1,
    banos: 1,
    costo: 900,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Chalet con piscina privada",
    src: "/assets/img/foto8.png",
    descripcion:
      "Amplio chalet con piscina privada y jardín, perfecto para vacaciones.",
    ubicacion: "789 Poolside Drive, Sunny Resort, CA 23456",
    habitaciones: 4,
    banos: 3,
    costo: 3000,
    smoke: false,
    pets: true,
  },
];

const cardTemplate = (propiedad) => `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${
        propiedad.src
      }" class="card-img-top" alt="Imagen del apartamento">
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${
          propiedad.habitaciones
        } Habitaciones | <i class="fas fa-bath"></i> ${
  propiedad.banos
} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="text-${
          propiedad.smoke ? "danger" : "success"
        }"><i class="fas fa-smoking${propiedad.smoke ? "" : "-ban"}"></i> ${
  propiedad.smoke ? "No se permite fumar" : "Se permite fumar"
}</p>
        <p class="text-${
          propiedad.pets ? "success" : "danger"
        }"><i class="fas fa-paw"></i> ${
  propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
}</p>
      </div>
    </div>
  </div>
`;

const cardContainerAlquiler = document.getElementById(
  "card-container-alquiler"
);

let html = "";
propiedades_alquiler.forEach((propiedad, index) => {
  html += cardTemplate(propiedad);
  if ((index + 1) % 3 === 0) {
    html += '</div><div class="row">';
  }
});

if (propiedades_alquiler.length % 3 !== 0) {
  html += "</div>";
}

cardContainerAlquiler.innerHTML = html;
