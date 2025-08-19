document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Generate a random tracking number (e.g., 10 digits)
    const trackingNumber = 'TRK' + Math.floor(1000000000 + Math.random() * 9000000000);
        // Possible statuses
    const statuses = ['Delivered', 'In Transit', 'Pending', 'Out for Delivery'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    // Check if result element exists, else create it
    let result = document.getElementById('result');
    if (!result) {
        result = document.createElement('div');
        result.id = 'result';
        document.body.appendChild(result);
    }

    result.textContent = 'Your Tracking Number: ' + trackingNumber + '\nStatus: ' + status;
});