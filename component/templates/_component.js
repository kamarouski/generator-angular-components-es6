import angular from 'angular';

import Controller from './<%= componentFileName %>-controller.js';
import Template from './<%= componentFileName %>.html';
import styles from './<%= componentFileName %>.scss';

export default angular.module("<%= componentName %>")
                .component("<%= componentName %>", {
                    controller: Controller,
                    templateUrl: Template
                });
