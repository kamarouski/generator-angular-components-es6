import angular from 'angular';

import SampleController from './sample-controller.js';
import SampleService from './sample-service.js';
import SampleTemplate from './sample-template.html';
import SampleStyles from './sample-styles.scss';

export default angular.module('sample', [])
                .service("sampleService", SampleService)
                .component("sampleComponent", {
                  controller: SampleController,
                  templateUrl: SampleTemplate
                });
