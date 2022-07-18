import NProgress from 'nprogress';
import './nprogress.css';

// nprogress 默认配置
NProgress.configure({
  minimum: 0.1,
  easing: 'easing',
  positionUsing: '',
  speed: 500,
  trickle: true,
  trickleSpeed: 200,
  parent: 'body',
  barSelector: '[role="bar"]', // 进度条
  showSpinner: false,
  spinnerSelector: '[role="spinner"]', // 圆形进度条
  // loading 样式
  template: '<div class="bar" role="bar" id="nprogress"><div class="peg"></div></div>',
});

export default NProgress;
