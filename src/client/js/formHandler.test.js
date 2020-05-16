const formHandler = require('./formHandler.js')

test("something", () => {
    document.body.innerHTML = `
    <section>
        <form id="form" method="POST">
            <input id="text" type="text" name="input" value="" placeholder="Please type some text here to analyze..">
            <input id="button" type="submit" value="submit">
        </form>
    <section>
    <section>
        <strong>Form Results</strong>
        <div id="error"></div>
    </section>
    `

    const error = document.getElementById('error');
    const form = document.getElementById('form');
    const form_input = document.getElementById('text');
    // const submit_button = document.getElementById('button');

    form.onsubmit = formHandler.handleSubmit;
    form_input.value = "something";
    // submit_button.click();

    require('./formHandler.js')
    
    expect(error.innerHTML).toBe('');
    
});
