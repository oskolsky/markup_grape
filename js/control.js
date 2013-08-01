Control = {

  i: 1,
  t: 1000,

  Next: function() {
    $('.bg__' + this.i).hide();

    if (this.i < 4) {
      this.i++;
    } else {
      this.i = 1;
    }

    this.Animation(i);
  },

  Prev: function() {
    $('.bg__' + this.i).hide();

    if (this.i > 1) {
      this.i--;
    } else {
      this.i = 4;
    }

    this.Animation(i);
  },

  Animation: function(i) {
    $('.bg__' + this.i).show();

    $('.content_article').hide();
    $('.content_article[data-section="' + this.i + '"]').fadeIn(750);

    $('.phone_screen').hide();
    $('.phone_screen[data-screen="' + this.i + '"]').fadeIn(750);
  }

};