const includeLight = document.getElementById('light');
const includeDark = document.getElementById('dark');
includeLight.addEventListener('click', function () {
    includeCss('css/style.css')
})
includeDark.addEventListener('click', function () {
    includeCss('css/dark.css')
})
includeCss('css/style.css');