(function() {	

	angular.module('users').controller('ShareUserDocumentCtrl', ['$rootScope', '$scope', '$filter', 'UserService', 'UserDocumentService', 'UserFolderService', 'ShareUserDocumentService', 'ss_alert', '$translate', 'ui', '$http', '$timeout',
		function($rootScope, $scope, $filter, UserService, UserDocumentService, UserFolderService, ShareUserDocumentService,  ss_alert, $translate, ui, $http, $timeout) {
	    	
			$scope.share = {
				folder_id: "",
				document_id: "",
				user_id: "",
				message: ""
			}

			var dom = null,
				msg_key = null;

			UserFolderService.query().$promise.then(function(data) {
				$scope.user_folders = data
			})

			UserService.gatAllUsers().$promise.then(function(data) {
				$scope.users = data
			})

			UserDocumentService.query().$promise.then(function(data) {
			 	$scope.user_documents = data
			})

	    	$scope.shareFolder = function(share) {
	    		dom = '#share_folder_msg_box'
	    		msg_key = 'FOLDER_SHARED_SUCCESSFULLY'
	    		ShareUserDocumentService.shareDocument(share).$promise.then(success, error)
	    	}

	    	$scope.shareDocument = function(share) {
	    		dom = '#share_document_msg_box'
	    		msg_key = 'DOCUMENT_SHARED_SUCCESSFULLY'
	    		ShareUserDocumentService.shareDocument(share).$promise.then(success, error)
	    	}

	    	var success = function(data) {
				$(dom).text($translate.instant(msg_key)).css({"font-size": "3", "color": 'Green'})
				$timeout(function() {
					$(dom).empty()
					$('.dialog_cancel_butt').trigger('click')
				}, 2000)
			}

			var error = function(reason) {
				$(dom).text(reason.data.errors).css({"font-size": "3", "color": "Red"})  
				$timeout(function() {
					$(dom).empty()
				}, 4000)
			}		
		}
	])

})();