// models/skill.js
//I am porting!!!

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
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }