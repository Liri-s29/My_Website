let viewAfter = $('.view');
let n = viewAfter.length;
const evenRow = $('#even-row');
if (innerWidth < 991){
    viewAfter.remove();
    correctView();
}

function correctView(){
    for (let i = 0; i < n; i++){
        evenRow.prepend(viewAfter[i]);
    }
}