// for top searchbar 
// $(document).ready(function () {
//     var submitIcon = $('.searchbar-icon');
//     var inputBox = $('.searchbar-input');
//     var searchbar = $('.searchbar');
//     var isOpen = false;

   
//     var urlParams = new URLSearchParams(window.location.search);
//     var searchParam = urlParams.get('search');
//     if (searchParam !== null) {
//         searchbar.addClass('searchbar-open');
//         isOpen = true;
//     }

//     submitIcon.click(function () {
//         if (isOpen === false) {
//             searchbar.addClass('searchbar-open');
//             inputBox.focus();
//             isOpen = true;
//         } else {
//             searchbar.removeClass('searchbar-open');
//             inputBox.focusout();
//             isOpen = false;
//         }
//     });

//     submitIcon.mouseup(function () {
//         return false;
//     });

//     searchbar.mouseup(function () {
//         return false;
//     });

//     $(document).mouseup(function (e) {
//         if (!searchbar.is(e.target) && searchbar.has(e.target).length === 0) {
//             searchbar.removeClass('searchbar-open');
//             inputBox.focusout();
//             isOpen = false;
//         }
//     });
// });

// function buttonUp() {
//     var inputVal = $('.searchbar-input').val();
//     inputVal = $.trim(inputVal).length;

//     if (inputVal !== 0) {
//         $('.searchbar-icon').css('visibility', 'visible');
//     } else {
//         $('.searchbar-input').val('');
//         $('.searchbar-icon').css('visibility', 'visible');
//     }
// }

// $('.searchbar-icon').click(function (e) {
//     e.preventDefault();
//     $('.searchbar').submit();
// });