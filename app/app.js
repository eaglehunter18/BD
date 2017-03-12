
/**
 * 
 * Bidding System
 * @description           Description
 * @author                Mohammad Mafarjeh
 * @url                   
 * @version               20160301
 * @date                  March 2016
 * @license               MIT
 * 
 */
 ;(function() {

  angular
  .module('boilerplate', []);
  /**
   * Definition of the main app module and its dependencies
   */
   angular
   .module('boilerplate', [
    'ngRoute',
    ])
   .config(config);
  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
   function config($routeProvider,$httpProvider, $compileProvider) {
    // routes
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/new-bid', {
      templateUrl: 'views/newBidAdmin.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/running-bids-admin', {
      templateUrl: 'views/runningBidsAdmin.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/closed-bids-admin', {
      templateUrl: 'views/closedBidsAdmin.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/history-admin', {
      templateUrl: 'views/historyAdmin.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/all-bids-user', {
      templateUrl: 'views/allBidsUser.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/opened-bids-user', {
      templateUrl: 'views/openedBidsUser.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/closed-bids-user', {
      templateUrl: 'views/closedBidsUser.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });

    $httpProvider.interceptors.push('authInterceptor');

  }
  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
   angular
   .module('boilerplate')
   .factory('authInterceptor', authInterceptor);

   authInterceptor.$inject = ['$rootScope', '$q', '$location'];

   function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }
  /**
   * Run block
   */
   angular
   .module('boilerplate')
   .run(run);

   run.$inject = ['$rootScope', '$location'];

   function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }
})();