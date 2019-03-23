const includeLight = document.getElementById('light');
const includeDark = document.getElementById('dark');
includeLight.addEventListener('click', function () {
    includeCss('style.css')
})
includeDark.addEventListener('click', function () {
    includeCss('dark.css')
})