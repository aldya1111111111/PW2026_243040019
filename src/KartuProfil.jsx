export default function KartuProfil({ nama, npm, kelas, status }) {
  return (
    <section className="profile" aria-label="Profil Mahasiswa Praktikan">
      <div className="photo">
        <img
          src="https://placehold.co/112x112"
          alt="Foto profil"
          width="112"
          height="112"
        />
      </div>

      <div className="profile-body">
        <h2>{nama}</h2>
        <dl>
          <div>
            <dt>NPM</dt>
            <dd>{npm}</dd>
          </div>
          <div>
            <dt>Kelas</dt>
            <dd>{kelas}</dd>
          </div>
        </dl>
      </div>

      <span className="status">Status Akademik: {status}</span>
    </section>
  );
}
