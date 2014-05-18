function initCufon() {
	Cufon.replace('h1, .content-block h2, .content-block h3, #news-block h2, #news-block h3, .history h2, .ttl-trafic, .ttl-promo, .ttl-payments, .ttl-privacy, .ttl-balance, .ttl-news', { fontFamily: 'AleksandraC', hover: true });

}

$(document).ready(function(){
	initCufon();
});