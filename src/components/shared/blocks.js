import React from "react";

export const Experience = ({ role }) => (
  <li className="blockItem">
    <h3>
      <span className="emoji" role="img">
        {role.emoji}
      </span>
    </h3>
    {role.info && (
      <a href={role.info} alt="more information" target="_blank">
        <h3>{role.role}</h3>
      </a>
    )}
    {!role.info && <h3>{role.role}</h3>}
    <h4>{role.date}</h4>
    <p>
      <span>Key skills: </span>
      {role.skills}
    </p>
  </li>
);

export const OtherRoles = ({ project }) => (
  <li className="blockItem">
    <img src={project.image} alt={project.title} className={project.class} />
    <a href={project.link} alt={project.title}>
      <h3>{project.title}</h3>
    </a>
    <p>{project.info}</p>
  </li>
);

export const MyProjects = ({ project }) => (
  <li className="blockItem">
    <a href={project.link} alt={project.title}>
      <img src={project.image} alt={project.title} />
    </a>
  </li>
);

export const TechSkills = ({ info, devicon, image }) => (
  <div className="blockItem">
    <p className="skillsInfo">{info}</p>
    <ul>
      <li className="devicons">
        {devicon.map(devicon => (
          <i class={devicon} />
        ))}
        {image && (
          <div className="devicons">
            {image.map(image => (
              <img src={image.src} alt={image.title} className={image.class} />
            ))}
          </div>
        )}
      </li>
    </ul>
  </div>
);

export const NavMenu = ({ item }) => (
  <li>
    <a href={item.link} alt={item.title}>
      {item.title}
    </a>
  </li>
);

export const FooterLinks = ({ item }) => (
  <a href={item.link} target="_blank" alt={item.title}>
    <img src={item.image} alt={item.title} />
  </a>
);
