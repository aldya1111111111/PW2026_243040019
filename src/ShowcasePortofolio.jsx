import KartuProyek from "./KartuProyek";

const proyek = [
  {
    judul: "Aplikasi Daftar Tugas",
    deskripsi:
      "Catat, ceklis, dan hapus tugas harian memakai state dan event handler React.",
    teknologi: ["React", "Vite", "CSS"],
    repo: "https://github.com/aldya1111111111/PW2026_243040019",
  },
  {
    judul: "Katalog Mata Kuliah",
    deskripsi:
      "Daftar mata kuliah semester dengan pencarian dan filter berdasarkan hari.",
    teknologi: ["React", "JavaScript"],
    repo: "https://github.com/aldya1111111111/PW2026_243040019",
  },
  {
    judul: "Landing Page Praktikum",
    deskripsi:
      "Halaman perkenalan modul praktikum yang responsif untuk layar HP dan desktop.",
    teknologi: ["HTML", "CSS"],
    repo: "https://github.com/aldya1111111111/PW2026_243040019",
  },
  {
    judul: "API Nilai Mahasiswa",
    deskripsi:
      "REST API sederhana untuk mengelola data nilai mahasiswa dengan operasi CRUD.",
    teknologi: ["Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/aldya1111111111/PW2026_243040019",
  },
];

export default function ShowcasePortofolio() {
  return (
    <section className="section">
      <h2>Showcase Portofolio Mini</h2>
      <ul className="projects">
        {proyek.map((p) => (
          <KartuProyek key={p.judul} {...p} />
        ))}
      </ul>
    </section>
  );
}
