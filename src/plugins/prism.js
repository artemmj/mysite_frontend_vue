import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Любая тема из папки prismjs/themes

// Импортируйте нужные языки
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';

export const highlightAll = () => {
  Prism.highlightAll();
};

export default {
  install: (app) => {
    app.provide('prism', { highlightAll });
  }
};