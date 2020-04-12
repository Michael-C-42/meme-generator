// Variables list

let topText, bottomText, urlInput
const generateBtn = document.querySelector('#generate-btn');

// Generate meme from button
generateBtn.addEventListener('click',function(){
    topText = document.querySelector('#top-text').value;
    bottomText = document.querySelector('#bottom-text').value;
    urlInput = document.querySelector('#image-input');
    //Check if url is empty
    if(urlInput.value == ""){
        return;
    }
    //create image
    let img = new Image();
    img.src = urlInput.value;
    img.width = 350;
    img.height = 300;
    //generate meme function
    generateMeme(img, bottomText, topText);
    //reset fields
    document.querySelector('#top-text').value = '';
    document.querySelector('#bottom-text').value = '';
    document.querySelector('#image-input').value = '';
});

function generateMeme(img, bottomText, topText) {
        //create new divs for top, bottom text and image
        let meme = document.createElement('div');
        let top = document.createElement('div');
        let bottom = document.createElement('div');
        let list = document.querySelector('.meme-list');
        //add classes to top, bottom text and meme
        top.classList.add('top');
        bottom.classList.add('bottom');
        meme.classList.add('meme');
        meme.append(img);
        list.appendChild(meme);
        top.innerText = topText;
        bottom.innerText = bottomText;
        meme.appendChild(top);
        meme.appendChild(bottom);
        //gray out when hovered
        meme.addEventListener('mouseover', function(e){
            e.target.classList.toggle('hover');
        });
        meme.addEventListener('mouseout',function(e){
            e.target.classList.remove('hover');
        });
        meme.addEventListener('click', function(e){
            e.target.parentElement.remove();
        });
}



