"use strict";
var leftPane = document.querySelector('#left-pane');
var menu = document.querySelector('#menu');
var section = document.getElementById('section');
if (!leftPane || !menu || !section) {
    throw new Error('Element not found');
}
menu.addEventListener('click', function () {
    var _a, _b;
    if (leftPane.classList.contains('absolute')) {
        (_a = leftPane.classList).add.apply(_a, ['left-0', 'z-10', 'top-0']);
        console.log('here');
        section.classList.add('hidden');
        leftPane.classList.remove('absolute');
    }
    else {
        leftPane.classList.add('absolute');
        (_b = leftPane.classList).remove.apply(_b, ['left-0', 'z-10', 'top-0']);
        leftPane.classList.add('-left-[20rem]');
        section.classList.remove('hidden');
    }
});
// <!--Second post:: start-- >
//     <div class="maincen lg:maincen" >
//         <div class="flex justify-between" >
//             <div class="flex space-x-2" >
//                 <img src="./src/images/IMG_20210815_190401_500~2.jpg" alt = "" class="object-cover rounded-full w-9 h-9" >
//                     <div class="flex flex-col" >
//                         <div class="flex items-center space-x-2" >
//                             <p class="font-bold hover:underline" > Pinto Aaron Macquena < /p>
//                                 < img src = "./src/images/verify.png" alt = "" class="w-4 h-4" >
//                                     </svg>
//                                     < /div>
//                                     < div class='flex items-center space-x-1' >
//                                         <p class="text-sm font-light" > Just now.< /p>
//                                             < img src = "./src/images/planet-earth.png" alt = "" class="w-4 h-4" >
//                                                 </div>
//                                                 < /div>
//                                                 < /div>
//                                                 < div class='flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200' >
//                                                     <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" >
//                                                         <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2"
// d = "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//     </svg>
//     < /div>
//     < /div>
//     < !--Message -->
//         <div class="pt-2 text-sm tracking-wide" >
//             <p>
//             Proud to have done this with HTML and tailwindCSS.
//                         < /p>
//                 < /div>
//                 < div class="w-full pt-3" >
//                     <img src="./src/images/myfeed.jpeg" alt = ""  class="object-contain w-full" >
//                         </>
//                         < div class="flex items-center justify-between" >
//                             <div class="flex items-center pt-2 pb-2 pl-3 space-x-2 border-l-2 border-l-blue-600" >
//                                 <div>
//                                 <img src="./src/images/heart.png" alt = "" class="h-7 w-7" >
//                                     </div>
//                                     < div >
//                                     <p class="font-light" > 19.3M < /p>
//                                         < /div>
//                                         < /div>
//                                         < div class="flex items-center font-normal text-[14px] text-gray-500 space-x-2" >
//                                             <div>
//                                             <p>7.4K Comments < /p>
//                                                 < /div>
//                                                 < div >
//                                                 <p>4.2K Shares < /p>
//                                                     < /div>
//                                                     < /div>
//                                                     < /div>
//                                                     < div class="flex items-center justify-center pt-3 space-x-16 border-t-2 " >
//                                                         <div class="flex items-center space-x-2" >
//                                                             <i class="fa-regular fa-thumbs-up fa-lg" > </i>
//                                                                 < p class="text-sm capitalize" > like < /p>
//                                                                     < /div>
//                                                                     < div class="flex items-center space-x-2" >
//                                                                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" >
//                                                                             <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2"
// d = "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//     </svg>
//     < p class="text-sm" > Comment < /p>
//         < /div>
//         < div class="flex items-center space-x-2" >
//             <img src="./src/images/share.png" alt = "" class="w-5 h-4" >
//                 <p class="text-sm" > Share < /p>
//                     < /div>
//                     < /div>
//                     < /div>
//                     < !--End of Second post-- >
//                         <!--TODO: change image and content to suite name of user.-- >
//                             <!--Third post:: start-- >
//                                 <div class="maincen lg:maincen" >
//                                     <div class="flex justify-between" >
//                                         <div class="flex space-x-2" >
//                                             <img src="./src/images/IMG_20210815_190401_500~2.jpg" alt = "" class="object-cover rounded-full w-9 h-9" >
//                                                 <div class="flex flex-col" >
//                                                     <div class="flex items-center space-x-2" >
//                                                         <p class="font-bold hover:underline" > Kwaw Kumi Miezah < /p>
//                                                             < img src = "./src/images/verify.png" alt = "" class="w-4 h-4" >
//                                                                 </svg>
//                                                                 < /div>
//                                                                 < div class='flex items-center space-x-1' >
//                                                                     <p class="text-sm font-light" > Just now.< /p>
//                                                                         < img src = "./src/images/planet-earth.png" alt = "" class="w-4 h-4" >
//                                                                             </div>
//                                                                             < /div>
//                                                                             < /div>
//                                                                             < div class='flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200' >
//                                                                                 <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" >
//                                                                                     <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2"
// d = "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//     </svg>
//     < /div>
//     < /div>
//     < !--Message -->
//         <div class="pt-2 text-sm tracking-wide" >
//             <p>
//             Proud to have done this with HTML and tailwindCSS.
//                         < /p>
//                 < /div>
//                 < div class="w-full pt-3" >
//                     <img src="./src/images/myfeed.jpeg" alt = "" class="object-contain w-full" >
//                         </>
//                         < div class="flex items-center justify-between" >
//                             <div class="flex items-center pt-2 pb-2 pl-3 space-x-2 border-l-2 border-l-blue-600" >
//                                 <div>
//                                 <img src="./src/images/heart.png" alt = "" class="h-7 w-7" >
//                                     </div>
//                                     < div >
//                                     <p class="font-light" > 19.3M < /p>
//                                         < /div>
//                                         < /div>
//                                         < div class="flex items-center font-normal text-[14px] text-gray-500 space-x-2" >
//                                             <div>
//                                             <p>7.4K Comments < /p>
//                                                 < /div>
//                                                 < div >
//                                                 <p>4.2K Shares < /p>
//                                                     < /div>
//                                                     < /div>
//                                                     < /div>
//                                                     < div class="flex items-center justify-center pt-3 space-x-16 border-t-2 " >
//                                                         <div class="flex items-center space-x-2" >
//                                                             <i class="fa-regular fa-thumbs-up fa-lg" > </i>
//                                                                 < p class="text-sm capitalize" > like < /p>
//                                                                     < /div>
//                                                                     < div class="flex items-center space-x-2" >
//                                                                         <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill = "none" viewBox = "0 0 24 24" stroke = "currentColor" >
//                                                                             <path stroke - linecap="round" stroke - linejoin="round" stroke - width="2"
// d = "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//     </svg>
//     < p class="text-sm" > Comment < /p>
//         < /div>
//         < div class="flex items-center space-x-2" >
//             <img src="./src/images/share.png" alt = "" class="w-5 h-4" >
//                 <p class="text-sm" > Share < /p>
//                     < /div>
//                     < /div>
//                     < /div>
//                     < !--End of Third post-- >
