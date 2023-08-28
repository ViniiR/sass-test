url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style='fill: rgba(0, 0, 0, 1);transform: ;msFilter:;'%3E%3Cpath d='M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z'%3E%3C/path%3E%3C/svg%3E");

// Get the checkbox element
const checkbox = document.getElementById('myCheckbox');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        console.log('Checkbox is checked');
        // Do something when the checkbox is checked
    } else {
        console.log('Checkbox is not checked');
        // Do something when the checkbox is not checked
    }
});