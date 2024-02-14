export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/hardware_ab0a2eec.mjs').then(n => n.h);

export { page };
