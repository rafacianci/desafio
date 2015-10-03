(function() {
	'use strict';

	angular
		.module('desafio.core')
		.factory('dataservice', dataservice);

		function dataservice(mockData){
			var news = mockData.getNewsFeed();
			var users = mockData.getUsersList();

			return {
				getNews: getNews,
				getUsers: getUsers,
				publishNews: publishNews,
			};

			function getNews(cb){
				if(cb){
					return cb(news);
				}
			}

			function getUsers(cb){
				if(cb){
					return cb(users);
				}
			}

			function publishNews(publish, cb){
				publish.id = news.length + 1;
				publish.user = users[0]
				news.push(publish);
				if(cb){
					cb({
						status: 1,
						message: "Publicação realizada com sucesso!"
					});
				}
			}
		}


})();