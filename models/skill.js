const skills = [
  {id: 123456, skill: 'Troubleshooting', has: true},
  {id: 123457, skill: 'Tech Savy', has: true},
  {id: 123458, skill: 'Enjoys Learning', has: true},
  {id: 123459, skill: 'Proficient Typing', has: true},
  {id: 123460, skill: 'Highly Motivated', has: true},
  {id: 123461, skill: 'Naturally Gifted Programmer', has: false},
  {id: 123462, skill: 'Backend Proficiency', has: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.has = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}