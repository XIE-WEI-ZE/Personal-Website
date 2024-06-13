(function ($) {
    $.fn.timeline = function() {
        var selectors = {
            id: $(this),
            item: $(this).find(".item"),
            activeClass: "item--active",
            img: ".img"
        };

        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            'background-image',
            'url(' + selectors.item.first().find(selectors.img).attr('src') + ')'
        );

        var itemLength = selectors.item.length;

        $(window).scroll(function() {
            var pos = $(this).scrollTop();

            selectors.item.each(function(i) {
                var $this = $(this);
                var min = $this.offset().top;
                var max = $this.height() + $this.offset().top;

                if (i === itemLength - 1 && pos > min + ($this.height() / 2)) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                            selectors.item.last()
                                .find(selectors.img)
                                .attr("src") +
                            ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 10 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" + $this.find(selectors.img).attr("src") + ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $this.addClass(selectors.activeClass);
                }
            });
        });
    };
}(jQuery));
