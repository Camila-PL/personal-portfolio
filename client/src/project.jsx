import { useState } from "react";
import p1 from "./assets/projects/Pixar.png";
import p2 from "./assets/projects/Spa.png";
export default function Project() {
    const projects = [
    {
      id: 1,
      title: "Pixar Movies Website",
      img: p1,
      desc: "A small website showing a gallery of Pixar movies with images and basic search.",
      details: "Built using HTML, CSS, and JavaScript. Focused on practicing DOM manipulation and dynamic content rendering.",
    },
    {
      id: 2,
      title: "SPA Website",
      img: p2,
      desc: "A simple static website for a Spa with services, pricing, and contact information.",
      details: "HTML, CSS, and basic JavaScript for interactivity. Clean design with a relaxing theme.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  //Shows and hides project details when clicking on a project
  function toggleDetails(id) {
    setOpenId(prev => (prev === id ? null : id));
  }
return (
<>
<section id="projects">
<h2 className="section-title">My Projects</h2>
<div className="proj-grid">
        {projects.map(p => (
          <article key={p.id} className="proj-card">
            <img src={p.img} alt={p.title} className="proj-img" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <button className="link-btn" onClick={() => toggleDetails(p.id)}>
              {openId === p.id ? "Hide details" : "View details"}
            </button>

            {openId === p.id && (
              <div className="proj-details">
                <p>{p.details}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
</>
);
}
