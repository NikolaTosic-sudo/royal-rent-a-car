const cars = [
  {
    name: "Volkswagen Tiguan",
    subtitle: "Mjesto gdje komfor susrece snagu",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Manuel",
      Gorivo: "Dizel",
      Sjedišta: "7",
      Klasa: "Premium",
    },
  },
  {
    name: "Peugeot Expert",
    subtitle: "Prostor za sve. Komfor za sve. Putovanje za pamcenje.",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Manuel",
      Gorivo: "Dizel",
      Sjedišta: "7+1",
      Klasa: "Premium",
    },
  },
  {
    name: "Audi A5 Sportback",
    subtitle: "Drive The Difference",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Benzin",
      Sjedišta: "5",
      Klasa: "Premium",
    },
  },
  {
    name: "Mercedes B Klasa",
    subtitle: "Putuj pametno, vozi sa stilom.",
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Premium",
    },
  },
  {
    name: "Mitsubishi Pajero 4x4",
    subtitle: "Off Road King of Jungle. No Limits. Nema Prepreka.",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik 4x4",
      Gorivo: "Benzin",
      Sjedišta: "5",
      Klasa: "Luxury SUV",
    },
  },
  {
    name: "Peugeot 308 Cabriolet",
    subtitle: "Uzivaj u voznji Cabrioletom po Crnoj Gori",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Manuel",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Cabriolet",
    },
  },
  {
    name: "Jeep Grand Cherokee",
    subtitle: "Ne vozis put. Vladas njime.",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Luxury SUV",
    },
  },
  {
    name: "Peugeot 5008",
    subtitle: "7 Seater",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Automatik",
      Gorivo: "Dizel",
      Sjedišta: "7",
      Klasa: "MPV",
    },
  },
  {
    name: "Renault Megane Coupe Cabriolet",
    subtitle: "Zivot je prekratak za obicne voznje",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1400&q=85",
    ],
    specs: {
      Mjenjač: "Manuel",
      Gorivo: "Dizel",
      Sjedišta: "5",
      Klasa: "Cabriolet",
    },
  },
];

// Detaljni opis za svako vozilo. Tekst i brojeve slobodno zamijeni stvarnim podacima.
const vehicleDetails = {
  "Volkswagen Tiguan": {
    description:
      "4Motion spaja snagu, stabilnost i udobnost u svakom kilometru. Savršen saputnik za grad, putovanja i avanture koje vas čekaju.",
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
  "Peugeot Expert": {
    description: "Savrsen izbor za porodice, prijatelje i poslovna putovanja.",
    features: [
      [
        "⚡",
        "7+1 Udobnih Sjedista",
        "Dovoljno mjesta za sve putnike i prtljag.",
      ],
      ["⚙", "Manuel Mjenjac", "Potpuna kontrola. Ekonomicna voznja"],
      ["▰", "Veliki Prtljaznik", "Vise prostora za sve sto vam je potrebno."],
      ["❄", "Klima uređaj", "Prijatna voznja u svim uslovima"],
      ["◇", "Siguran Put", "Pouzdanost na prvom mjestu"],
      ["⛽", "Ekonomičan", "Mali potrosac. Veliki ucinak"],
    ],
  },
  "Audi A5 Sportback": {
    description:
      "Luksuz koji se vidi. Komfor koji se osjeca. Performanse koje se pamte.",
    features: [
      ["▰", "Automatik", "Za lakocu i uzitak u svakoj voznji."],
      [
        "❄",
        "Sportback dizajn",
        "Savrsen spoj elegancije i sportskog karaktera.",
      ],
      ["◇", "Premium oprema", "Vrhunska udobnost na svakom putu"],
      ["⛽", "Maksimalan uzitak u voznji", "Performanse koje odusevljavaju"],
    ],
  },
  "Mercedes B Klasa": {
    description:
      "Savrsen spoj komfora, sigurnosti i elegancije. Idealna za grad, putovanja i poslovne obaveze.",
    features: [
      ["⚡", "Vrhunski komfor", "Prostrana i udovna unutrasnjost"],
      ["⚙", "Automatik mjenjač", "Lagano, sigurno i bez stresa"],
      ["⛽", "Ekonomicna potrosnja", "Vise kilometara, manje brige"],
      ["❄", "Klima uređaj", "Savrsena temperatura u svakoj voznji"],
      [
        "◇",
        "Sigurnost na prvom mjestu",
        "Pouzdanost koju osjetite u svakom trenutku",
      ],
    ],
  },
  "Mitsubishi Pajero 4x4": {
    description:
      "Nije vazno kuda ides. Vazno je da stignes. Planine, stijene, blato ili snijeg - Pajero ide tamo gdje drugi staju. Snaga. Pouzdanost. Sloboda. Tvoj teren. Tvoja pravila",
    features: [
      [
        "⚡",
        "Spreman za svaki teren",
        "Planina, suma, blato, snijeg ili pijesak.",
      ],
      [
        "⚙",
        "Snaga i Pouzdanost",
        "Mitsubishi kvalitet na koji mozes racunati.",
      ],
      ["▲", "Pravi 4x4 Sistem", "Maksimalna kontrola na svakom terenu."],
      [
        "▰",
        "Udobnost na svakom putu",
        "Prostran, komforan i spreman za avanturu.",
      ],
      ["❄", "Klima uređaj", "Komfor bez obzira na godisnje doba."],
    ],
  },
  "Peugeot 308 Cabriolet": {
    description:
      "Osjeti slobodu, sunce i vjetar. Otvori put avanturi i stvori nezaboravne uspomene.",
    features: [
      [
        "⚡",
        "Vjetar u kosi, brige u nazad",
        "Uzivaj u svakom trenutku otvorenog neba.",
      ],
      ["⚙", "Sunce na licu, osmijeh na usnama", "Osjeti ljeto. Osjeti zivot."],
      [
        "▲",
        "Za vikende, za uspomene",
        "Savrsen saputnik za nezaboravne avanture.",
      ],
      ["▰", "Udoban i praktican", "Komfor koji prati tvoj sgtil zivota."],
      ["◇", "Siguran put, bez kompromisa", "Pouzdanost na prvom mjestu."],
    ],
  },
  "Jeep Grand Cherokee": {
    description:
      "Osjeti slobodu, sunce i vjetar. Otvori put avanturi i stvori nezaboravne uspomene.",
    features: [
      ["⚡", "Snaga", "Koja ovaja planine."],
      ["⚙", "Komfor", "Koji osvaja kilometre."],
      ["▲", "Prestiz", "Koji osvaja poglede."],
    ],
  },
  "Peugeot 5008": {
    description: "Prostor. Komfor. Sloboda. Za cijelu prodicu.",
    features: [
      [
        "⚡",
        "7 udobnih sjedista",
        "Dovoljno prostora za cijelu porodicu i prijatelje.",
      ],
      ["⚙", "Veliki prtljaznik", "Vise prostora za sve sto vam je potrebno."],
      [
        "▲",
        "Maksimalna sigurnost",
        "Pouzdan automobil za bezbrizana putovanja.",
      ],
      ["▰", "Klima uređaj", "Komforna voznja u svim uslovima."],
      [
        "◇",
        "Idealan za sva putovanja",
        "Grad, planina, more - uvijek pravi izbor.",
      ],
    ],
  },
  "Renault Megane Coupe Cabriolet": {
    description:
      "Spusti krov, pokreni motor i prepusti se osjecaju koji se ne moze opisati. Svaki kilometar - novo iskustvo. Svaka voznja - tvoj film.",
    features: [
      [
        "⚡",
        "Vjetar u kosi, brige u nazad",
        "Uzivaj u svakom trenutku otvorenog neba.",
      ],
      ["⚙", "Sunce na licu, osmijeh na usnama", "Osjeti ljeto. Osjeti zivot."],
      [
        "▲",
        "Za vikende, za uspomene",
        "Savrsen saputnik za nezaboravne avanture.",
      ],
      ["▰", "Udoban i praktican", "Komfor koji prati tvoj sgtil zivota."],
      ["◇", "Siguran put, bez kompromisa", "Pouzdanost na prvom mjestu."],
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
  document.body.classList.add("modal-open");
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

function closeModal() {
  modal.close();
  document.body.classList.remove("modal-open");
}

document.querySelector("#closeModal").onclick = closeModal;

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (!modal.open) return;
  if (e.key === "ArrowLeft") document.querySelector("#prevImage").click();
  if (e.key === "ArrowRight") document.querySelector("#nextImage").click();
});
