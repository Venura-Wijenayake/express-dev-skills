// models/skill.js

const skills = [
    {id: 100001, skill: 'C++/C#', done: true},
    {id: 100002, skill: 'Java', done: true},
    {id: 100003, skill: 'HTML', done: true},
    {id: 100004, skill: 'CSS', done: true},
    {id: 100005, skill: 'Javascript', done: true},
    {id: 100006, skill: 'Node.js', done: false},
    {id: 100007, skill: 'Express', done: false},
    {id: 100008, skill: 'MongoDB', done: false},
    {id: 100009, skill: 'Python', done: false},
    {id: 100010, skill: 'Django', done: false},
    {id: 100011, skill: 'PostgreSQL', done: false},
    {id: 100012, skill: 'React', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
 
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }