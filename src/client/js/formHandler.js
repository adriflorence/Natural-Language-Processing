function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    console.log("Form Submitted", formText)
    fetch('http://localhost:8000/api', {
        method: 'POST', 
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
    console.log(response);
    document.getElementById('text_polarity').innerText = 'Polarity: ' + response['polarity'];
    document.getElementById('text_polarity_confidence').innerText = 'Polarity confidence: ' + response['polarity_confidence'].toFixed(2);
    document.getElementById('text_subjectivity').innerText = 'Subjectivity: ' + response['subjectivity'];
    document.getElementById('text_subjectivity_confidence').innerText = 'Subjectivity confidence: ' + response['subjectivity_confidence'].toFixed(2);
}

export { handleSubmit }
