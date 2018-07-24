var apiKey = keys.NEWS_KEY;
var url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apikey=' + apiKey;

fetch(url)
  .then(
    r => {
      return r.json();
    }
  )
  .then(
    data => {
      console.log(data);
      let articles = data.articles;
      let newsFeed = document.createElement('ol');
      let body = document.getElementsByClassName('list')[0];
      body.appendChild(newsFeed);
      articles.map(article => {
        let articleItem = document.createElement('li');
        articleItem.innerHTML =
          '<a href="' + article.url + '">' + article.title + "<a/>" + "<br />" + article.publishedAt;
        newsFeed.appendChild(articleItem);
      })
    }
  )

  .catch(
    e => {
      console.log(`An error occurred: ${e}`);
    }
  );
