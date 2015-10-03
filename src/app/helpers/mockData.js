(function () {
    'use strict';

    angular
            .module('desafio.core')
            .service('mockData', mockData);

    /** @ngInject */
    function mockData() {
      return{
        getNewsFeed: getNewsFeed,
        getUsersList: getUsersList
      };

      function getNewsFeed(){
        return [
          {
            'id': 1,
            'user': {
              'id': 2,
              'name': 'Rafael Fuzifaru Cianci',
              'nick': 'RafaCianci',
              'photo': 'https://lh4.googleusercontent.com/-2VeM9RRm-ZU/Un58528_zHI/AAAAAAAAAxM/rRnqkVl2Vq0/s621-no/6521_618020538221797_1867708819_n.jpg'
            },
            'content': 'Realizando teste da CodeRockr.',
            'date': '2015-10-02T08:19:27.267Z'
          },
          {
            'id': 2,
            'user': {
              'id': 3,
              'name': 'Rafael Cianci',
              'nick': 'Rafa',
              'photo': 'https://lh4.googleusercontent.com/-2VeM9RRm-ZU/Un58528_zHI/AAAAAAAAAxM/rRnqkVl2Vq0/s621-no/6521_618020538221797_1867708819_n.jpg'
            },
            'content': 'Realizando teste da CodeRockr.',
            'date': '2015-10-02T08:19:27.267Z'
          },
        ];
      }

      function getUsersList(){
        return [
          {
            'id': 2,
            'name': 'Rafael Fuzifaru Cianci',
            'nick': 'RafaCianci',
            'photo': 'https://lh4.googleusercontent.com/-2VeM9RRm-ZU/Un58528_zHI/AAAAAAAAAxM/rRnqkVl2Vq0/s621-no/6521_618020538221797_1867708819_n.jpg'
          },
          {
            'id': 3,
            'name': 'Rafael Fuzifaru Cianci',
            'nick': 'RafaCianci',
            'photo': 'https://lh4.googleusercontent.com/-2VeM9RRm-ZU/Un58528_zHI/AAAAAAAAAxM/rRnqkVl2Vq0/s621-no/6521_618020538221797_1867708819_n.jpg'
          }
        ];
      }

    }

})();
