async function getData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/hihabib/test-new-api/main/news/sport.json"
  );
  return response.json();
}
(async () => {
  const obj = await getData();
  const allNews = obj.news;
  allNews.forEach((news) => {

    const text = `${news.body}`  
    
  function splitString(allText){
  const arrText = allText.split("");
  const strimText = arrText.slice(0, 70);
  const newTrimText = strimText.join("") + "...<strong>[Read More]</strong>"
  return newTrimText
 }

 const result = splitString(text)

    const packHTML = `<div class="news">
       <div><img src="http://placehold.co/350x200" alt=""></div>
       <div><h1>${news.headline}</h1></div>
       <div><strong>${news.date}</strong></div>
       <div><p>${news.abstract}</p></div>
       <div><strong>${news.author}</strong> </div>
       <div><strong>${news.section}</strong></div>
       <div>${result}</div>

       </div > `;

    const newsContainer = document.querySelector(`.news-container`);
    newsContainer.innerHTML += packHTML;

  
  });
})();



// Search Bar

// const search = document.querySelector(`.search`);

// search.addEventListener(`input`, function(e){
  
//   if(search.value === `Sports`){
//     news.
//     news.style.display = `block`
//   } else{
//     news.style.display = `none`
//   }
// })




// fetch("https://raw.githubusercontent.com/hihabib/test-new-api/main/news/sport.json")
//   .then(function (res) {
//     return res.json();
//   }).then(function (res) {
//     const allNews = (res.news);
//     allNews.forEach(news => {
//       console.log(news)

//        const packHTML =  `<div class="news">
//        <div><img src="http://placehold.co/400x200" alt=""></div>
//        <div><h1>${news.headline}</h1></div>
//        <div>${news.date}</div>
//        <div><p>${news.abstract}</p></div>
//        <div>${news.article_uri}</div>
//        <div>${news.pfd_uri}</div>

//        </div > `

//        const newsContainer = document.querySelector(`.news-container`)
//        newsContainer.innerHTML += packHTML
//     });
//   }).catch(function (err) {
//     console.log(err)
//   })


