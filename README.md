# AR Zoo and Museum Exhibits

This is a prototype for an **Augmented Reality (AR) Zoo and Museum Exhibit**, focused on raising awareness about critically endangered Brazilian species, starting with the **La Plata dolphin (toninha)**.

## Features

- Mobile-friendly design
- Bilingual UI (Portuguese/English)
- 3D model viewer with placeholder assets
- Modular structure for future AR integrations

## Goals

- Promote biodiversity awareness aligned with UN SDG 15.7
- Provide interactive educational content
- Enable use in classrooms, zoos, and museums

## Project Diagrams

details> <summary>📄 Click to expand Mermaid Flowchart code</summary>

```mermaid
flowchart TD
    A[Início: Tela de Boas-vindas / Welcome Screen] --> B{Escolher Animal?}
    B -- Sim / Yes --> C[Visualizar Animal 3D]
    C --> D{Ativar Modo AR?}
    D -- Sim / Yes --> E[Experiência em AR]
    D -- Não / No --> F[Fim da Visualização]
    B -- Não / No --> F
    E --> F

</details>

---

## 🧱 2. **Work Breakdown Structure (WBS)**

<details>
<summary>📄 Click to expand Mermaid WBS code</summary>

```markdown
```mermaid
graph TD
    A[AR Zoo Prototype] --> A1[Pesquisa e Planejamento / Research & Planning]
    A --> A2[Design e Mockups / Design & Mockups]
    A --> A3[Desenvolvimento Web / Web Development]
    A --> A4[Testes / Testing]
    A --> A5[Documentação / Documentation]

    A2 --> A2a[Mockup da tela inicial / Welcome Screen Mockup]
    A3 --> A3a[HTML/CSS/JS básico]
    A3 --> A3b[Visualização 3D com model-viewer]
    A3 --> A3c[Integração Modo AR]
    A5 --> A5a[README.md]
    A5 --> A5b[Licença e Estrutura de Pastas / License & Folder Structure]

</details>


## Project Structure

AR-Zoo-Exhibit/
├── public/
   └── index.html
├── src/
   ├── index.js
   ├── App.js
   ├── styles/
   │   └── main.css
   └── components/
│       └── AnimalViewer.js
├── README.md
├── LICENSE
├── package.json

## How to Run

Install dependencies:

npm install

Start local server:

npm run start
