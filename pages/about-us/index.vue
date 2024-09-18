<template>
  <div :class="$style.privacy">
    <h1>About Us for https://HDHub4u.netlify.com/</h1>
    <p>
      Originally started as a hobby blog dedicated to aggregating movie reviews
      in 2008 HDHub4u has grown to cover everything related to bollywood.
    </p>
    <p>
      HDHub4u.netlify.com is India ‘s largest database of movie reviews and box
      office. HDHub4u is run by Anupama Jha with the help of the original set of
      bloggers who helped the site back in 2008 and 2009 We have a database of
      over 11 years of movie reviews, ratings and box office collections of
      bollywood movies released in India We aim to offer a voice for neutral
      opinion regarding bollywood
    </p>
    <p>
      Comments on our site are heavily moderated so please don’t spam the
      website. In case if you have any issues or want to contact us please do it
      via our contact us page.
    </p>
  </div>
</template>

<style lang="scss" module>
@import "~/assets/css/utilities/_variables.scss";

.privacy {
  padding: 13rem 5.5rem 0.5rem;

  @media (min-width: $breakpoint-small) {
    padding: 13rem 11.5rem 0.5rem;
  }

  p,
  li {
    font-size: small;
  }
}
</style>
