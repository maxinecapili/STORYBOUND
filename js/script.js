$('.signup').hide();

$('#signin, #signup').on(
    'click',
    function(){
        $('.signin, .signup').toggle();
    }
);

window.addEventListener('load', () =>{
    const preload = document.querySelector('.preload');
    preload.classList.add("preload-finish");
});