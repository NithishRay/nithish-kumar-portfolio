import React from 'react';

const SkillCategory = ({ skill }) => {
  return (
    <div className="skill-category">
      <h3>{skill.category}</h3>
      <p>{skill.skills.join(', ')}</p>
    </div>
  );
};

export default SkillCategory;
