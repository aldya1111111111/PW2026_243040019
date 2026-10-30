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
    nama: "Pemrograman Web (React & Laravel)",
    sks: 3,
    jadwal: "Senin",
  },
  {
    kode: "IF212",
    nama: "Sistem Basis Data (PostgreSQL)",
    sks: 3,
    jadwal: "Rabu",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-lab">Laboratorium Informatika</p>
          <h1>Praktikum Pemrograman Web</h1>
          <p className="hero-sub">Modul 1: Pengenalan React JS &amp; Vite</p>
        </div>
      </header>

      <main className="content">
        <KartuProfil
          nama="Mahasiswa Informatika"
          npm="233040000"
          kelas="IF Praktikum"
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
