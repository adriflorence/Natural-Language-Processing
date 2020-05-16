function handleSubmit(event) {
    event.preventDefault();
    let url_prod = '/api';

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    // basic error handling
    if (!formText) {
        document.getElementById('error').innerText = 'You need to provide some text before you hit submit';
        return;
    }

    console.log("Form Submitted", formText)
    fetch(url_prod, {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: formText}), 
    })
    .then(res => res.json())
    .then(function(res) {
        buildInnerHTML(res);
    })
}

function buildInnerHTML(response) {
    document.getElementById('error').innerText = '';
    document.getElementById('text_polarity').innerText = 'Polarity: ' + response['polarity'];
    document.getElementById('text_polarity_confidence').innerText = 'Polarity confidence: ' + response['polarity_confidence'].toFixed(2);
    document.getElementById('text_subjectivity').innerText = 'Subjectivity: ' + response['subjectivity'];
    document.getElementById('text_subjectivity_confidence').innerText = 'Subjectivity confidence: ' + response['subjectivity_confidence'].toFixed(2);
}

export { handleSubmit }
