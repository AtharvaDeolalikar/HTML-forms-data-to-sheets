const scriptURL = 'https://script.google.com/macros/s/AKfycbyPgjy90NLSD247K6UXYbNAT30w6hVJ3F1Z5c73b3Hb6SrQh2rBGhF2KXeiOr1jtSXyQg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

function submitForm() {
            window.alert("The form data has been added to G-Sheets successfully!");
            setTimeout(function()
                       {document.getElementById("myForm").reset();}, 000);
            }