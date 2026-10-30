// Warna badge ditentukan dinamis dari level: Pemula, Menengah, atau Mahir
const KELAS_LEVEL = {
  Pemula: "level-pemula",
  Menengah: "level-menengah",
  Mahir: "level-mahir",
};

export default function BadgeSkill({ namaSkill, level }) {
  return (
    <li className={`badge ${KELAS_LEVEL[level]}`}>
      {namaSkill} ({level})
    </li>
  );
}
