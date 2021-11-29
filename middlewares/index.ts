import repoMiddleware from './repositories.middleware';
import serviceMiddleware from './services.middleware';

import errMiddleware from './error.middleware';

export default {
  pre: [
    repoMiddleware,
    serviceMiddleware,
  ],
  post: [
    errMiddleware,
  ]
}