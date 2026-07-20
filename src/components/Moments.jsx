import { MOMENTS } from '../config';
import './Moments.css';

function pickImage(onPicked) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onPicked(reader.result);
    reader.readAsDataURL(file);
  };
  input.click();
}

export default function Moments({ media, adminMode, showToast }) {
  const { photos, savePhoto } = media;

  const handleUpload = (id) => {
    showToast('UPLOADING…');
    pickImage((dataUrl) => {
      savePhoto(id, dataUrl);
      showToast('PHOTO SAVED ✦');
    });
  };

  return (
    <section className="moments">
      <div className="reveal">
        <div className="section-eyebrow">OUR MOMENTS</div>
        <h2 className="section-title">A Love Story in Frames</h2>
        <div className="gallery">
          {MOMENTS.map((m, i) => (
            <div className="photo-card" key={m.id}>
              <div className={`photo-frame ${photos[m.id] ? 'has-img' : ''}`}>
                {photos[m.id] ? (
                  <img src={photos[m.id]} alt={`Moment ${i + 1}`} />
                ) : (
                  <div className="photo-placeholder">PHOTO {i + 1}</div>
                )}
                {adminMode && (
                  <button className="img-add" onClick={() => handleUpload(m.id)}>
                    <span className="img-add-plus">+</span>
                    <span className="img-add-label">ADD PHOTO</span>
                  </button>
                )}
              </div>
              <div className="photo-cap">{m.caption}</div>
            </div>
          ))}
        </div>
        <div className="divider">
          <span />
          <div className="dot" />
          <span />
        </div>
      </div>
    </section>
  );
}
