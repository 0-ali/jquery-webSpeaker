/*!
 * jQuery-webSpeaker v1.1.0 (https://github.com/xc0d3rz/jquery-webSpeaker)
 * Copyright 2016-2017 xc0d3rz.
 * Licensed under the MIT license
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
} (function ($) {
    var webSpeaker = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, webSpeaker.DEFAULTS, this.dataOptions(), options);
    };
    webSpeaker.DEFAULTS = {
        text: "",
        language: "en",
        playType: "button",
        playIcon: "🔊",
        track: "",
        responsiveVoice: true
    };
    webSpeaker.prototype.dataOptions = function () {
        var options = {
            text: this.$element.data('text'),
            language: this.$element.data('language'),
            playType: this.$element.data('playType'),
            playIcon: this.$element.data('playIcon'),
            track: this.$element.data('track'),
            responsiveVoice: this.$element.data('responsiveVoice')

        };

        var keys = Object.keys(options);

        for (var i in keys) {
            var key = keys[i];

            if (typeof (options[key]) === 'undefined') {
                delete options[key];
            }
        }

        return options;
    };
    webSpeaker.prototype.button = function () {
        var
            template = $(document.createElement('button')),
            element = this.$element;
        template.text(this.options.playIcon);
        template.attr("class", "webSpeaker-button");
        template.on('click', function (e) {
            $(element).webSpeaker();
        });
        return template;
    };
    webSpeaker.prototype.hover = function () {
        var template = this.$element;
        template.on('hover', function (e) {
            $(template).webSpeaker();
        });
    };
    webSpeaker.prototype.text = function () {
        if (this.options.text == "" || this.options.text == null) {
            var a = this.$element.text();
        } else {
            var a = this.options.text;
        }
        return a.replace(this.options.playIcon, "");
    };
    webSpeaker.prototype.render = function () {
        var playButton = this.options.playType;
        switch (playButton) {
            case 'button':
                this.$element.append(this.button());
                break;
            case 'hover':
                this.hover();
                break;
            default:
                this.$element.append(this.button());
                break;
        }
        this.$element.data('trackPlayerID', id = "trackPlayer-" + this.rand());
    };
    webSpeaker.prototype.language = function () {
        var a = this.options.language;
        switch (a) {
            case 'en':
                var voice = "UK English Female";
                break;
            case 'es':
                var voice = "Spanish Female";
                break;
            case 'fr':
                var voice = "French Female";
                break;
            case 'ar':
                var voice = "Arabic Male";
                break;
            default:
                var voice = "undefined";
                break;
        }
        var b = (voice == "undefined") ? a : voice;
        return b;
    };
    webSpeaker.prototype.rand = function () {
        var dates = new Date();
        var random = "" + (Math.random() * (dates.getSeconds()) + Math.random()) + "";
        return btoa(random.substr(0, 10)).replace("==", "");
    };
    webSpeaker.prototype.pauseAll = function () {
        var getAll = $('[data-trackPlayer]');
        for (var i = 0; i < getAll.length; i++) {
            if (getAll[i]) {
                getAll[i].pause();
            }
        }
    }
    webSpeaker.prototype.trackPlayer = function () {
        var trackPlayer = {
            id: this.$element.data('trackPlayerID'),
            media: new Audio
        };
        trackPlayer.element = $('[data-trackPlayer="' + trackPlayer.id + '"]');
        if (trackPlayer.element.length > 0) {
            if (trackPlayer.element.data('playing') == true) {
                trackPlayer.element[0].pause();
            } else {
                this.pauseAll();
                trackPlayer.element[0].play();
            }
        } else {
            trackPlayer.media.setAttribute("data-trackPlayer", trackPlayer.id);
            $('body').after(trackPlayer.media);
            trackPlayer.media.src = this.options.track;
            trackPlayer.media.addEventListener('playing', function (e) {
                $(trackPlayer.media).data('playing', true);
            });
            trackPlayer.media.addEventListener('ended', function () {
                $(trackPlayer.media).data('playing', false);
            });
            trackPlayer.media.addEventListener('pause', function () {
                $(trackPlayer.media).data('playing', false);
            });
            this.pauseAll();
            trackPlayer.media.play();
        }

    };
    webSpeaker.prototype.play = function () {
        var text = this.text();
        if (this.options.responsiveVoice == true || this.options.ResponsiveVoice == "true") {
            if (typeof window.ResponsiveVoice == "undefined") {
                throw new Error("jQuery webSpeaker requires the latest version of responsiveVoice");
            } else {
                responsiveVoice.speak(text, this.language());
            }
        }
        if (this.options.track != null && this.options.track.length > 0) {
            this.trackPlayer();
        }
    };
    $.fn.webSpeaker = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('webSpeaker');
            var init = !data || typeof (option) === 'object';
            var options = typeof (option) === 'object' ? option : {};
            if (init) {
                var WebSpeaker = new webSpeaker(this, options)
                $(this).data('webSpeaker', WebSpeaker);
                WebSpeaker.render();
            } else {
                data.play();
            }
        });
    };
}));
