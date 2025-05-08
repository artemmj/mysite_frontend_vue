import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.min.css'; // Любая тема из папки prismjs/themes

// Импортируйте нужные языки
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-docker';

export const highlightAll = () => {
  Prism.highlightAll();
};

export default {
  install: (app) => {
    app.provide('prism', { highlightAll });
  }
};