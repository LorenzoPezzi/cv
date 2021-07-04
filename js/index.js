$(document).ready(function()
{
	$("#wordCloud").jQWCloud({
		words: [
				{word: 'HTML', weight: 40},
				{word: 'JAVA', weight: 39},
				{word: 'Javascript', weight: 11, color: 'green'},
				{word: 'SQL', weight: 27},
				{word: 'MVC', weight: 36},
				{word: 'Modello ER', weight: 39},
				{word: 'CSS', weight: 12, color: 'green'},
				{word: 'Bootstrap', weight: 27},
				{word: 'Python', weight: 36},
				{word: 'Database', weight: 22},
				{word: 'JAVA', weight: 39},
				{word: 'Javascript', weight: 11, color: 'green'},
				{word: 'SQL', weight: 27},
				{word: 'MVC', weight: 36},
				{word: 'Modello ER', weight: 39},
				{word: 'CSS', weight: 12, color: 'green'},
				{word: 'Bootstrap', weight: 27},
				{word: 'Python', weight: 36},
				{word: 'Database', weight: 22}
				       		        
		],
		//cloud_color: 'yellow',		
		minFont: 10,
		maxFont: 50,
		//fontOffset: 5,
		//cloud_font_family: 'Owned',
		//verticalEnabled: false,
		padding_left: 1,
		//showSpaceDIV: true,
		//spaceDIVColor: 'white',
		word_common_classes: 'WordClass',		
		word_mouseEnter :function(){
			$(this).css("text-decoration","underline");
		},
		word_mouseOut :function(){
			$(this).css("text-decoration","none");	
		},
		word_click: function(){ 			
			alert("You have selected:" +$(this).text());
		},		              
		beforeCloudRender: function(){
		       date1=new Date();
	 	},
	 	afterCloudRender: function(){
				var date2=new Date();
				console.log("Cloud Completed in "+(date2.getTime()-date1.getTime()) +" milliseconds");
			}
	});
	
});