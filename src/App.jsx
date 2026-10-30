import "./App.css";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import ItemMatkul from "./ItemMatkul";
import ShowcasePortofolio from "./ShowcasePortofolio";

const keahlian = [
  { namaSkill: "JavaScript (ES6+)", level: "Mahir" },
  { namaSkill: "React.js", level: "Menengah" },
  { namaSkill: "HTML & CSS", level: "Mahir" },
  { namaSkill: "Node.js", level: "Pemula" },
];

const matkul = [
  {
    kode: "IF211",
    nama: "Pemrograman Web",
    sks: 2,
    jadwal: "Jumaat",
  },
  {
    kode: "IF212",
    nama: "Pratikum pemograman ii",
    sks: 2,
    jadwal: "selasa",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-lab">Laboratorium Informatika</p>
          <h1>Praktikum Pemrograman Web</h1>
          <p className="hero-sub"></p>
        </div>
      </header>

      <main className="content">
        <KartuProfil
          nama="Aldi Adriansyah"
          npm="243040019"
          kelas="Praktikum TIF"
          status="Aktif"
        />

        <section className="section">
          <h2>Daftar Keahlian</h2>
          <ul className="skills">
            {keahlian.map((k) => (
              <BadgeSkill key={k.namaSkill} {...k} />
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Daftar Rencana Praktikum Semester</h2>
          <ul className="courses">
            {matkul.map((m) => (
              <ItemMatkul key={m.kode} {...m} />
            ))}
          </ul>
        </section>

        <ShowcasePortofolio />
      </main>
    </div>
  );
}
