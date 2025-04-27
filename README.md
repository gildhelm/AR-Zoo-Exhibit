# 🐬 AR Zoo & Museum Exhibit

An interactive prototype that simulates an Augmented Reality Zoo and Museum Exhibit, designed to raise awareness about critically endangered species in Brazil — starting with the La Plata dolphin (*Pontoporia blainvillei*). This project supports the goals of **UN Sustainable Development Goal 15.7** by promoting conservation through immersive educational tools.

> 🇵🇹 Disponível em português e inglês  
> 🇬🇧 Available in Portuguese and English

---

## 🎯 Project Goals

- Educate users about endangered species through engaging AR experiences
- Simulate interactive 3D animal exhibits with contextual information
- Create a GitHub-friendly prototype using open web technologies

---

## 🚀 Getting Started

1. Make sure you have **Node.js** installed.
2. Clone or download the repo.
3. Run the following commands in the root folder:

```bash
npm install
npm start
```

4. A browser tab will open at `http://localhost:1234`

---

## 💡 Technologies Used

- HTML5 + CSS3 + JavaScript (Vanilla + React)
- [`<model-viewer>`](https://modelviewer.dev/) for 3D model display
- [Parcel](https://parceljs.org/) for bundling
- Git + GitHub for version control

---

## 🧠 Project Diagrams

### 📊 Flowchart

```mermaid
graph TD
  A[User Opens App] --> B[Landing Page / Welcome]
  B --> C{Choose Exhibit}
  C --> D[La Plata Dolphin Exhibit]
  D --> E[View 3D Model]
  E --> F{AR Mode?}
  F -- Yes --> G[Launch AR Viewer]
  F -- No --> H[Rotate/Zoom Model]
  H --> I[Read Info / Threats / Fun Facts]
  G --> I
  I --> J[Back to Main Menu]
```

### 🧩 Work Breakdown Structure

## Work Breakdown Structure (WBS)

```mermaid
graph TD
  A(Project: La Plata Dolphin AR Exhibit) --> B1(Setup Project Folder Structure):::done
  A --> B2(Prepare 3D Model of Dolphin):::done
  A --> B3(Build Basic Webpage):::done
  A --> B4(Enhance Presentation and Responsiveness):::done
  A --> B5(Deploy to Netlify):::todo
  A --> B6(Document Project on GitHub):::todo

  B1 --> C1(Create folders: assets/models, css):::done
  B2 --> C2(Choose and test dolphin.glb model):::done
  B3 --> C3(Load model with <model-viewer>):::done
  B4 --> C4(Add background color, responsiveness, description):::done
  B5 --> C5(Connect GitHub repo to Netlify):::todo
  B6 --> C6(Write README with WBS and Netlify link):::todo

classDef done fill:#c8e6c9,stroke:#388e3c,stroke-width:2px;
classDef todo fill:#ffcdd2,stroke:#c62828,stroke-width:2px;

%% Estimated Times
%% (in days, small-scale student prototype)

%% Setup
B1:::done --> D1[Estimated: 0.5 day]
B2:::done --> D2[Estimated: 1 day]
B3:::done --> D3[Estimated: 0.5 day]
B4:::done --> D4[Estimated: 0.5 day]
B5:::todo --> D5[Estimated: 0.5 day]
B6:::todo --> D6[Estimated: 0.5 day]
```


## 📁 Folder Structure

```
AR-Zoo-Exhibit/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   └── main.css
│   └── components/
│       └── AnimalViewer.js
├── assets/
│   ├── models/
│   │   └── placeholder.glb
│   └── mockups/
│       └── dolphin_welcome_screen.png
├── README.md
├── LICENSE
├── package.json
└── .gitignore
```

---

## 📸 References

- 🎨 Mockup image: `assets/mockups/dolphin_welcome_screen.png`
- 🐬 Species focus: La Plata dolphin (*Pontoporia blainvillei*)
- 📚 Source: [IUCN Red List](https://www.iucnredlist.org/)

---

## 📝 License

MIT License — see [`LICENSE`](./LICENSE) for full details.
