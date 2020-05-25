var init = function() {
    $('.panel').on('mouseover', onPanelMouseIn);
    $('.panel').on('mouseout', onPanelMouseOut);
};

var onPanelMouseIn = function(evt) {
    var $target = $(evt.currentTarget);
    var isPlaying = $target.hasClass('active');
    if (isPlaying) return;
    var video = $target.find('video')[0];
    video.play();
    $target.addClass('active');
};

var onPanelMouseOut = function(evt) {
    var $target = $(evt.currentTarget);
    var isPlaying = $target.hasClass('active');
    if (!isPlaying) return;
    var video = $target.find('video')[0];
    video.pause();
    $target.removeClass('active');
};

$(window).ready(init);