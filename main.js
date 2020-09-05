
    
function generator(){
// This will just create an image element.
let image = document.createElement('img');
// to look section/div by its ID
let div = document.getElementById('flex-gen');
// To display an image must first set its attributes.
image.setAttribute("src", "https://media.giphy.com/media/3ohs7JG6cq7EWesFcQ/giphy.gif");
// to put image into div
div.appendChild(image);
}

// hope can count time of click then reset/reduce one by one
// function makeArray(){
//     let clicktime = document.getElementsByClassName('btn-success');
//     for (let clikctime = 0; clikctime < 10; clicktime++);
// }


function reset(){
    document.getElementById('flex-gen').remove();
    // document.getElementById('flex-gen').removeAttribute('src');
    // document.getElementsByTagName('div').pop();
    // document.getElementsByClassName('flex-box-container-2').remove();

}
