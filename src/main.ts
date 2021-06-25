const someElement = document.querySelector('#foo');

someElement.addEventListener('blur', (e) => {
    const target = e.target as HTMLInputElement;
    console.log('event', target.value);    
})