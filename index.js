const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicación: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicación: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicación: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Estudio moderno cerca del centro",
    src: "/assets/img/foto1.png",
    descripcion:
      "Estudio moderno recién renovado, perfecto para una persona o pareja.",
    ubicación: "456 Downtown Street, Urban Central, CA 34567",
    habitaciones: 1,
    banos: 1,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Ático con vista al mar",
    src: "/assets/img/foto2.png",
    descripcion:
      "Ático amplio con vista panorámica al mar Mediterráneo, perfecto para relajarse.",
    ubicación: "789 Seafront Avenue, Coastal Paradise, CA 89012",
    habitaciones: 3,
    banos: 2,
    costo: 3500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa adosada en comunidad tranquila",
    src: "/assets/img/foto3.png",
    descripcion:
      "Casa adosada con jardín privado y acceso a piscina comunitaria.",
    ubicación: "123 Serenity Lane, Quiet Haven, CA 67890",
    habitaciones: 3,
    banos: 2,
    costo: 2800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento minimalista en el centro",
    src: "/assets/img/foto4.png",
    descripcion:
      "Apartamento minimalista con diseño moderno en el corazón de la ciudad.",
    ubicación: "789 Central Street, Metropolitan Center, CA 56789",
    habitaciones: 2,
    banos: 1,
    costo: 1500,
    smoke: true,
    pets: false,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
  src:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
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
    src:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
   
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
   src:
    "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
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

const generarTarjetasHTML = (propiedades, containerId) => {
  const cardContainer = document.getElementById(containerId);
  let html = "";
  
  propiedades.slice(0, 3).forEach(propiedad => {
    html += cardTemplate(propiedad);
  });
  
  cardContainer.innerHTML = html;
};

generarTarjetasHTML(propiedades_venta, "card-container-muestra-venta");

generarTarjetasHTML(propiedades_alquiler, "card-container-muestra-alquiler" );
