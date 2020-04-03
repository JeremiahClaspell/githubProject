function getSearch(){
    $('form').submit(event => {
        event.preventDefault(); 
        $('ul').empty(); 
        let search =$('input').val(); 
        request(search); 
    })
}

function request (search) {
    fetch(`https://api.github.com/users/${search}/repos`)
    .then(response => response.json())
    .then(responseJson =>{renderRepos(responseJson)})
}; 

function renderRepos (data) {
    for (let i=0; i<data.length; i++){
        $('ul').append(`
        <li><h3>${data[i].name}</h3><a href="${data[i].html_url}" target="_blank">View repo</a></li>
        `)
    }
}


function handleEvents(){
    getSearch(); 
}

$(handleEvents)