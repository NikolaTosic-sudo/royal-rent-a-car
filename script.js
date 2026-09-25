const cars = [
  {
    name: "Mercedes-Benz C-Class",
    subtitle: "Elegant, comfortable and ready for the coast.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Premium",
    },
  },
  {
    name: "BMW 5 Series",
    subtitle: "Business-class comfort with a sporty character.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Premium",
    },
  },
  {
    name: "Audi A6",
    subtitle: "Refined comfort for long drives across Montenegro.",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Premium",
    },
  },
  {
    name: "Volkswagen Tiguan",
    subtitle: "Allspace 4Motion · spreman za grad, put i avanturu.",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: { Mjenjač: "Manuel", Gorivo: "Dizel", Sjedišta: "5", Klasa: "SUV" },
  },
  {
    name: "Range Rover Evoque",
    subtitle: "Compact luxury SUV with unmistakable presence.",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Luxury SUV",
    },
  },
  {
    name: "Mercedes-Benz GLC",
    subtitle: "Premium SUV comfort for every destination.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "SUV",
    },
  },
];

// Detaljni opis za svako vozilo. Tekst i brojeve slobodno zamijeni stvarnim podacima.
const vehicleDetails = {
  "Mercedes-Benz C-Class": {
    description:
      "Mercedes-Benz C-Class spaja elegantan dizajn, udobnost i sigurnost za vožnju kroz grad, obalu i duža putovanja.",
    features: [
      [
        "⚡",
        "Snaga i efikasnost",
        "Pouzdan dizel motor pruža odličan balans performansi i ekonomične potrošnje.",
      ],
      [
        "⚙",
        "Automatski mjenjač",
        "Glatke promjene brzina i opuštena vožnja u gradu i na otvorenom putu.",
      ],
      [
        "▰",
        "Premium udobnost",
        "Kvalitetna unutrašnjost i udobna sjedišta za prijatno putovanje.",
      ],
      ["❄", "Klima uređaj", "Ugodna temperatura tokom cijelog putovanja."],
      [
        "◇",
        "Sigurnost",
        "Savremeni sistemi pomoći vozaču za sigurniju i bezbrižniju vožnju.",
      ],
      [
        "⛽",
        "Ekonomičan izbor",
        "Efikasan motor za više kilometara uz manju potrošnju.",
      ],
    ],
  },
  "BMW 5 Series": {
    description:
      "BMW Serije 5 donosi poslovnu udobnost, prepoznatljivu dinamiku i dovoljno prostora za duža putovanja po Crnoj Gori.",
    features: [
      [
        "⚡",
        "Performanse",
        "Snažan i elastičan motor za sigurna preticanja i udobnu vožnju.",
      ],
      [
        "⚙",
        "Automatski mjenjač",
        "Brz i uglađen automatski mjenjač za maksimalnu udobnost.",
      ],
      [
        "▰",
        "Udobnost premium",
        "Prostrana kabina i kvalitetni materijali za vozača i putnike.",
      ],
      [
        "❄",
        "Klima uređaj",
        "Komforna temperatura bez obzira na sezonu i destinaciju.",
      ],
      [
        "◇",
        "Sigurnost na prvom mjestu",
        "Napredna elektronika i sistemi asistencije pomažu u svakodnevnoj vožnji.",
      ],
      [
        "⛽",
        "Odličan za putovanja",
        "Komfor, stabilnost i ekonomičnost na dužim relacijama.",
      ],
    ],
  },
  "Audi A6": {
    description:
      "Audi A6 je udoban i sofisticiran izbor za putnike koji žele mirnu vožnju, premium enterijer i dovoljno prostora za prtljag.",
    features: [
      [
        "⚡",
        "Snaga i efikasnost",
        "Dizel motor kombinuje snažan odziv i racionalnu potrošnju.",
      ],
      [
        "⚙",
        "Automatski mjenjač",
        "Jednostavna i udobna vožnja u svim uslovima.",
      ],
      [
        "▰",
        "Prostrana kabina",
        "Dovoljno mjesta za pet putnika i komfor na dužim putovanjima.",
      ],
      [
        "❄",
        "Klima uređaj",
        "Prijatna temperatura u kabini tokom cijele vožnje.",
      ],
      [
        "◇",
        "Stabilnost i sigurnost",
        "Sigurno ponašanje na autoputu, magistrali i gradskim ulicama.",
      ],
      [
        "⛽",
        "Putujte dalje",
        "Odličan izbor za obilazak Crne Gore uz dobar odnos komfora i potrošnje.",
      ],
    ],
  },
  "Volkswagen Tiguan": {
    description:
      "Tiguan Allspace 4Motion spaja snagu, stabilnost i udobnost u svakom kilometru. Savršen saputnik za grad, putovanja i avanture koje vas čekaju.",
    features: [
      [
        "⚡",
        "Snaga i efikasnost",
        "2.0 TDI 150 KS — savršen balans snage, štednje i pouzdanosti.",
      ],
      [
        "▲",
        "4Motion pogon",
        "Sigurna vožnja u svim uslovima, bez kompromisa — na svakom putu.",
      ],
      [
        "▰",
        "Udobnost premium",
        "Prostrana kabina, kvalitetna izrada i maksimalan komfor na svakom putovanju.",
      ],
      [
        "❄",
        "3 zone klima",
        "Savršena temperatura za sve, bez obzira na destinaciju.",
      ],
      [
        "◇",
        "Sigurnost na prvom mjestu",
        "Napredni sistemi asistencije za bezbrižnu vožnju.",
      ],
      ["⌘", "Manuel mjenjač", "Potpuna kontrola i užitak u pravoj vožnji."],
      [
        "⛽",
        "Ekonomičan izbor",
        "Niska potrošnja, više kilometara, manje brige.",
      ],
    ],
  },
  "Range Rover Evoque": {
    description:
      "Range Rover Evoque kombinuje luksuz, kompaktne SUV dimenzije i upečatljiv dizajn — idealan za grad, obalu i izlete.",
    features: [
      [
        "⚡",
        "Snažan karakter",
        "Motor pruža siguran odziv i dovoljno snage za različite uslove vožnje.",
      ],
      [
        "⚙",
        "Automatski mjenjač",
        "Udobna i jednostavna vožnja bez nepotrebnog napora.",
      ],
      [
        "▲",
        "SUV sposobnost",
        "Viša pozicija sjedenja i stabilnost daju dodatnu sigurnost na putu.",
      ],
      [
        "▰",
        "Luksuzna kabina",
        "Premium osjećaj, udobna sjedišta i moderan enterijer.",
      ],
      [
        "❄",
        "Klima uređaj",
        "Komforna kabina i tokom najtoplijih ljetnjih dana.",
      ],
      [
        "◇",
        "Sigurnost",
        "Sistemi pomoći vozaču doprinose sigurnoj i opuštenoj vožnji.",
      ],
    ],
  },
  "Mercedes-Benz GLC": {
    description:
      "Mercedes-Benz GLC nudi premium udobnost SUV-a, prostranu kabinu i elegantnu vožnju za grad, aerodromski transfer ili putovanje.",
    features: [
      [
        "⚡",
        "Snaga i efikasnost",
        "Pouzdan motor pruža snagu kada je potrebna uz razumnu potrošnju.",
      ],
      [
        "⚙",
        "Automatski mjenjač",
        "Udobna promjena brzina i lagana vožnja na svim relacijama.",
      ],
      [
        "▲",
        "SUV komfor",
        "Povišena pozicija sjedenja, dobra preglednost i stabilnost.",
      ],
      [
        "▰",
        "Premium enterijer",
        "Kvalitetna završna obrada i dovoljno prostora za putnike i prtljag.",
      ],
      ["❄", "Klima uređaj", "Prijatna temperatura za vozača i putnike."],
      [
        "◇",
        "Sigurnost na prvom mjestu",
        "Savremeni sistemi asistencije za mirnije i sigurnije putovanje.",
      ],
    ],
  },
};

const grid = document.querySelector("#vehicleGrid"),
  modal = document.querySelector("#carModal");
const modalImage = document.querySelector("#modalImage"),
  modalName = document.querySelector("#modalName"),
  modalSubtitle = document.querySelector("#modalSubtitle"),
  modalSpecs = document.querySelector("#modalSpecs"),
  modalDescription = document.querySelector("#modalDescription"),
  modalFeatures = document.querySelector("#modalFeatures"),
  counter = document.querySelector("#imageCounter");
let activeCar = null,
  imageIndex = 0;
document.querySelector("#vehicleCount").textContent = `${cars.length} VEHICLES`;

cars.forEach((car, i) => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<div class="card-image"><img src="${car.images[0]}" alt="${car.name}" loading="lazy"></div><div class="card-info"><div><h3>${car.name}</h3><p>${car.specs.Klasa} · ${car.specs.Mjenjač}</p></div><span class="open">↗</span></div>`;
  el.addEventListener("click", () => openCar(i));
  grid.appendChild(el);
});
function openCar(i) {
  activeCar = cars[i];
  imageIndex = 0;
  modalName.textContent = activeCar.name;
  modalSubtitle.textContent = activeCar.subtitle;
  modalSpecs.innerHTML = Object.entries(activeCar.specs)
    .map(
      ([k, v]) => `<div class="spec"><span>${k}</span><span>${v}</span></div>`,
    )
    .join("");
  const extra = vehicleDetails[activeCar.name];
  modalDescription.innerHTML = extra
    ? `<strong>${activeCar.name}</strong> ${extra.description}`
    : "";
  modalFeatures.innerHTML = extra
    ? extra.features
        .map(
          ([icon, title, text]) =>
            `<div class="feature-item"><div class="feature-icon">${icon}</div><div><h4>${title}</h4><p>${text}</p></div></div>`,
        )
        .join("")
    : "";
  renderImage();
  modal.showModal();
}
function renderImage() {
  modalImage.src = activeCar.images[imageIndex];
  modalImage.alt = activeCar.name;
  counter.textContent = `${String(imageIndex + 1).padStart(2, "0")} / ${String(activeCar.images.length).padStart(2, "0")}`;
}
document.querySelector("#prevImage").onclick = () => {
  imageIndex =
    (imageIndex - 1 + activeCar.images.length) % activeCar.images.length;
  renderImage();
};
document.querySelector("#nextImage").onclick = () => {
  imageIndex = (imageIndex + 1) % activeCar.images.length;
  renderImage();
};
document.querySelector("#closeModal").onclick = () => modal.close();
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
document.addEventListener("keydown", (e) => {
  if (!modal.open) return;
  if (e.key === "ArrowLeft") document.querySelector("#prevImage").click();
  if (e.key === "ArrowRight") document.querySelector("#nextImage").click();
});
