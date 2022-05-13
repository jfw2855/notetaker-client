let apiUrl
const apiUrls = {
    // CHANGE PRODUCTION URL WHEN DEPLOYING
	production: 'change once deployed',
	development: 'http://127.0.0.1:8000',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
