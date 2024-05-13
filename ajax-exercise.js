import axios from 'axios';

// PART 1: Show Dog Photo

function showDogPhoto(evt) {
  // TODO: get a random photo from the Dog API and show it in the #dog-image div
  axios.get('https://dog.ceo/api/breeds/image/random')

    .then((res) => {

      document.querySelector('#dog-image').
      innerHTML = `<img src="${res.data.message}">`
      console.log(res.data);

    })

}

// other way to solve this is 

// function showDogPhoto(evt) {
//   axios.get("https://dog.ceo/api/breeds/image/random")
//       .then(res => {
//          const imgUrl = res.data.message;
//          document.querySelector("#dog-image").innerHTML = `<img src=${imgUrl}>`;
//       })
//  }

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);


// PART 2: Show Weather

function showWeather(evt) {
   // TODO: request weather with that URL and show the forecast in #weather-info

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.txt?zipcode=${zipcode}`

  axios.get(url)

    .then(res => {

      document.querySelector('#weather-info')
      .innerText = res.data
      console.log(res.data)

    })
}

document.querySelector('#weather-button').addEventListener('click', showWeather);



// PART 3: Order Cookies

async function orderCookies(evt) {

    // TODO: Need to preventDefault here, because we're listening for a submit event!

   // Unlike the first two parts, in this one the event handler is listening for a 'submit' event.
  // The default behavior for a 'submit' event is to reload the page or go to a new page.
  // We don’t want this to happen, so we need evt.preventDefault() to prevent this.

  const cookieType = document.querySelector('#cookie-type-field').value;
  const qty = document.querySelector('#qty-field').value;
  const response = await axios.post(
    '/order-cookies.json',
    {cookieType: cookieType, qty: qty}
  );

  const orderStatusDiv = document.querySelector("#order-status");
  orderStatusDiv.innerText = response.data.message;
  if (response.data.resultCode === "ERROR") {
    orderStatusDiv.classList.add('order-error');
  }
  else {
    orderStatusDiv.classList.remove('order-error');
  }
}

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

document.querySelector('#order-form').addEventListener('submit', orderCookies);



// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
