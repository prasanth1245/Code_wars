import "./Contact.css";

// Helper function to import images directly from src/assets/
const getAssetUrl = (filename) => {
  return new URL(`../assets/${filename}`, import.meta.url).href;
};

// 11 TEAM MEMBERS IN YOUR EXACT SPECIFIED ORDER
const TEAM_MEMBERS = [
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
  { label: "Prasanth",  number: "+91 9043657186" },
  { label: "kevin", number: "+91 99626 71081" },
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
        {/* 1. EVENT ORGANIZERS HEADER */}
        <div className="contact__header">
          <span className="contact__tag"></span>
          <h2 className="contact__title">
            EVENT <span className="text-cyan">ORGANIZERS</span>
          </h2>
        </div>

        {/* 2. GROUP PHOTO SECTION */}
        <div className="group-photo__container">
          <img 
            src={getAssetUrl("Group.jpeg")} 
            alt="Code Wars Group" 
            className="group-photo__img" 
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/900x400/040814/00f2ff?text=Code+Wars+Team";
            }}
          />
        </div>

        {/* 3. OUR TEAM SECTION (11 MEMBERS CARDS) */}
        <div className="team__section">
          <div className="contact__header">
            <h2 className="contact__title">
              OUR <span className="text-cyan">TEAM</span>
            </h2>
          </div>

          <div className="contact__grid">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="org-card">
                <div className="org-card__avatar">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=040814&color=00f2ff&bold=true`;
                    }} 
                  />
                </div>

                <div className="org-card__info">
                  <h3 className="org-card__name">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. DIRECT CONTACTS */}
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