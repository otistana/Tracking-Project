document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('tNumber').value.trim();
    const result = document.getElementById('result');

    // If nothing is input
    if (!input) {
        result.textContent = 'Nothing to Track.';
        return;
    }

    // If input is a 10-digit number
    if (/^\d{10}$/.test(input)) {
        const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'Dallas', 'Seattle', 'Atlanta', 'Denver', 'Boston'];
        const statuses = ['Out for Delivery', 'In Transit', 'Processing'];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        result.textContent = `Package is currently in: ${randomCity}<br>Status: ${randomStatus}`;
        return;
    }

    // For other input
    result.textContent = 'Invalid tracking nmber.';
});
