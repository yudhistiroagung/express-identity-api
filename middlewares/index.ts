import repoMiddleware from './repositories.middleware';
import serviceMiddleware from './services.middleware';

export default {
  pre: [
    repoMiddleware,
    serviceMiddleware
  ],
}