const news = document.querySelector('#news');

type TNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
};

let apiUrl = 'https://newsapi.org/v2/';
let apiKey = '37aad0d7157d47098de1f4adf93a7944';

async function fetchNews() {
    let response = await fetch(`${apiUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`);
    let obj = await response.json();
    renderNews(obj.articles);
}

fetchNews();

function renderNews(newsArr: TNews[]) {
    newsArr.forEach((newItem) => {
        const listItem = document.createElement('div');
        listItem.className = 'news__items';
        news?.appendChild(listItem);

        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);

        const descriptionItem = document.createElement('p');
        descriptionItem.innerHTML = newItem.description;
        listItem.appendChild(descriptionItem);

        const authorItem = document.createElement('p');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);
    });
}
