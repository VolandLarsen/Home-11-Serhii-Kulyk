jQuery(document).ready(function(){jQuery("#list-items").html(localStorage.getItem("listItems")),jQuery(".add-items").submit(function(e){e.preventDefault();var t=jQuery("#todo-list-item").val();t&&(jQuery("#list-items").append("<li>"+t+"<a class='remove'>x</a><div class='hr'></div></li>"),localStorage.setItem("listItems",jQuery("#list-items").html()),jQuery("#todo-list-item").val(""))}),jQuery(document).on("change",".checkbox",function(){jQuery(this).attr("checked")?jQuery(this).removeAttr("checked"):jQuery(this).attr("checked","checked"),jQuery(this).parent().toggleClass("completed"),localStorage.setItem("listItems",jQuery("#list-items").html())}),jQuery(document).on("click",".remove",function(){jQuery(this).parent().remove(),localStorage.setItem("listItems",jQuery("#list-items").html())})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImh0bWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIml0ZW0iLCJ2YWwiLCJhcHBlbmQiLCJzZXRJdGVtIiwib24iLCJ0aGlzIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJwYXJlbnQiLCJ0b2dnbGVDbGFzcyIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLFVBQVVDLE1BQU0sV0FDckJGLE9BQU8sZUFBZUcsS0FBS0MsYUFBYUMsUUFBUSxjQUNoREwsT0FBTyxjQUFjTSxPQUFPLFNBQVNDLEdBQ25DQSxFQUFNQyxpQkFDTixJQUFJQyxFQUFPVCxPQUFPLG1CQUFtQlUsTUFDbENELElBQ0RULE9BQU8sZUFBZVcsT0FBTyxPQUFTRixFQUFPLHNEQUM3Q0wsYUFBYVEsUUFBUSxZQUFhWixPQUFPLGVBQWVHLFFBQ3hESCxPQUFPLG1CQUFtQlUsSUFBSSxPQUdsQ1YsT0FBT0MsVUFBVVksR0FBRyxTQUFVLFlBQWEsV0FDdENiLE9BQU9jLE1BQU1DLEtBQUssV0FDbkJmLE9BQU9jLE1BQU1FLFdBQVcsV0FFeEJoQixPQUFPYyxNQUFNQyxLQUFLLFVBQVcsV0FFL0JmLE9BQU9jLE1BQU1HLFNBQVNDLFlBQVksYUFDbENkLGFBQWFRLFFBQVEsWUFBYVosT0FBTyxlQUFlRyxVQUUxREgsT0FBT0MsVUFBVVksR0FBRyxRQUFTLFVBQVcsV0FDdENiLE9BQU9jLE1BQU1HLFNBQVNFLFNBQ3RCZixhQUFhUSxRQUFRLFlBQWFaLE9BQU8sZUFBZUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGpRdWVyeSgnI2xpc3QtaXRlbXMnKS5odG1sKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0SXRlbXMnKSk7XHJcbiAgalF1ZXJ5KCcuYWRkLWl0ZW1zJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgaXRlbSA9IGpRdWVyeSgnI3RvZG8tbGlzdC1pdGVtJykudmFsKCk7XHJcbiAgICBpZihpdGVtKXtcclxuICAgICAgalF1ZXJ5KCcjbGlzdC1pdGVtcycpLmFwcGVuZChcIjxsaT5cIiArIGl0ZW0gKyBcIjxhIGNsYXNzPSdyZW1vdmUnPng8L2E+PGRpdiBjbGFzcz0naHInPjwvZGl2PjwvbGk+XCIpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEl0ZW1zJywgalF1ZXJ5KCcjbGlzdC1pdGVtcycpLmh0bWwoKSk7XHJcbiAgICAgIGpRdWVyeSgnI3RvZG8tbGlzdC1pdGVtJykudmFsKFwiXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGpRdWVyeShkb2N1bWVudCkub24oJ2NoYW5nZScsICcuY2hlY2tib3gnLCBmdW5jdGlvbigpIHtcclxuICAgIGlmKGpRdWVyeSh0aGlzKS5hdHRyKCdjaGVja2VkJykpIHtcclxuICAgICAgalF1ZXJ5KHRoaXMpLnJlbW92ZUF0dHIoJ2NoZWNrZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGpRdWVyeSh0aGlzKS5hdHRyKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcclxuICAgIH1cclxuICAgIGpRdWVyeSh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnY29tcGxldGVkJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEl0ZW1zJywgalF1ZXJ5KCcjbGlzdC1pdGVtcycpLmh0bWwoKSk7XHJcbiAgfSk7XHJcbiAgalF1ZXJ5KGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJlbW92ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RJdGVtcycsIGpRdWVyeSgnI2xpc3QtaXRlbXMnKS5odG1sKCkpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbiJdfQ==
