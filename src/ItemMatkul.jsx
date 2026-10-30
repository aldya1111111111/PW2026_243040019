export default function ItemMatkul({ kode, nama, sks, jadwal }) {
  return (
    <li className="course">
      <div className="day">
        <strong>{jadwal}</strong>
        <span>Jadwal Sesi</span>
      </div>
      <div className="course-text">
        <p className="course-title">{nama}</p>
        <p className="course-code">{kode}</p>
      </div>
      <span className="sks">{sks} SKS</span>
    </li>
  );
}
