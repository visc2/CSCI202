$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('.SpacePeople').html(number);

    data['people'].forEach(function (d) {
        $('.astroNames').append('<li>' + d['name']+ '</li>');
    });

    data['people'].forEach(function (d) {
        $('.astroCraft').append('<li>' + d['craft']+ '</li>');
    });
});
