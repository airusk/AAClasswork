class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id')
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    
    // this.handleClick();

  }

  render() {
    if (this.$el.followState === "followed") {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }

  // handleClick() {
  //   this.$el.preventDefault();
  //   if (this.$el.followState() === "following") {
  //     // make delete request
  //   } else {
  //     $.ajax({
  //       method: "POST",
  //       url: "/users/",
  //       dataType: "JSON"
  //     });
  //   }
  // }
}

module.exports = FollowToggle;