function showDate() {
    const dateTime = new Date
    const longDate = dateTime.toLocaleString('en-US', {
       weekday: 'long',
       year: 'numeric',
       month: 'long',
       day: 'numeric',
       hour: 'numeric',
       minute: 'numeric',
       second: 'numeric',
    });
       return `Today is: ${longDate} `;

}

console.log(showDate());