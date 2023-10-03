import battleship from './battleship.md';
import testingPractice from './testing-practice.md';
import todoList from './todo-list.md';

const allContent = {
  // KEY MUST MACHT THE FILE NAME
  // ORDER MUST MATCH EXPORT ORDER IN ./project-list.js
  // THE HIGHER THE KEY BELOW, THE HIGHER THE PROJECT IN THE LIST

  battleship,
  'testing-practice': testingPractice,
  'todo-list': todoList,
};

export default allContent;
