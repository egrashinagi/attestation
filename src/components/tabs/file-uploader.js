function getName(str, label) {
    let i;
    if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
    }
    else {
        i = str.lastIndexOf('/') + 1;
    }
    // var label = document.querySelector('.file-uploader__label');
    label.innerHTML = str.slice(i);
}

document
    .querySelectorAll('.file-uploader__form')
    .forEach(item => {
        item.querySelectorAll('.file-uploader__form-input')
            .forEach(input => {
                input.addEventListener('change', event => {
                    const value = event.srcElement.value;
                    const label = item.querySelector('.file-uploader__form-label');

                    getName(value, label);
                });
            })
    });

