// Call the dataTables jQuery plugin
$(document).ready(function() {
  chargeUsers();
  $('#users').DataTable();
});

function chargeUsers() {

  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const content = await rawResponse.json();

  console.log(content);


}