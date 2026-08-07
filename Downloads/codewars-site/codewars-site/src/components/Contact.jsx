import "./Contact.css";

// Helper function to import images directly from src/assets/
const getAssetUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

// 11 ORGANIZERS IN YOUR EXACT SPECIFIED ORDER
const ORGANIZERS = [
  { name: "Kevin",  image: getAssetUrl("kevin.jpg.jpeg") },
  { name: "Prasanth", image: getAssetUrl("Prasanth.jpeg") },
  { name: "Pradarshan", image: getAssetUrl("pradarshan.jpeg") },
  { name: "Nakul",  image: getAssetUrl("Nakul.jpeg") },
  { name: "Preethi",  image: getAssetUrl("preethi.jpeg") },
  { name: "Ranjeetha",  image: getAssetUrl("Ranjeetha.jpeg") },
  { name: "Mummaneni Nivas",  image: getAssetUrl("nivas.jpg.jpeg") },
  { name: "Mugil Priya",  image: getAssetUrl("priya.jpg.jpeg") },
  { name: "Mohanasundaram", image: getAssetUrl("Mohan.jpg.jpeg") },
  { name: "Keerthana", image: getAssetUrl("keerthana.jpeg") },
  { name: "Nripesh Ajay", image: getAssetUrl("Ajay.jpeg") },
];

const HOTLINES = [
  { label: "Main Query", number: "+91 9043657186" },
  { label: "Registration Support", number: "+91 99626 71081" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* THOR LIGHTNING STORM BACKGROUND */}
      <div className="bg-lightning-storm">
        <div className="storm-flash" />
        <div className="storm-bolts" />
      </div>

      <div className="container relative-container">
        {/* HEADER */}
        <div className="contact__header">
          <span className="contact__tag"></span>
          <h2 className="contact__title">
            EVENT <span className="text-cyan">ORGANIZERS</span>
          </h2>
        </div>

        {/* 11 ORGANIZERS WITH PHOTOS */}
        <div className="contact__grid">
          {ORGANIZERS.map((org, index) => (
            <div key={index} className="org-card">
              <div className="org-card__avatar">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=040814&color=00f2ff&bold=true`;
                  }} 
                />
              </div>

              <div className="org-card__info">
                <h3 className="org-card__name">{org.name}</h3>
                <p className="org-card__role">{org.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT NUMBERS BELOW */}
        <div className="contact__bottom-section">
          <span className="contact__tag">// DIRECT CONTACTS</span>
          <div className="contact__hotlines">
            {HOTLINES.map((h, i) => (
              <a key={i} href={`tel:${h.number.replace(/\s+/g, "")}`} className="hotline-card">
                <span className="hotline-card__label">{h.label}</span>
                <span className="hotline-card__number">{h.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}