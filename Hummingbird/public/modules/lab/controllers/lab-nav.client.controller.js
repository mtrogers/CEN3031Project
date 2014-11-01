'use strict';

angular.module('lab').controller('LabNavController', ['$scope','Authentication',
	function($scope, Authentication) {
		$scope.authentication = Authentication;
		$scope.notificationCount;
		$scope.navLinks = [
		    { open: 'open', icon: 'glyphicon glyphicon-plus', title:'Input New Result', content:'/modules/customer/views/new-order.client.view.html' },
		    { open: '', icon: 'glyphicon glyphicon-ok-sign',title:'Verify Pending Results', content:'/modules/lab/views/verify.client.view.html' },
		    { open: '', icon: 'glyphicon glyphicon-list-alt',title:'View Completed Orders', content:'' },
		    { open: '', icon: 'glyphicon glyphicon-exclamation-sign',title:'Notifications ', content:'/modules/lab/views/lab-notifications.client.view.html' }
		  ];
		$scope.currentLink = $scope.navLinks[0];
		$scope.changeCurrent = function( index )
		{
			$scope.currentLink.open = '';
			$scope.currentLink = $scope.navLinks[index];
			$scope.currentLink.open = 'open';
		};

		$scope.$on('Rejected Count Update', function (event, args) 
		{
			$scope.notificationCount = args[0];
			var label = 'success';
			if(parseInt($scope.notificationCount)>0)
			{
				label = 'danger';
			}
			$scope.navLinks[3].html ='&nbsp;&nbsp;&nbsp;<span class="label label-'+label+ '">'+$scope.notificationCount+'</span>'; 
		});
	}
]);