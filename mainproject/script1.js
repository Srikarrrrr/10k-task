
// async function translateText() {
//     const sourceText = document.getElementById('source-text').value;
//     const sourceLanguage = document.getElementById('source-language').value;

//     const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
//     const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sourceText)}&langpair=${sourceLanguage}|en`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         const translatedText = data.responseData.translatedText;
//         document.getElementById('translated-text').innerText = translatedText;
//     } catch (error) {
//         console.error('Error translating text:', error);
//     }
// }
